import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
      Location: "",
      // avatar_url:,
    };
    // console.log("child Constructor");
  }
  async componentDidMount() {
    // console.log("parent componentDidMount");
    const data = await fetch("https://api.github.com/users/sujit149");
    const json = await data.json();
    console.log(json);
    console.log(json.avatar_url);
    this.setState({
      name: json.login,
      Location: json.location || "Atigre",
      avatar_url: json.avatar_url || "https://via.placeholder.com/150",
    });
  }
  render() {
    // console.log("child render");
    return (
      <div className="user">
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {this.state.name}</h2>
        <h3>Location : {this.state.Location}</h3>
        <img src={this.state.avatar_url} alt="User Avatar" />
        <h4>Contact: {this.props.contact}</h4>
      </div>
    );
  }
}

export default UserClass;
