import axios from "axios"

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/empresa/api/v1/empresa/"
});

export const getAllEmpresas = () => {
  return api.get("/")
}

export const createEmpresas = (empresa) => {
  return api.post("/", empresa)
}