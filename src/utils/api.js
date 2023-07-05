import axios from "axios";

const params = {
  headers: {
    Authorization:
      "bearer " +
      "57772bc063003403f5bac5be944b6f6b5e3bc74c40a65a88e8f8bc44f3dd192f0ec90b1bb96b5533db9fc0a84e73972c894b96023277aa6b1cd04f9cc3e539ad682ed6bba434cf1e092c58212c9cb95752812f8928eb83804420a90b99fb7ef4259a93e817a80e467263fd1b7726d4fb369efea8da152eabf481a87730842d78",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    console.log(process.env.REACT_APP_STRIPE_DEV_APP_KEY);
    const { data } = await axios.get(
      process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
  },
});
