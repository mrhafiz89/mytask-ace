import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config/server";

//const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(config.api_url + "/auth/signin", {
        username,
        password
      })
      .then(response => {
        //console.log(response.data);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, address, name) {
    return axios.post(config.api_url + "/auth/signup", {
      username,
      email,
      password,
      address,
      name
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();