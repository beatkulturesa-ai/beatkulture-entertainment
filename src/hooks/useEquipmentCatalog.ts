import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Equipment {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  created_at: string;
}

export const useEquipmentCatalog = () => {
  const { data: equipment, isLoading, error, refetch } = useQuery({
    queryKey: ['equipment-catalog'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('equipment_catalog')
        .select('*')
        .order('name');

      if (error) throw error;
      return data as Equipment[];
    },
  });

  return {
    equipment,
    isLoading,
    error: error?.message,
    refetch,
  };
};