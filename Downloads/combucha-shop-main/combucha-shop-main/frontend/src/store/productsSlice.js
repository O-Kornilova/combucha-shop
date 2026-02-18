import { createSlice } from '@reduxjs/toolkit'
import productsData from '../utils/data/data.json'

const initialProducts = Array.isArray(productsData.products)
  ? productsData.products
  : []

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: initialProducts,
    status: Array.isArray(productsData.products) ? 'succeeded' : 'failed',
    error: Array.isArray(productsData.products)
      ? null
      : 'Invalid data format in data.json',
    visibleCount: 6
  },
  reducers: {
    loadMore: state => {
      state.visibleCount += 6
    }
  }
})

export const { loadMore } = productsSlice.actions
export default productsSlice.reducer

export const selectProducts = state => state.products.products
export const selectVisibleCount = state => state.products.visibleCount
export const selectProductsStatus = state => state.products.status
