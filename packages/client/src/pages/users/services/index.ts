import axios from 'axios'
import { TUserProfile } from '../types'
const API_URL = process.env.REACT_APP_API_URL
export const getUsers = async () => {
  const { data } = await axios.get(`${API_URL}/users`)
  return data
}

export const createUser = async (user: TUserProfile) => {
  const { data } = await axios.post(`${API_URL}/users`, user)
  return data
}

export const updateUser = async (user: TUserProfile) => {
  const { data } = await axios.put(`${API_URL}/users/${user.id}`, user)
  return data
}
