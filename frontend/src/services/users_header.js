import axios from 'axios';
import authHeader from './auth_services';
import { config } from "../config/server";

const API_URL = 'http://localhost:8080/api/list/';

class UserService {
  getLoginUser() {
    return axios.get(config.api_url + "/auth/signin", { headers: authHeader() });
  }
}

export default new UserService();