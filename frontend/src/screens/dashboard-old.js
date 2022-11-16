
import React, { useState } from "react"
//import SideNavBar from "../components/side_bar";
import HeaderBar from "../components/header_bar";
/** Chartjs Start */
import PieChart from "../chartjs/piechart";
import BarChart from "../chartjs/barchart";
import LineChart from "../chartjs/linechart";
import ListTable from "../chartjs/list";

import { useNavigate } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
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

const Dashboard = () => {
  const [toggle, setToggle] = useState(true)
  const state = {
    isVisible: toggle
  };
  const navigates = useNavigate();
  const handleSelect = (key) =>{
    //console.log(key)
      navigates('/'+key);
      //console.log(`selected ${key}`)
  }
  
  return <> 
    <div>
      
      <HeaderBar />
      <Container>
      <Row>
        <Col><SideNav expanded={state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            //console.log(Toggle);
            setToggle(!toggle)
            //this.setState({ isVisible: !state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="dashboard">
          <Container>
          <InputGroup className="mb-3">
              <InputGroup.Text id="search1">@</InputGroup.Text>
              <Form.Control
                placeholder="Search 1"
                aria-label="Search 1"
                aria-describedby="search1"
              />
            </InputGroup>
          </Container>
          <Container>
          <InputGroup className="mb-3">
              <InputGroup.Text id="search2">@</InputGroup.Text>
              <Form.Control
                placeholder="Search 2"
                aria-label="Search 2"
                aria-describedby="search2"
              />
            </InputGroup>
          </Container>
          <Container>
            <Button variant="primary">Search Now</Button>{' '}
          </Container>
        </SideNav.Nav>
      </SideNav></Col>
        <Col><PieChart /></Col>
        <Col><BarChart /></Col>
        <Col><LineChart /></Col>
      </Row>
      </Container>
      <ListTable />
       
    </div>
    
    </>
}

export default Dashboard;