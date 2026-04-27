import { useState, useEffect, useCallback } from 'react';

/**
 * Hook para manejar persistencia en localStorage y simular operaciones CRUD.
 * Esta versión está optimizada para evitar sobreescrituras por estados obsoletos
 * y para sincronizar cambios entre múltiples pestañas o instancias.
 * 
 * @param {string} key - Clave bajo la cual se guardará la data en localStorage.
 * @param {Array} initialData - Datos iniciales si no hay nada en el storage.
 */
const useLocalStorage = (key, initialData = []) => {
  // 1. Estado interno inicializado desde localStorage
  const [data, setData] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialData;
    } catch (error) {
      console.error(`Error al leer localStorage [${key}]:`, error);
      return initialData;
    }
  });

  // 2. Escuchar cambios de localStorage desde otras instancias/pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key) {
        try {
          const newValue = e.newValue ? JSON.parse(e.newValue) : initialData;
          setData(newValue);
        } catch (error) {
          console.error(`Error al sincronizar localStorage [${key}]:`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialData]);

  /**
   * Función para actualizar tanto el estado como el localStorage.
   * Se usa para reemplazar el 'setData' directo.
   */
  const setValue = useCallback((value) => {
    try {
      setData((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        return valueToStore;
      });
    } catch (error) {
      console.error(`Error al guardar en localStorage [${key}]:`, error);
    }
  }, [key]);

  // --- OPERACIONES CRUD ---

  const createItem = useCallback((newItem) => {
    const itemWithId = { ...newItem, id: newItem.id || Date.now() };
    setData((prev) => {
      const updated = [...prev, itemWithId];
      window.localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  }, [key]);

  const updateItem = useCallback((id, updatedFields) => {
    setData((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      );
      window.localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  }, [key]);

  const deleteItem = useCallback((id) => {
    setData((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      window.localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  }, [key]);

  const getItemById = useCallback((id) => {
    return data.find((item) => item.id === id);
  }, [data]);

  return {
    data,
    setData: setValue, // Exportamos la versión envuelta que persiste
    createItem,
    updateItem,
    deleteItem,
    getItemById
  };
};

export default useLocalStorage;
