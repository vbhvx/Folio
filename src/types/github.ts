export type ContributionDay = {
  date: string;
  level: number;
};

export type CalendarData = {
  days: ContributionDay[];
  total: string;
  year: number;
};

export type ApiContributionDay = {
  date?: unknown;
  level?: unknown;
};

export type ApiContributionResponse = {
  total?: Record<string, unknown>;
  contributions?: ApiContributionDay[];
};
