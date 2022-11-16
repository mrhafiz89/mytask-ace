import React, { Redirect } from "react";
//import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
    //this.handleSelect = this.handleSelect.bind(this)
    //this.navigate = useNavigate()
   
  }
  
  handleSelect(key){
      this.setState({
          key: key
      })
      //navigates('/users');
      //console.log(`selected ${key}`)
  }

  render() {
    return (
      <SideNav expanded={this.state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home" onSelect={this.handleSelect}>
          <NavItem eventKey="home" href="/dashboard">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="users" href="/users">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>List Users</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;

