import axios from 'axios'
import { TGameProfile } from '../types'

const API_URL = import.meta.env.MODE === "production" ? "https://server-gamma-azure.vercel.app" : "http://localhost:8000"
export const getGames = async () => {
  const { data } = await axios.get(`${API_URL}/games`)
  return data
}

export const createGame = async (game: TGameProfile) => {
  const { data } = await axios.post(`${API_URL}/games`, game)
  return data
}

export const updateGame = async (game: TGameProfile) => {
  const { data } = await axios.put(`${API_URL}/games/${game.id}`, game)
  return data
}

export const deleteGame = async (id: string) => {
  const { data } = await axios.delete(`${API_URL}/games/${id}`)
  return data
}

export const getOneGame = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/games/${id}`)
  return data
}
