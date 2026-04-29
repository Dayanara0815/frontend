import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar respuestas globales (opcional)
api.interceptors.response.use(
  (response) => response.data, // Retornamos directamente el ApiResponse<T>
  (error) => {
    // Si el backend devuelve un error estructurado, lo propagamos
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({
      code: '999',
      message: 'Error de conexión con el servidor',
    });
  }
);

export default api;
