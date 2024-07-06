import axios from "../api/axios";
interface ILoginData {
  email: string;
  password: string;
}
interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

export const loginUser = ({ email, password }: ILoginData) => {
  axios
    .post("/auth/login", { email, password })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Error logging in", err);
    });
};
export const registerUser = ({ name, email, password }: IRegisterData) => {
  axios
    .post("/auth/register", { name, email, password })
    .then(() => {
      return;
    })
    .catch((err) => {
      console.log("Error logging in", err);
    });
};
