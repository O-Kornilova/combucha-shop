import API_BASE_URL from "../../../utils/config";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../../components/Button/Button";
import styles from "./AdminProductsPage.module.css";

import ProductMainTab from "./tabs/ProductMainTab";
import ProductImagesTab from "./tabs/ProductImagesTab";

// Icons
import EditIcon from "../../../assets/icons/edit-icon.png";
import DeleteIcon from "../../../assets/icons/delete-icon.png";
import ArrowLeftIcon from "../../../assets/icons/arrow-left.png";

export default function AdminProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    _id: "",
    name: "",
    volume: "",
    price: "",
    currency: "UAH",
    images: [],
    taste: "",
    description: "",
    countInStock: "",
    visible: true,
    sale: 0,
  });
  const [uploading, setUploading] = useState(false);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/products`);
      setProducts(data);
    } catch (error) {
      console.error(error);
      alert("❌ Ошибка при загрузке продуктов");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Добавление или редактирование продукта
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Формируем payload, где images это массив объектов
      const payload = {
        ...form,
        images: form.images.map((img) => ({
          url: img.url,
          isMain: !!img.isMain,
        })),
      };

      console.log("🔹 Payload для отправки:", payload);

      if (form._id) {
        await axios.put(`${API_BASE_URL}/api/products/${form._id}`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("✅ Продукт обновлен!");
      } else {
        await axios.post(`${API_BASE_URL}/api/products`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("✅ Продукт добавлен!");
      }

      setShowForm(false);
      setForm({
        _id: "",
        name: "",
        volume: "",
        price: "",
        currency: "UAH",
        images: [],
        taste: "",
        description: "",
        countInStock: "",
        visible: true,
        sale: 0,
      });
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("❌ Ошибка при сохранении продукта");
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Вы уверены, что хотите удалить этот продукт?")) {
      try {
        await axios.delete(`${API_BASE_URL}/api/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchProducts();
        alert("✅ Продукт удален");
      } catch (error) {
        console.error(error);
        alert("❌ Ошибка при удалении продукта");
      }
    }
  };

  const editHandler = (product) => {
    setForm({
      ...product,
      _id: product._id,
    });
    setShowForm(true);
  };

  const toggleVisibility = async (product) => {
    try {
      await axios.put(
        `${API_BASE_URL}/api/products/${product._id}`,
        { visible: !product.visible },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("❌ Ошибка при изменении видимости");
    }
  };

  return (
    <div className={styles.adminContainer}>
      <div className={styles.header}>
        <Button onClick={() => setShowForm(!showForm)}>Додати продукт</Button>
      </div>

      {showForm && (
        <div className={styles.popup}>
          <div className={styles.header}>
            <h3 className={styles.headerTile}>Картка товару</h3>
            <Button
              onClick={() => setShowForm(false)}
              className={styles.button}
            >
              <img
                src={ArrowLeftIcon}
                alt="Назад"
                className={styles.arrowLeft}
              />
              <span className={styles.buttonText}>Назад</span>
            </Button>
          </div>

          <div className={styles.formContainer}>
            <div className={styles.tabs}>
              {["Головна", "Фото товару", "Ціна", "Додаткові данні"].map(
                (tab, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`${styles.tab} ${
                      activeTab === idx ? styles.activeTab : ""
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            <form className={styles.form} onSubmit={submitHandler}>
              {activeTab === 0 && (
                <ProductMainTab form={form} handleChange={handleChange} />
              )}
              {activeTab === 1 && (
                <ProductImagesTab
                  form={form}
                  setForm={setForm}
                  uploading={uploading}
                  setUploading={setUploading}
                />
              )}
              {activeTab === 2 && <div>TAB3</div>}
              {activeTab === 3 && <div>TAB4</div>}

              <Button type="submit">
                {form._id ? "Обновить" : "Зберегти"}
              </Button>
            </form>
          </div>
        </div>
      )}

      <div className={styles.productsTable}>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.colCheckbox}>
              <input type="checkbox" />
            </div>
            <div className={styles.colImage}>Фото</div>
            <div className={styles.colName}>Назва</div>
            <div className={styles.colPrice}>Вартість</div>
            <div className={styles.colCount}>Кількість</div>
            <div className={styles.colVisible}>Відображення</div>
            <div className={styles.colActions}>Дії</div>
          </div>

          {products.map((p) => (
            <div key={p._id} className={styles.tableRow}>
              <div className={styles.colCheckbox}>
                <input type="checkbox" />
              </div>
              <div className={styles.colImage}>
                {p.images && p.images.length > 0 && (
                  <img
                    src={`${API_BASE_URL}${
                      p.images.find((img) => img.isMain)?.url || p.images[0].url
                    }`}
                    alt={p.name}
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      background: "linear-gradient(to left, #d9d9d9, #d9d9d9)",
                    }}
                  />
                )}
              </div>
              <div className={styles.colName}>{p.name}</div>
              <div className={styles.colPrice}>
                {p.price} {p.currency}
              </div>
              <div className={styles.colCount}>{p.countInStock}</div>
              <div className={styles.colVisible}>
                <input
                  type="checkbox"
                  checked={p.visible}
                  onChange={() => toggleVisibility(p)}
                />
              </div>
              <div className={styles.colActions}>
                <button
                  onClick={() => editHandler(p)}
                  className={styles.iconBtn}
                >
                  <img src={EditIcon} alt="Редагувати" />
                </button>
                <button
                  onClick={() => deleteHandler(p._id)}
                  className={styles.iconBtn}
                >
                  <img src={DeleteIcon} alt="Видалити" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
