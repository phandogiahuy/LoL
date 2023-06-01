import { useMutation, useQueryClient } from "react-query";

import { message } from "antd";
import axios from "axios";
import {
  GET_CHAMPION_FROM_DATABASE_1,
  GET_CHAMPION_FROM_DATABASE_2,
} from "../../constant/queryKey";
const postChampion1 = async ({
  champion,
  img,
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
  item_10,
  item_11,
  item_12,
  item_13,
  item_14,
  item_15,
  item_16,
  item_17,
  item_18,
}) => {
  const { data } = await axios.post(`http://localhost:5000/champion/1`, {
    champion,
    img,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5,
    item_6,
    item_7,
    item_8,
    item_9,
    item_10,
    item_11,
    item_12,
    item_13,
    item_14,
    item_15,
    item_16,
    item_17,
    item_18,
  });
  return data;
};
const useCreateChampion1 = () => {
  const queryClient = useQueryClient();
  return useMutation(postChampion1, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_CHAMPION_FROM_DATABASE_1]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
const postChampion2 = async ({
  champion,
  img,
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
  item_10,
  item_11,
  item_12,
  item_13,
  item_14,
  item_15,
  item_16,
  item_17,
  item_18,
}) => {
  const { data } = await axios.post(`http://localhost:5000/champion/2`, {
    champion,
    img,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5,
    item_6,
    item_7,
    item_8,
    item_9,
    item_10,
    item_11,
    item_12,
    item_13,
    item_14,
    item_15,
    item_16,
    item_17,
    item_18,
  });
  return data;
};
const useCreateChampion2 = () => {
  const queryClient = useQueryClient();

  return useMutation(postChampion2, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_CHAMPION_FROM_DATABASE_2]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useCreateChampion1, useCreateChampion2 };
