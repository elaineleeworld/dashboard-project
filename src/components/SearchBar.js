import React, { Component } from "react";
import { ZoomIn } from "@material-ui/icons";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleSearch(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="search-container">
        <div className="searchbar-contents">
          <ZoomIn style={{ fontSize: "1.3em", color: "#fff", marginLeft: "250px" }} />
          <form>
            <input
              style={{ color: "#fff" }}
              type="text"
              size="40"
              placeholder="Search..."
              value={this.state.text}
              onChange={this.handleSearch.bind(this)}
            />
          </form>
        </div>
      </div>
    );
  }
}
