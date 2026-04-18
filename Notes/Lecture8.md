
**** Class base component 
it is defined as below

class UserClass extends React.Component {
  render() {
    return (
      <div className="user">
        <h2>Name: Sujit Patil</h2>
        <h3>Location : Kolhapur</h3>
        <h4>Contact: Missing</h4>
      </div>
    );
  }
}

export default UserClass;

the only differance with functional component is you have to define the component like below
class UserClass extends React.Component {

we have to use render with class component  the render method
  render()

  The class component was used in old days.


  ### How to create a state variable in class component
you have to add the state variable inside constructor and define it using the state as state is reserved keyword for declaring the state
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        }
    }


    you can access it inside jsx like below
    <h1>Count : {this.state.count}</h1>

    you have to use this.state.count to access it


    ### How to update the state variable
    Never update the state variable direclty in class base component

    you have to update it like below

     <button onClick={() => {
          this.setState( {
            count: this.state.count + 1
          })
        }}>Increase Count</button>

    this.setState is object and inside it you can modify the actual state 



### Life cycle of Class component in react

1] Constructor : 
                 Whenever component start rendering first thing called is constructor


2] render  :
               The second thing called is render 
               suppose if we are using the child class inside the render then everything inside it is called suppose if we have componentDidMount inside child class and parent class then execution will be like below
               ***
               1]first parent constructor
               2] Parent render
               3] In render child class is used then
               4] child class constructor
               5] child class render
               5] child class componentDidMount
               6] parent class componentDidmount



3] componentDidMount: 
                after the component is rendered the componentDidMount is called it is same as useEffect method which is used in functional component.
                It is used for api calls. As we first loads the component and then calls the api as it is good practice loads the component and then add the data.


                ### from here next things are written in notebook
