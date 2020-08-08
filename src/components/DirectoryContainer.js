import React, { Component } from "react";
import API from "./utils/API";
import Container from "./Container";
import SearchInput from "./SearchInput";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";

class DirectoryContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  searchUser = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.searchUser("John");
  }

  handleInputChange = (event) => {
    const user = this.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchUser(this.setState.search);
  };

  render() {
    // layered html via components
    return (
      <Container>
        <SearchInput
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <UserCard />
        <UserInfo
          firstName={this.state.result.name.first}
          lastName={this.state.result.name.last}
          city={this.state.result.location.city}
          state={this.state.result.location.city}
          country={this.state.result.location.city}
          email={this.state.result.email}
          age={this.state.result.age}
          img={this.state.result.picture.thumbnail}
        />
      </Container>
    );
  }
}

export default DirectoryContainer;
