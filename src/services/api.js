import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-escaparate.onrender.com/api",
});

// Obtener productos
export const getProductos = () => API.get("/productos");

// Obtener color por id
export const getColores = () => API.get("/colores");
export const getColor = (id) => API.get(`/colores/${id}`);

// Obtener material por id
export const getMateriales = () => API.get("/materiales");
export const getMaterial = (id) => API.get(`/materiales/${id}`);