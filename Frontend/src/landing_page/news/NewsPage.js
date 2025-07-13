import React, { useEffect, useState } from "react";
import "./NewsPage.css";

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=stock%20market&language=en&pageSize=8&apiKey=4517aee3b72f4e4e8f8a40afa6c9a8b8`
        );
        const data = await res.json();
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError("Failed to load news.");
        }
      } catch (e) {
        setError("Failed to fetch news data.");
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <section className="news-page">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Market News & Updates</h1>
          <p className="fs-5 text-muted">
            Stay updated with the latest headlines shaping financial markets worldwide.
          </p>
        </div>

        {loading && <div className="text-center">Loading news...</div>}

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <div className="row g-4">
          {!loading &&
            !error &&
            articles.map((article, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="news-card h-100 d-flex flex-column">
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="img-fluid mb-3 news-image"
                    />
                  )}
                  <h5 className="fw-bold">{article.title}</h5>
                  <p className="text-muted flex-grow-1">
                    {article.description?.substring(0, 100)}...
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-stoxure mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default NewsPage;
