import React, { Component } from "react";
import "./App.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
// import CalendarTodayRounded from "@material-ui/icons/CalendarTodayRounded";
import {
  CalendarToday,
  Description,
  Home,
  Whatshot,
  Beenhere,
  ViewCompact,
  InsertChartOutlined,
  AttachMoney,
  ViewHeadline,
  Note,
  DataUsage,
  Memory,
  DonutLarge
} from "@material-ui/icons";
// import Dashboard from "@material-ui/core/Dashboard";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import Dashboard from "./components/Dashboard";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  toggleColor = () => {
    console.log("clicked");
    // if (event.target === "sidenav---navitem") {
    //   event.target.style.backgroundColor = "#fff";
    // }
  };

  render() {
    const { clicked } = this.state;
    return (
      <div className="App">
        <SideNav
          style={{ backgroundColor: "#1F242D", height: "100vh" }}
          onSelect={selected => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav eventKey="calendar">
            <NavItem eventKey="calendar" onClick={() => this.toggleColor()}>
              <NavIcon>
                <CalendarToday style={{ fontSize: "1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Calendar</NavText>
            </NavItem>
            <NavItem
              eventKey="documentation"
              // style={{ backgroundColor: clicked ? "#fff" : "#1F242D" }}
              // // onClick={event => this.toggleColor(event.target)}
              // onClick={event => this.toggleColor(event)}
            >
              <NavIcon>
                <Description style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Documentation</NavText>
            </NavItem>
            <NavItem
              eventKey="dashboard"
              // style={{ backgroundColor: clicked ? "#fff" : "#1F242D" }}
              // onClick={event => this.toggleColor(event.target)}
            >
              <NavIcon>
                <Home style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Dashboard</NavText>
            </NavItem>
            <NavItem eventKey="admin plugins" s>
              <NavIcon>
                <Whatshot style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Admin Plugins</NavText>
            </NavItem>
            <NavItem eventKey="admin forms">
              <NavIcon>
                <Beenhere style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Admin Forms</NavText>
            </NavItem>
            <NavItem eventKey="admin layouts">
              <NavIcon>
                <ViewCompact style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Admin Layouts</NavText>
            </NavItem>
            <NavItem eventKey="information panels">
              <NavIcon>
                <InsertChartOutlined style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Information Panels</NavText>
            </NavItem>
            <NavItem eventKey="ecommerce">
              <NavIcon>
                <AttachMoney style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Ecommerce</NavText>
            </NavItem>
            <NavItem eventKey="ui elements">
              <NavIcon>
                <Memory style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>UI Elements</NavText>
            </NavItem>
            <NavItem eventKey="form elements">
              <NavIcon>
                <ViewHeadline style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Form Elements</NavText>
            </NavItem>
            <NavItem eventKey="plugins">
              <NavIcon>
                <DataUsage style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Plugins</NavText>
            </NavItem>
            <NavItem eventKey="pages">
              <NavIcon>
                <Note style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Pages</NavText>
            </NavItem>
            <NavItem eventKey="executive meeting">
              <NavIcon>
                <DonutLarge style={{ fontSize: "1.1em", color: "orange" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Executive Meeting</NavText>
            </NavItem>
            <NavItem eventKey="helpdesk redesign">
              <NavIcon>
                <DonutLarge style={{ fontSize: "1.1em", color: "red" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>HelpDesk Redesign</NavText>
            </NavItem>
            <NavItem eventKey="sony board meeting">
              <NavIcon>
                <DonutLarge style={{ fontSize: "1.1em", color: "purple" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Sony Board Meeting</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <PrimarySearchAppBar />
        <Dashboard />
      </div>
    );
  }
}

export default App;