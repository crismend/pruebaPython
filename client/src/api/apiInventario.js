import axios from "axios"

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/inventarios/api/v1/inventarios/"
});

export const getAllInventario = () => {
  return api.get("/")
}

export const deleteInventario = (id) => {
  return api.delete(`/${id}`)
}