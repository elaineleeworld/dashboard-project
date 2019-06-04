import React from "react";
import "./App.css";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import CalendarTodayRounded from "@material-ui/icons/CalendarTodayRounded";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function App() {
  return (
    <div className="App">
      <SideNav
        style={{ backgroundColor: "#1F242D" }}
        onSelect={selected => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="calendar">
          <NavItem eventKey="calendar">
            <NavIcon>
              <CalendarTodayRounded style={{ fontSize: "1em", color: "#7F96BA" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Calendar</NavText>
          </NavItem>
          <NavItem eventKey="documentation">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Documentation</NavText>
          </NavItem>
          <NavItem eventKey="dashboard">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="admin plugins">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Admin Plugins</NavText>
          </NavItem>
          <NavItem eventKey="admin forms">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Admin Forms</NavText>
          </NavItem>
          <NavItem eventKey="admin layouts">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Admin Layouts</NavText>
          </NavItem>
          <NavItem eventKey="information panels">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Information Panels</NavText>
          </NavItem>
          <NavItem eventKey="ecommerce">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Ecommerce</NavText>
          </NavItem>
          <NavItem eventKey="ui elements">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>UI Elements</NavText>
          </NavItem>
          <NavItem eventKey="form elements">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Form Elements</NavText>
          </NavItem>
          <NavItem eventKey="plugins">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Plugins</NavText>
          </NavItem>
          <NavItem eventKey="pages">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Pages</NavText>
          </NavItem>
          <NavItem eventKey="executive meeting">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>Executive Meeting</NavText>
          </NavItem>
          <NavItem eventKey="helpdesk redesign">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ color: "#7F96BA" }}>HelpDesk Redesign</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default App;
