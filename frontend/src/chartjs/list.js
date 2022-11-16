import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../config/server";
import Table from 'react-bootstrap/Table';

const ListTable = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
      getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get(config.api_url + "/user/user");
    //console.log(response.data.message);
    setUsers(response.data.data);
    //console.log(response.data.data);
    
  }

  return <>
  
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
