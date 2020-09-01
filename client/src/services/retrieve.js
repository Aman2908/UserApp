import Axios from "axios";
import APIHost from "./APIHost";

export const GetUserData = data => Axios.post(APIHost + "/get-employee", data);

export const GetAllUsers = () => Axios.get(APIHost + "/get-all");
