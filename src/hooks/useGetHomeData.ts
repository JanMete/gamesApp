import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetHomeData = () => {
  const getHomeData = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }&page_size=50&ordering=-released,-added`
    );
    return data?.results || [];
  };

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['getHomeData'],
    queryFn: getHomeData,
  });

  const firstArray = [];
  const secondArray = [];
  const thirdArray = [];
  const fourthArray = [];

  for (let i = 0; i < data.length; i++) {
    if (i < 10) firstArray.push(data[i]);
    else if (i < 20) secondArray.push(data[i]);
    else if (i < 30) thirdArray.push(data[i]);
    else if (i < 40) fourthArray.push(data[i]);
  }

  return { firstArray, secondArray, thirdArray, fourthArray, isLoading, error };
};
