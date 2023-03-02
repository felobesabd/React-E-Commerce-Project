import baseURL from "../../src/Api/baseURL";

const useInsertDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.post(url, parmas, config);
  console.log(res.status);
  return res;
};

const useInsertData = async (url, parmas) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.post(url, parmas, config);
  console.log(res);
  return res;
};

export { useInsertData, useInsertDataWithImage };
