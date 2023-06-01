import axios from "axios";
import { useQuery } from "react-query";

import { GET_CHAMPION } from "../../constant/queryKey";

const getChamp = async () => {
  const { data } = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json?fbclid=IwAR0LYJt8ZOxltNBJvYdctabsRQX8kSsIGSBpdU2FCCICCQZz9TSOJ5F2D04`
  );
  return data;
};
const useGetChampion = () => useQuery([GET_CHAMPION], getChamp);
export { useGetChampion };
