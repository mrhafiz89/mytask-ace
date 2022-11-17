import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config/server";

class AuthService {
  login(username, password) {
    return axios
      .post(config.api_url + "/auth/signin", {
        username,
        password
      })
      .then(response => {
        //console.log(response.data.data.accessToken);
        if (response.data.data.accessToken) {
          localStorage.setItem("is_login", true);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("is_login");
    localStorage.removeItem("user");
    localStorage.removeItem("search1");
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
    //return login();
    //return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();