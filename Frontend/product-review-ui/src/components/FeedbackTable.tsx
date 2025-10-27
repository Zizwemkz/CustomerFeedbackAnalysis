import React, { useEffect, useState } from "react";
import { getFeedbacks } from "../services/feedbackService";
import { FeedbackResponseDto } from "../types";
import { Pagination } from "./Pagination";
import { format } from "date-fns";

interface FeedbackTableProps {
  emailFilter?: string;
}

export const FeedbackTable: React.FC<FeedbackTableProps> = ({ emailFilter }) => {
  const [items, setItems] = useState<FeedbackResponseDto[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sentimentFilter, setSentimentFilter] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (p = page) => {
    setLoading(true);
    setError(null);
    try {
      const res = await getFeedbacks(p, pageSize, sentimentFilter);
      let filteredItems = Array.isArray(res.items) ? res.items : [];

      // Apply client-side email filtering if provided
      if (emailFilter && emailFilter.trim()) {
        filteredItems = filteredItems.filter((it) =>
          it.email?.toLowerCase().includes(emailFilter.toLowerCase())
        );
      }

      setItems(filteredItems);
      setTotal(res.totalCount ?? 0);
      setPage(res.page ?? p);
    } catch (err: any) {
      setError(err?.message || "Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentimentFilter, emailFilter]);

  const onPageChange = (p: number) => fetchData(p);

  const formatSummary = (summary?: string) =>
    !summary ? "—" : summary.length > 100 ? `${summary.substring(0, 100)}...` : summary;

  const formatText = (text?: string) =>
    !text ? "—" : text.length > 120 ? `${text.substring(0, 120)}...` : text;

  return (
    <section aria-labelledby="reviews-heading" style={{ maxWidth: "95%", margin: "40px auto" }}>
      <h2 id="reviews-heading" style={{ color: "#001f3f" }}>Product Reviews</h2>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <label htmlFor="sentiment">Filter by Sentiment: </label>
          <select
            id="sentiment"
            value={sentimentFilter ?? ""}
            onChange={(e) => setSentimentFilter(e.target.value || undefined)}
          >
            <option value="">All</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>
        </div>
      </div>

      {loading && <div>Loading reviews…</div>}
      {error && <div role="alert" style={{ color: "crimson" }}>{error}</div>}

      {!loading && !error && (
        <>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
                backgroundColor: "white",
                borderRadius: 8,
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <thead style={{ backgroundColor: "#001f3f", color: "white" }}>
                <tr>
                  <th style={{ padding: 10, textAlign: "left" }}>Created</th>
                  <th style={{ padding: 10, textAlign: "left", width: "35%" }}>Review Text</th>
                  <th style={{ padding: 10, textAlign: "left" }}>Email</th>
                  <th style={{ padding: 10, textAlign: "left" }}>Sentiment</th>
                  <th style={{ padding: 10, textAlign: "left", width: "35%" }}>Summary</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(items) && items.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{ padding: 12 }}>No reviews found.</td>
                  </tr>
                )}
                {items.map((it) => (
                  <tr key={it.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: 10, verticalAlign: "top" }}>
                      {format(new Date(it.createdAt), "yyyy-MM-dd HH:mm")}
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top", color: "#333" }}>
                      {formatText(it.text)}
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>{it.email ?? "—"}</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>
                      <strong
                        style={{
                          color:
                            it.analysis?.sentiment === "positive"
                              ? "green"
                              : it.analysis?.sentiment === "negative"
                              ? "crimson"
                              : "gray",
                        }}
                      >
                        {it.analysis?.sentiment ?? "neutral"}
                      </strong>
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top", color: "#333" }}>
                      {formatSummary(it.analysis?.summary)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            page={page}
            pageSize={pageSize}
            totalCount={total}
            onPageChange={onPageChange}
          />
        </>
      )}
    </section>
  );
};
