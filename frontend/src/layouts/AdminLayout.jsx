import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./AdminLayout.css";
import { useEffect, useState } from "react";
import { getProfile } from "../api/authApi";

import { ReactComponent as ProductsIcon } from "../assets/icons/products.svg";
import { ReactComponent as DiscountsIcon } from "../assets/icons/discounts.svg";
import { ReactComponent as IngredientsIcon } from "../assets/icons/ingredients.svg";
import { ReactComponent as PopularIcon } from "../assets/icons/popular.svg";
// import { ReactComponent as FeedbackIcon } from "../assets/icons/feedback.svg";

export default function AdminLayout() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const data = await getProfile(token);
        setUser(data);
      } catch (err) {
        console.error("Profile fetch error:", err);
        navigate("/login");
      }
    };
    fetchProfile();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="admin-bg">
      <div className="admin-container">
        {/* Верхний хедер */}
        <header className="admin-header">
          <div className="admin-logo">🍰 Sweet Admin</div>
          <div className="admin-header-right">
            {user && <span className="admin-user">{user.name}</span>}
            <button onClick={handleLogout} className="logout-btn">
              Вийти
            </button>
          </div>
        </header>

        <div className="admin-wrapper">
          <aside className="sidebar">
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/admin/products"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <ProductsIcon className="nav-icon" />
                    <span>Картка товару</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/discounts"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <DiscountsIcon className="nav-icon" />
                    <span>Знижки</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/ingredients"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <IngredientsIcon className="nav-icon" />
                    <span>Склад продукту</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/popular"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <PopularIcon className="nav-icon" />
                    <span>Картки для популярних</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/feedbacks"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {/* <FeedbackIcon className="nav-icon" /> */}
                    <span>Відгуки</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
