import axios from "axios";
import { useQuery } from "react-query";

import {
  GET_CHAMPION_FROM_DATABASE_1,
  GET_CHAMPION_FROM_DATABASE_2,
} from "../../constant/queryKey";

const getChampDatabase = async () => {
  const { data } = await axios.get(`http://localhost:5000/champion/1`);
  return data;
};
const useGetChampionDatabase1 = () =>
  useQuery([GET_CHAMPION_FROM_DATABASE_1], getChampDatabase);
const getChampDatabase2 = async () => {
  const { data } = await axios.get(`http://localhost:5000/champion/2`);
  return data;
};
const useGetChampionDatabase2 = () =>
  useQuery([GET_CHAMPION_FROM_DATABASE_2], getChampDatabase2);
export { useGetChampionDatabase1, useGetChampionDatabase2 };
