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
      active: null
    };
  }

  toggleColor = position => {
    console.log("clicked");
    if (this.state.active === position) {
      this.setState({ active: null });
    } else {
      this.setState({
        active: position
      });
    }
  };

  myColor = position => {
    if (this.state.active === position) {
      return "#fff";
    }
    return "";
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
            <NavItem eventKey="calendar" style={{ background: this.myColor(0) }} onClick={() => this.toggleColor(0)}>
              <NavIcon>
                <CalendarToday style={{ fontSize: "1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Calendar</NavText>
            </NavItem>
            <NavItem eventKey="documentation" style={{ background: this.myColor(1) }} onClick={() => this.toggleColor(1)}>
              <NavIcon>
                <Description style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Documentation</NavText>
            </NavItem>
            <NavItem eventKey="dashboard" style={{ background: this.myColor(2) }} onClick={() => this.toggleColor(2)}>
              <NavIcon>
                <Home style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Dashboard</NavText>
            </NavItem>
            <NavItem eventKey="admin plugins" style={{ background: this.myColor(3) }} onClick={() => this.toggleColor(3)}>
              <NavIcon>
                <Whatshot style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Admin Plugins</NavText>
            </NavItem>
            <NavItem eventKey="admin forms" style={{ background: this.myColor(4) }} onClick={() => this.toggleColor(4)}>
              <NavIcon>
                <Beenhere style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Admin Forms</NavText>
            </NavItem>
            <NavItem eventKey="admin layouts" style={{ background: this.myColor(5) }} onClick={() => this.toggleColor(5)}>
              <NavIcon>
                <ViewCompact style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Admin Layouts</NavText>
            </NavItem>
            <NavItem eventKey="information panels" style={{ background: this.myColor(6) }} onClick={() => this.toggleColor(6)}>
              <NavIcon>
                <InsertChartOutlined style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Information Panels</NavText>
            </NavItem>
            <NavItem eventKey="ecommerce" style={{ background: this.myColor(7) }} onClick={() => this.toggleColor(7)}>
              <NavIcon>
                <AttachMoney style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Ecommerce</NavText>
            </NavItem>
            <NavItem eventKey="ui elements" style={{ background: this.myColor(8) }} onClick={() => this.toggleColor(8)}>
              <NavIcon>
                <Memory style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>UI Elements</NavText>
            </NavItem>
            <NavItem eventKey="form elements" style={{ background: this.myColor(9) }} onClick={() => this.toggleColor(9)}>
              <NavIcon>
                <ViewHeadline style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Form Elements</NavText>
            </NavItem>
            <NavItem eventKey="plugins" style={{ background: this.myColor(10) }} onClick={() => this.toggleColor(10)}>
              <NavIcon>
                <DataUsage style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Plugins</NavText>
            </NavItem>
            <NavItem
              eventKey="pages"
              style={{ backgroundColor: "#1F242D" }}
              style={{ background: this.myColor(11) }}
              onClick={() => this.toggleColor(11)}
            >
              <NavIcon>
                <Note style={{ fontSize: "1.1em", color: "#29A5D8" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Pages</NavText>
            </NavItem>
            <NavItem
              eventKey="executive meeting"
              style={{ backgroundColor: "#1F242D" }}
              style={{ background: this.myColor(12) }}
              onClick={() => this.toggleColor(12)}
            >
              <NavIcon>
                <DonutLarge style={{ fontSize: "1.1em", color: "orange" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>Executive Meeting</NavText>
            </NavItem>
            <NavItem
              eventKey="helpdesk redesign"
              style={{ backgroundColor: "#1F242D" }}
              style={{ background: this.myColor(13) }}
              onClick={() => this.toggleColor(13)}
            >
              <NavIcon>
                <DonutLarge style={{ fontSize: "1.1em", color: "red" }} />
              </NavIcon>
              <NavText style={{ color: "#7F96BA" }}>HelpDesk Redesign</NavText>
            </NavItem>
            <NavItem
              eventKey="sony board meeting"
              style={{ backgroundColor: "#1F242D" }}
              style={{ background: this.myColor(14) }}
              onClick={() => this.toggleColor(14)}
            >
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
