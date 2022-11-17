import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../config/server";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ListTable = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
      getUsers();
  }, []);
  const navigates = useNavigate();
  const getUsers = async () => {
    if(!localStorage.getItem('is_login')){
      return navigates('/');
    }else{
      var search1 = localStorage.getItem('search1');
      //var search2 = localStorage.getItem('search2');
      if(search1!=""){
        var search = "?search="+search1;
      }else{
        var search="";
      }

      try{
        const response = await axios.get(config.api_url + "/user/user"+search);
        setUsers(response.data.data);
      }catch(error){
        //console.log(error.response.data);
        toast.error(error.response.data.message,{
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    }  
  }

  return <>
    <ToastContainer />
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
            { users.map((users, index) => (
                <tr key={ users.id }>
                    <td>{ index + 1 }</td>
                    <td>{ users.username }</td>
                    <td>{ users.name }</td>
                    <td>{ users.email }</td>
                    <td>{ users.address }</td>
                </tr>
            )) }
        </tbody>
    </Table>
  
  </>
};

export default ListTable;
