import axios from "axios";
import { useQuery } from "react-query";

import { GET_ITEM } from "../../constant/queryKey";

const getItem = async () => {
  const { data } = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/item.json`
  );
  return data.data;
};
const useGetItemFromApi = () => useQuery([GET_ITEM], getItem);
export { useGetItemFromApi };
