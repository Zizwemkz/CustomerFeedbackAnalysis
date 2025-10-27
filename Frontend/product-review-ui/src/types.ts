// src/types.ts
export interface AnalysisDto {
  summary: string;
  sentiment: string; // positive | neutral | negative
  tags: string[];
  priority: string;
  nextAction: string;
}

export interface FeedbackRequestDto {
  text: string;
  email?: string | null;
}

export interface FeedbackResponseDto {
  id: string;
  text: string;
  email?: string | null;
  createdAt: string; // ISO
  analysis?: AnalysisDto | null;
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
}
