import Axios from "axios";
import APIHost from "./APIHost";

export const RegisterUser = data => Axios.post(APIHost + "/add-employee", data);

export const GetUserID = () => Axios.get(APIHost + "/add-employee");
