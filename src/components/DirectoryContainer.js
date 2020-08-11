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
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // this.searchUser("John");
    this.searchUser();
  }

  handleInputChange = (event) => {
    event.preventDefault();
    // console.log({ event });

    const { value, name } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });

    // const filterUser = this.state.result.filter((user) => {
    // console.log({ user });
    // if (event.target.value !== "") {

    // }
    // // if(user.name.first !== this.state.search)
    // const userLower = user.name.f.toLowerCase()
    // const filtered = event.target.value.toLowerCase()
    // return userLower.includes(filtered)
    // });
    // console.log(filterUser);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const sortResults = [...this.state.result];
    this.setState({ result: sortResults });
  };

  render() {
    // layered html via components - ternary operator needed?
    return (
      <Container>
        <SearchInput
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />

        {this.state.result
          .filter((user) => {
            return `${user.name.first} ${user.name.last}`
              .toLowerCase()
              .includes(this.state.search.toLowerCase());
          })
          .map((user, index) => {
            // console.log(user,index);
            return (
              <UserCard>
                <UserInfo
                  firstName={user.name.first}
                  lastName={user.name.last}
                  city={user.location.city}
                  state={user.location.state}
                  country={user.location.country}
                  email={user.email}
                  age={parseInt(user.dob.age)}
                  img={user.picture.large}
                  keys={index}
                />
              </UserCard>
            );
          })}
      </Container>
    );
  }
}

export default DirectoryContainer;
