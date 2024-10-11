import { useQuery } from '@tanstack/react-query';

import { fetchCountry } from '@/app/services/country';

export const useCountry = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountry,
    retry: false,
  });
};
