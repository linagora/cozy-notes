// Stub for cozy-search - mocks the module when not installed
// This prevents build errors when cozy-bar imports cozy-search

export const SearchDialog = () => null
export const SearchProvider = ({ children }) => children
export const useSearch = () => ({
  search: () => Promise.resolve([]),
  results: [],
  loading: false
})

export default {
  SearchDialog,
  SearchProvider,
  useSearch
}
