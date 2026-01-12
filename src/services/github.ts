import type {
  ApiContributionDay,
  ApiContributionResponse,
  CalendarData,
  ContributionDay,
} from "@/types";

export const GITHUB_USERNAME = "vbhvx";
export const GITHUB_CONTRIBUTIONS_REFRESH_INTERVAL_MS = 60 * 60 * 1000; // 1 hour

/**
 * Computes calendar days with week padding for a given year.
 */
export function calculateCalendarDays(
  year: number,
  contributions: ApiContributionDay[]
): ContributionDay[] | null {
  const calendar = new Map<string, number>();

  for (const day of contributions) {
    if (
      typeof day.date === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(day.date) &&
      typeof day.level === "number" &&
      Number.isInteger(day.level) &&
      day.level >= 0 &&
      day.level <= 4
    ) {
      calendar.set(day.date, day.level);
    }
  }

  if (calendar.size < 300) return null;

  const start = new Date(Date.UTC(year, 0, 1));
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const end = new Date(Date.UTC(year, 11, 31));
  end.setUTCDate(end.getUTCDate() + 6 - end.getUTCDay());

  const days: ContributionDay[] = [];
  for (let date = start; date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
    const value = date.toISOString().slice(0, 10);
    days.push({
      date: value,
      level: value.startsWith(`${year}-`) ? (calendar.get(value) ?? 0) : -1,
    });
  }

  return days;
}

/**
 * Generates an empty calendar with default 0 levels (or -1 outside year).
 */
export function generateEmptyCalendarDays(year: number): ContributionDay[] {
  const start = new Date(Date.UTC(year, 0, 1));
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const end = new Date(Date.UTC(year, 11, 31));
  end.setUTCDate(end.getUTCDate() + 6 - end.getUTCDay());

  const days: ContributionDay[] = [];
  for (let date = start; date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
    const value = date.toISOString().slice(0, 10);
    days.push({ date: value, level: value.startsWith(`${year}-`) ? 0 : -1 });
  }

  return days;
}

/**
 * Fetches contributions directly from GitHub HTML profile at build time.
 */
export async function fetchServerContributions(
  year: number
): Promise<{ days: ContributionDay[]; total: string } | null> {
  try {
    const response = await fetch(
      `https://github.com/users/${GITHUB_USERNAME}/contributions?from=${year}-01-01&to=${year}-12-31&build=${Date.now()}`,
      {
        headers: { "User-Agent": "Vaibhav-Saini-Portfolio" },
        cache: "force-cache",
      }
    );

    if (!response.ok) return null;

    const html = await response.text();
    const calendar = new Map(
      Array.from(
        html.matchAll(
          /<td\b[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([0-4])"[^>]*>/g
        )
      ).map((match) => [match[1], Number(match[2])] as const)
    );

    if (calendar.size < 300) return null;

    const start = new Date(Date.UTC(year, 0, 1));
    start.setUTCDate(start.getUTCDate() - start.getUTCDay());
    const end = new Date(Date.UTC(year, 11, 31));
    end.setUTCDate(end.getUTCDate() + 6 - end.getUTCDay());

    const days: ContributionDay[] = [];
    for (let date = start; date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
      const value = date.toISOString().slice(0, 10);
      days.push({
        date: value,
        level: value.startsWith(`${year}-`) ? (calendar.get(value) ?? 0) : -1,
      });
    }

    const total =
      html.match(
        /id="js-contribution-activity-description"[^>]*>[\s\S]*?([\d,]+)\s+contributions/
      )?.[1] || "";

    return { days, total };
  } catch {
    return null;
  }
}

/**
 * Fetches contribution data dynamically from client-facing contributions API.
 */
export async function fetchClientContributions(
  year: number
): Promise<{ days: ContributionDay[]; total: string } | null> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`,
      { cache: "no-store" }
    );

    if (!response.ok) return null;

    const payload = (await response.json()) as ApiContributionResponse;
    const days = calculateCalendarDays(year, payload.contributions ?? []);
    if (!days) return null;

    const total = payload.total?.[String(year)];
    return {
      days,
      total: typeof total === "number" ? total.toLocaleString("en-US") : "",
    };
  } catch {
    return null;
  }
}
