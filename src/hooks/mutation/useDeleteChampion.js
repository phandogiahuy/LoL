import { useMutation, useQueryClient } from "react-query";
import {
  GET_CHAMPION_FROM_DATABASE_1,
  GET_CHAMPION_FROM_DATABASE_2,
} from "../../constant/queryKey";
import axios from "axios";
import { message } from "antd";

const deleteChampion1 = async () => {
  const { data } = await axios.delete(`http://localhost:5000/champion/1`);
  return data;
};
const useDeleteChampion1 = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteChampion1, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_CHAMPION_FROM_DATABASE_1]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
const deleteChampion2 = async () => {
  const { data } = await axios.delete(`http://localhost:5000/champion/2`);
  return data;
};
const useDeleteChampion2 = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteChampion2, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_CHAMPION_FROM_DATABASE_2]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useDeleteChampion1, useDeleteChampion2 };
