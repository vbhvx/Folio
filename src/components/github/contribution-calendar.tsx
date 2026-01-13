"use client";

import { useEffect, useState } from "react";
import {
  fetchClientContributions,
  generateEmptyCalendarDays,
  GITHUB_CONTRIBUTIONS_REFRESH_INTERVAL_MS,
} from "@/services/github";
import type { CalendarData, ContributionDay } from "@/types";

export type { CalendarData, ContributionDay };

export function ContributionCalendar(initial: CalendarData) {
  const [currentYear, setCurrentYear] = useState(initial.year);
  const [selectedYear, setSelectedYear] = useState(initial.year);
  const [calendars, setCalendars] = useState<Record<number, CalendarData>>({
    [initial.year]: initial,
  });

  useEffect(() => {
    const year = new Date().getFullYear();
    if (year !== initial.year) {
      setCurrentYear(year);
      setSelectedYear(year);
    }
  }, [initial.year]);

  useEffect(() => {
    let active = true;
    let lastCheckedAt = 0;

    async function refresh() {
      lastCheckedAt = Date.now();
      const year = selectedYear;
      try {
        const result = await fetchClientContributions(year);
        if (!result || !active) return;
        setCalendars((current) => ({
          ...current,
          [year]: { days: result.days, total: result.total, year },
        }));
      } catch {
        // Retain the build-time graph if the live service is unavailable.
      }
    }

    function refreshWhenVisible() {
      if (document.visibilityState !== "visible") return;
      const year = new Date().getFullYear();
      if (year !== currentYear) {
        setCurrentYear(year);
        setSelectedYear(year);
      } else if (Date.now() - lastCheckedAt >= GITHUB_CONTRIBUTIONS_REFRESH_INTERVAL_MS) {
        void refresh();
      }
    }

    void refresh();
    const timer = window.setInterval(() => {
      const year = new Date().getFullYear();
      if (year !== currentYear) {
        setCurrentYear(year);
        setSelectedYear(year);
      } else if (document.visibilityState === "visible") {
        void refresh();
      }
    }, GITHUB_CONTRIBUTIONS_REFRESH_INTERVAL_MS);

    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      active = false;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [selectedYear, currentYear]);

  const data = calendars[selectedYear] ?? {
    days: generateEmptyCalendarDays(selectedYear),
    total: "",
    year: selectedYear,
  };

  const months = Array.from({ length: 12 }, (_, month) => {
    const first = `${selectedYear}-${String(month + 1).padStart(2, "0")}-01`;
    const index = data.days.findIndex((day) => day.date === first);
    return {
      name: new Date(Date.UTC(selectedYear, month, 1)).toLocaleString("en-US", {
        month: "short",
        timeZone: "UTC",
      }),
      column: Math.floor(index / 7) + 1,
    };
  });

  const totalLabel = data.total
    ? `${data.total} ${Number(data.total.replace(/,/g, "")) === 1 ? "contribution" : "contributions"} in ${data.year}`
    : `Contributions in ${data.year}`;

  return (
    <div>
      <div className="github-graph-wrap">
        <div
          className="github-months"
          style={{
            gridTemplateColumns: `repeat(${data.days.length / 7}, var(--graph-cell-size))`,
          }}
          aria-hidden="true"
        >
          {months.map((month) => (
            <span
              key={month.name}
              style={{ gridColumn: `${month.column} / span 4` }}
            >
              {month.name}
            </span>
          ))}
        </div>
        <div
          className="github-graph"
          role="img"
          aria-label={`${data.total || "Public"} GitHub contributions in ${data.year}`}
        >
          {data.days.map((day) => (
            <span
              key={day.date}
              className={`contribution-day ${day.level < 0 ? "outside-year" : `level-${day.level}`}`}
              title={
                day.level < 0
                  ? "Outside current year"
                  : `${day.date}: activity level ${day.level}`
              }
            />
          ))}
        </div>
      </div>
      <div className="github-graph-meta">
        <span>{totalLabel}</span>
        <span>
          Less <i className="level-0" />
          <i className="level-1" />
          <i className="level-2" />
          <i className="level-3" />
          <i className="level-4" /> More
        </span>
      </div>
      <div className="github-years" aria-label="Contribution year">
        {[currentYear, currentYear - 1, currentYear - 2].map((year) => (
          <button
            key={year}
            type="button"
            aria-pressed={selectedYear === year}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
