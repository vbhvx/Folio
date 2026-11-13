import { test } from "node:test";
import assert from "node:assert";
import {
  calculateCalendarDays,
  generateEmptyCalendarDays,
} from "../src/services/github.ts";

test("generateEmptyCalendarDays creates a full padded calendar for 2026", () => {
  const days = generateEmptyCalendarDays(2026);
  assert.ok(days.length >= 365);
  // Total days must be a multiple of 7 (full weeks from Sunday to Saturday)
  assert.strictEqual(days.length % 7, 0);

  // Check first day is a Sunday (UTC)
  const firstDate = new Date(`${days[0].date}T00:00:00Z`);
  assert.strictEqual(firstDate.getUTCDay(), 0);

  // Check last day is a Saturday (UTC)
  const lastDate = new Date(`${days[days.length - 1].date}T00:00:00Z`);
  assert.strictEqual(lastDate.getUTCDay(), 6);
});

test("calculateCalendarDays returns null when fewer than 300 days are provided", () => {
  const shortList = [
    { date: "2026-01-01", level: 1 },
    { date: "2026-01-02", level: 2 },
  ];
  assert.strictEqual(calculateCalendarDays(2026, shortList), null);
});

test("calculateCalendarDays parses and maps valid 365 days correctly", () => {
  const fullYear: { date: string; level: number }[] = [];
  for (let m = 1; m <= 12; m++) {
    const daysInMonth = new Date(2026, m, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const date = `2026-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      fullYear.push({ date, level: 1 });
    }
  }

  const days = calculateCalendarDays(2026, fullYear);
  assert.ok(days !== null);
  assert.strictEqual(days.length % 7, 0);

  // Target year days should have level 1
  const midYearDay = days.find((d) => d.date === "2026-06-15");
  assert.ok(midYearDay);
  assert.strictEqual(midYearDay.level, 1);
});
