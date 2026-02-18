import API_BASE_URL from "../../utils/config";
import { useState } from "react";
import axios from "axios";
import styles from "./Feedback.module.css";
import Section from "../Section/Section";
import feedbackImg from "../../assets/images/capibara.gif";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ratingMessages = ["Terrible", "Bad", "Okay", "Nice!", "Excellent!"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      setError("Please select a rating");
      return;
    }

    if (comment.trim() === "") {
      setError("Please write a comment");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(`${API_BASE_URL}api/feedback`, {
        rating,
        comment,
      });
      setSubmitted(true);
      setComment("");
      setRating(0);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Section>
      <div className={styles.feedbackContainer}>
        {!submitted ? (
          <>
            <h3 className={styles.title}>
              This project{" "}
              <span className={styles.highlight}>is completely non-profit</span>
            </h3>
            <p className={styles.description}>
              This study project was created by a group of enthusiasts.
              Therefore, we would be very grateful for your evaluation and
              feedback.
            </p>
            <div className={styles.feedbackImgWrapper}>
              <img
                className={styles.feedbackImg}
                src={feedbackImg}
                alt="Logo"
              />
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Please leave your rating and comment below:
              </label>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`${styles.star} ${
                      star <= (hoverRating || rating) ? styles.filled : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {rating > 0 && (
                <p className={styles.ratingMessage}>
                  {ratingMessages[rating - 1]}
                </p>
              )}

              <label className={styles.label}>Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                placeholder="Hello! I really liked your kombucha shop)"
                className={styles.textarea}
              />
              {error && <p className={styles.error}>{error}</p>}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Feedback"}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.thankYouMessage}>
            <h2>
              Thank you for
              <span className={styles.highlight}> your feedback!</span>
            </h2>
            <button
              className={styles.submitBtn}
              onClick={() => setSubmitted(false)}
            >
              Send another feedback
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Feedback;
