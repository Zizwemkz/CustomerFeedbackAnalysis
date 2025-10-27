import api from "../api/axios";
import { FeedbackRequestDto, FeedbackResponseDto, PagedResult } from "../types";

const PATH = "/feedback";

export const createFeedback = async (
  dto: FeedbackRequestDto
): Promise<FeedbackResponseDto> => {
  const resp = await api.post(PATH, dto);
  return mapFeedbackResponseDto(resp.data);
};

export const getFeedbacks = async (
  page = 1,
  pageSize = 10,
  sentiment?: string,
  tag?: string
): Promise<PagedResult<FeedbackResponseDto>> => {
  const params: any = { page, pageSize };
  if (sentiment) params.sentiment = sentiment;
  if (tag) params.tag = tag;
  const resp = await api.get("", { params });
  // Map the paged result and each item
  const mapped = mapPagedResult<FeedbackResponseDto>(resp.data);
  mapped.items = mapped.items.map(mapFeedbackResponseDto);
  return mapped;
};

function mapPagedResult<T>(raw: any): PagedResult<T> {
  return {
    items: raw.Items ?? [],
    totalCount: raw.TotalCount ?? 0,
    page: raw.Page ?? 1,
    pageSize: raw.PageSize ?? 10,
  };
}

function mapFeedbackResponseDto(raw: any): FeedbackResponseDto {
  return {
    id: raw.Id,
    text: raw.Text,
    email: raw.Email,
    createdAt: raw.CreatedAt,
    analysis: raw.Analysis
      ? {
          summary: raw.Analysis.Summary,
          sentiment: raw.Analysis.Sentiment,
          tags: raw.Analysis.Tags,
          priority: raw.Analysis.Priority,
          nextAction: raw.Analysis.NextAction,
        }
      : undefined,
  };
}
