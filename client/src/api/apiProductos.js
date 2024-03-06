import axios from "axios"

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/productos/api/v1/productos/"
});

export const getAllProductos = () => {
  return api.get("/")
}

export const createProductos = (productos) => {
  return api.post("/", productos)
}




const apiK = axios.create({
  baseURL: 'http://127.0.0.1:8000/categorias/api/v1/categorias/',
});

export const getCategory = () => {
  return apiK.get('/');
};

