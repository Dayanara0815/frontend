import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { petService } from '../services/petService';

export const usePets = () => {
  const queryClient = useQueryClient();

  // Query para obtener todas las mascotas
  const petsQuery = useQuery({
    queryKey: ['pets'],
    queryFn: async () => {
      const response = await petService.getAllPets();
      return response.data;
    },
  });

  // Mutation para crear una mascota
  const createPetMutation = useMutation({
    mutationFn: petService.createPet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'] });
    },
  });

  // Mutation para actualizar una mascota
  const updatePetMutation = useMutation({
    mutationFn: ({ id, data }) => petService.updatePet(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'] });
    },
  });

  // Mutation para eliminar una mascota
  const deletePetMutation = useMutation({
    mutationFn: petService.deletePet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'] });
    },
  });

  return {
    pets: petsQuery.data ?? [],
    isLoading: petsQuery.isLoading,
    isError: petsQuery.isError,
    error: petsQuery.error,
    refreshPets: petsQuery.refetch,

    // Mutations
    createPet: createPetMutation.mutateAsync,
    updatePet: updatePetMutation.mutateAsync,
    deletePet: deletePetMutation.mutateAsync,

    isCreating: createPetMutation.isPending,
    isUpdating: updatePetMutation.isPending,
    isDeleting: deletePetMutation.isPending,
  };
};

// Hook específico para mascotas de un usuario
export const useUserPets = (userId) => {
  return useQuery({
    queryKey: ['pets', 'user', userId],
    queryFn: async () => {
      const response = await petService.getPetsByUserId(userId);
      return response.data;
    },
    enabled: !!userId, // Solo se ejecuta si hay un userId
  });
};
