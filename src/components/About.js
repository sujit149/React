import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component  {
  constructor(props) {
    super(props);
    // console.log("patrent Constructor");
  }
  // async componentDidMount() {
  //   // console.log("parent componentDidMount");
  //   const data = await fetch("https://api.github.com/users/sujit149");
  //   const json = await data.json();
  //   console.log(json);
  // }
  render() {
    // console.log("parent render");
  return (
    <div>
      <h1>About</h1>
      {/* <User name="Sujit Patil" location="Atigre" contact="missing"/> */}
      <UserClass name="Sujit Patil" location="Atigre" contact="missing"/>
    </div>
  );
}
}

export default About;
