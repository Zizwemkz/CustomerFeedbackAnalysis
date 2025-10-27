<div align="center">
  <h1>
       Client Review Analysis Frontend (React + TypeScript)
  </h1>
  <p> The Product Review Analysis UI is a clean, modern, and User-driven React + TypeScript application designed to provide users with an intuitive way to submit product feedback and view AI-analyzed insights such as sentiment, summaries,
  This application helps reveal customer sentiments helping the manufacturers decide what is required to make the product a success. Depending on the reviews provided by the users, the product is classified as good, bad or neutral.
  </p>
</div>

#  Key Features

* **Feedback Submission Form** — users can provide a short product review with optional email.
* **Paginated Review Table** — dynamic, searchable list of user reviews.
* **Email Filtering & Sentiment Filtering** — easily narrow down reviews by tone or user.
* **Responsive & Accessible UI** — modern, clean layout with consistent design system.
* **React Router Navigation** — seamless navigation between pages.
* **Environment-Based Configuration** — easily point to different API environments
* **AI-Powered Review Analysis** — integrates with the backend API to display sentiment, tags, and summaries.


##  Project Structure

```bash
product-review-ui/
│
├── public/                        → Static public assets
├── src/
│   ├── assets/                    → Images and logos
│   ├── components/                → Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── FeedbackForm.tsx
│   │   ├── FeedbackTable.tsx
│   │   ├── Pagination.tsx
│   │   └── ClientReviewInvite.tsx
│   ├── pages/                     → Page-level components
│   │   ├── Home.tsx
│   │   ├── AddReview.tsx
│   │   └── ViewReviews.tsx
│   ├── services/                  → API services (Axios)
│   │   └── feedbackService.ts
│   ├── types/                     → Shared TypeScript DTOs
│   ├── App.tsx                    → Root component with routing
│   └── index.tsx                  → Entry point
│
├── .env                           → Environment configuration
├── package.json                   → Project dependencies & scripts
└── tsconfig.json                  → TypeScript compiler configuration
```


# Prerequisites

    ```bash
    Before running this project, ensure you have:
    Node.js 20+
    npm 9+
    Backend API running (default: https://localhost:44334)
    ```

## Getting Started

 #   **Clone the Repository**
 ```bash
    git clone https://github.com/Zizwemkz/CustomerFeedbackAnalysis.git
    cd product-review-ui
 ```

##  Install Dependencies
    ```bash
    npm install
    ```
## Run the Development Server
    ```bash 
    npm start
    ```