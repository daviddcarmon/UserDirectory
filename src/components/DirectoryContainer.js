import React, { Component } from "react";
import API from "./utils/API";
import Container from "./Container";
import SearchInput from "./SearchInput";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";

class DirectoryContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  searchUser = () => {
    API.search()
      .then((res) => {
        // console.log(res.data.results);
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // this.searchUser("John");
    this.searchUser();
  }

  handleInputChange = (event) => {
    event.preventDefault()
    console.log({ event });
    // const user = event.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchUser(this.setState.search);
  };

  render() {
    // layered html via components - needs ternary operator needed
    // state ? !prop.state.result :
    return (
      <Container>
        <SearchInput
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          onChange={(event) => this.setState({ search: event.target.value })}
        />

        {this.state.result.map((user) => {
          // console.log(user);
          return (
            <UserCard>
              <UserInfo
                firstName={user.name.first}
                lastName={user.name.last}
                city={user.location.city}
                state={user.location.city}
                country={user.location.city}
                email={user.email}
                age={parseInt(user.dob.age)}
                img={user.picture.thumbnail}
              />
            </UserCard>
          );
        })}
      </Container>
    );
  }
}

export default DirectoryContainer;
