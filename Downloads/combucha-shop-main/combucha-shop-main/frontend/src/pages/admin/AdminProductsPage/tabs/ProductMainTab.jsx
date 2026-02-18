import styles from "../AdminProductsPage.module.css";

export default function ProductMainTab({ form, handleChange }) {
  return (
    <>
      <div className={styles.inputGroup}>
        <label>Назва товару</label>
        <input
          type="text"
          name="name"
          placeholder="Назва"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Обʼєм (л)</label>
        <input
          type="number"
          name="volume"
          placeholder="Обʼєм (л)"
          value={form.volume}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Вартість</label>
        <input
          type="number"
          name="price"
          placeholder="Вартість"
          value={form.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Опис</label>
        <textarea
          name="description"
          placeholder="Опис"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Кількість</label>
        <input
          type="number"
          name="countInStock"
          placeholder="Кількість"
          value={form.countInStock}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
