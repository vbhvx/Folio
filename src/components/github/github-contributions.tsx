import { ContributionCalendar } from "./contribution-calendar";
import {
  fetchServerContributions,
  generateEmptyCalendarDays,
} from "@/services/github";
import type { ContributionDay } from "@/types";

export type { ContributionDay };

export async function GitHubContributions() {
  const year = new Date().getUTCFullYear();
  const data = await fetchServerContributions(year);
  if (data) {
    return <ContributionCalendar days={data.days} total={data.total} year={year} />;
  }

  const days = generateEmptyCalendarDays(year);
  return <ContributionCalendar days={days} total="" year={year} />;
}
