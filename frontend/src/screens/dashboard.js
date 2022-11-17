
import React, { useState } from "react"
//import SideNavBar from "../components/side_bar";
import HeaderBar from "../components/header_bar";
/** Chartjs Start */
import PieChart from "../chartjs/piechart";
import BarChart from "../chartjs/barchart";
import LineChart from "../chartjs/linechart";
import ListTable from "../chartjs/list";

//import { useNavigate } from "react-router-dom";
//import "@trendmicro/react-sidenav/dist/react-sidenav.css";
//import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
 } from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
);

const searching = {
  search1: "", 
  search2: ""
}

const Dashboard = () => {
  const [formSearch, setSearch] = useState(searching);
  const {search1, search2} = formSearch;

  const handleSearch = (e)=> {
    setSearch({...formSearch, [e.target.name]: e.target.value})
  };

  const handleSearching = async () => {
    //console.log(search1+" - "+search2)
    localStorage.setItem("search1", search1);
    localStorage.setItem("search2", search2);
  };

  return <>
  <div className="wrapper d-flex align-items-stretch">
    <nav id="sidebar">
      <div className="p-4 pt-5">
        <a
          href="#"
          className="img logo rounded-circle mb-5"
          style={{ backgroundImage: "url(./logo192.png)" }}
        />
        <ul className="list-unstyled components mb-5">
          <li className="active">
          <Container>
          <InputGroup className="mb-3">
              <InputGroup.Text id="search1">@</InputGroup.Text>
              <Form.Control
                placeholder="Search 1"
                name="search1" 
                value={search1}
                onChange={handleSearch}
              />
            </InputGroup>
          </Container>
          </li>
          <li>
          <Container>
          <InputGroup className="mb-3">
              <InputGroup.Text id="search2">@</InputGroup.Text>
              <Form.Control
                placeholder="Search 2"
                name="search2" 
                value={search2}
                onChange={handleSearch}
              />
            </InputGroup>
          </Container>
          </li>
          <li>
          <Container>
            <Button href="/dashboard" variant="primary" onClick={()=> handleSearching()}>Search Now</Button>
          </Container>
          </li>
        </ul>
        <div className="footer">
        </div>
      </div>
    </nav>
    {/* Page Content  */}
    <div id="content" className="p-4 p-md-5">
      <HeaderBar />
      <h2 className="mb-4">Dashboard</h2>
      <Container>
      <Row>
        <Col>
        <div>
          <PieChart />
        </div>
        </Col>
        <Col>
        <div>
          <BarChart />
        </div>
        </Col>
        <Col>
        <div>
          <LineChart />
        </div>
        </Col>
      </Row>
      </Container>
      <div id="content2" className="p-1 p-md-2">
      <div>
        <ListTable />
      </div>
      </div>
      
    </div>
  </div>
</>

}

export default Dashboard;