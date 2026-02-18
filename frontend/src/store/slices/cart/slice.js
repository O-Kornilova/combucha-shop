import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
//   totalPrice: 0,
// };

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    if (!data) {
      return { products: [], totalPrice: 0 };
    }

    const parsed = JSON.parse(data);

    if (
      typeof parsed !== "object" ||
      !Array.isArray(parsed.products) ||
      typeof parsed.totalPrice !== "number"
    ) {
      return { products: [], totalPrice: 0 };
    }

    return parsed;
  } catch (err) {
    console.error("Error loading cart:", err);
    return { products: [], totalPrice: 0 };
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (err) {
    console.error("Error saving cart:", err);
  }
};

const initialState = loadFromLocalStorage();

const calcTotalPrice = (products) =>
  products.reduce((sum, product) => sum + product.price * product.count, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findProduct = state.products.find(
        (p) => p._id === action.payload._id
      );

      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.products);
      saveToLocalStorage(state);
    },
    removeItem(state, action) {
      state.products = state.products.filter((p) => p._id !== action.payload);
      state.totalPrice = calcTotalPrice(state.products);
      saveToLocalStorage(state);
    },
    incrementCount(state, action) {
      const product = state.products.find((p) => p._id === action.payload);
      if (product) {
        product.count++;
        state.totalPrice = calcTotalPrice(state.products);
        saveToLocalStorage(state);
      }
    },
    decrementCount(state, action) {
      const product = state.products.find((p) => p._id === action.payload);
      if (product && product.count > 1) {
        product.count--;
        state.totalPrice = calcTotalPrice(state.products);
        saveToLocalStorage(state);
      }
    },
    clearCart(state) {
      state.products = [];
      state.totalPrice = 0;
      saveToLocalStorage(state);
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementCount,
  decrementCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
