import { Link } from "react-router-dom";
import cartEmptyImg from "../assets/images/empty-cart.png";

const CartEmpty = () => (
  <div
    className="cart cart--empty"
    style={{ textAlign: "center", padding: "50px" }}
  >
    <h2>
      Your cart is empty <span>😕</span>
    </h2>
    <p>
      It looks like you haven't added any products to your cart yet.
      <br />
      To place an order, go to the homepage.
    </p>
    <img
      src={cartEmptyImg}
      alt="Empty cart"
      style={{ width: "200px", margin: "20px 0" }}
    />
    <Link
      to="/"
      style={{
        background: "#fe1468",
        color: "#fcfeff",
        fontFamily: "Nunito, sans-serif",
        fontSize: "16px",
        lineHeight: "130%",
        fontWeight: 700,
        border: "none",
        borderRadius: "24px",
        padding: "12px 24px",
        cursor: "pointer",
        transition: "background 0.2s",
        textDecoration: "none",
        display: "block",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#e0125c")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#fe1468")}
    >
      Go back
    </Link>
  </div>
);

export default CartEmpty;
