import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchQuery: '',
    minPrice: 0,
    maxPrice: Infinity,
    sortBy: 'name', // 'name' | 'price' | 'volume'
    sortOrder: 'asc', // 'asc' | 'desc'
    selectedTastes: [], // ['original', 'ginger', 'lemon', ...]
    selectedVolumes: [] // [0.3, 0.5, 0.7]
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.min
      state.maxPrice = action.payload.max
    },
    setSort: (state, action) => {
      state.sortBy = action.payload.by
      state.sortOrder = action.payload.order
    },
    toggleTaste: (state, action) => {
      const taste = action.payload
      if (state.selectedTastes.includes(taste)) {
        state.selectedTastes = state.selectedTastes.filter(t => t !== taste)
      } else {
        state.selectedTastes.push(taste)
      }
    },
    toggleVolume: (state, action) => {
      const volume = action.payload
      if (state.selectedVolumes.includes(volume)) {
        state.selectedVolumes = state.selectedVolumes.filter(v => v !== volume)
      } else {
        state.selectedVolumes.push(volume)
      }
    },
    resetFilters: state => {
      state.searchQuery = ''
      state.minPrice = 0
      state.maxPrice = Infinity
      state.selectedTastes = []
      state.selectedVolumes = []
      state.sortBy = 'name'
      state.sortOrder = 'asc'
    }
  }
})

export const {
  setSearchQuery,
  setPriceRange,
  setSort,
  toggleTaste,
  toggleVolume,
  resetFilters
} = filtersSlice.actions
export default filtersSlice.reducer

// Селектор для фільтрованих продуктів
export const selectFilteredProducts = state => {
  const { products, visibleCount } = state.products
  const {
    searchQuery,
    minPrice,
    maxPrice,
    selectedTastes,
    selectedVolumes,
    sortBy,
    sortOrder
  } = state.filters

  // Перевірка, чи products є масивом
  if (!Array.isArray(products)) {
    console.error('Products is not an array:', products)
    return []
  }

  let filtered = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice
    const matchesTastes =
      selectedTastes.length === 0 ||
      product.taste.some(t => selectedTastes.includes(t))
    const matchesVolumes =
      selectedVolumes.length === 0 || selectedVolumes.includes(product.volume)
    return matchesSearch && matchesPrice && matchesTastes && matchesVolumes
  })

  // Сортування
  filtered.sort((a, b) => {
    let compare = 0
    if (sortBy === 'price') compare = a.price - b.price
    else if (sortBy === 'volume') compare = a.volume - b.volume
    else if (sortBy === 'name') compare = a.name.localeCompare(b.name)
    return sortOrder === 'asc' ? compare : -compare
  })

  return filtered.slice(0, visibleCount)
}
