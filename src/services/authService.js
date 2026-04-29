import api from '../api/axiosConfig';

export const authService = {
  login: async (email, password) => {
    return await api.post('/users/login', { email, password });
  },

  register: async (userData) => {
    // Si el frontend envía nombres/apellidos por separado, aquí los unimos para el backend
    const fullName = `${userData.nombres} ${userData.apellidos}`.trim();
    const payload = {
      fullName,
      email: userData.correo,
      password: userData.contrasena,
      role: userData.role || 'USER',
      phone: userData.phone || '',
      address: userData.address || ''
    };
    return await api.post('/users/register', payload);
  },

  getUserById: async (id) => {
    return await api.get(`/users/${id}`);
  },
};
