import { useEffect, useState } from "react";
import { getFeedbacks } from "../../../api/feedbackApi";
import styles from "./AdminFeedbackPage.module.css";

export default function AdminFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const data = await getFeedbacks();
        setFeedbacks(data);
      } catch (err) {
        console.error("Failed to fetch feedbacks:", err);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Усі відгуки</h2>
      <div className={styles.cards}>
        {feedbacks.map((fb) => (
          <div key={fb._id} className={styles.card}>
            <div className={styles.rating}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= fb.rating ? styles.filledStar : styles.emptyStar
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <p className={styles.comment}>{fb.comment}</p>
            <p className={styles.date}>
              {new Date(fb.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
