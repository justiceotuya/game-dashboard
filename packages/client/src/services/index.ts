import axios from 'axios'

const API_URL = import.meta.env.MODE === "production" ? "https://server-gamma-azure.vercel.app" : "http://localhost:8000"
export const getCategories = async () => {
  const { data } = await axios.get(`${API_URL}/categories`)
  return data
}
