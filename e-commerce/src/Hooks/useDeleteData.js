import baseURL from "../../src/Api/baseURL";

const useDeleteData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.delete(url, config, params);
  return res.data;
};

export default useDeleteData;
