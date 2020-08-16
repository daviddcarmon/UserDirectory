import React, { Component } from "react";
import API from "./utils/API";
import Container from "./Container";
import SearchInput from "./SearchInput";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";
import { renderIntoDocument } from "react-dom/test-utils";

class DirectoryContainer extends Component {
  state = {
    result: [],
    search: "",
    sortType: "asc",
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
  };

  handleSortAsc = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(event.target);

    this.setState({ [name]: value });
  };

  handleSortDec = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    // layered html via components - ternary operator needed?

    const { result, sortType } = this.state;
    const sortResults = [...this.state.result];
    sortResults.sort((a, b) => {
      const sorted = sortType === "asc" ? 1 : -1;
      return sorted * a.name.first.localeCompare(b.name.first);
    });
    // console.log(sortResults);

    return (
      <Container>
        <SearchInput
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSortAsc={this.handleSortAsc}
          handleSortDec={this.handleSortDec}
        />

        {sortResults
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
                  sortType={this.sortType}
                />
              </UserCard>
            );
          })}
      </Container>
    );
  }
}

export default DirectoryContainer;
