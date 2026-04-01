//  In react we use createElement method to create element in react it takes three arguments firsr is the type of element (ex. h1,div, etc) second is the attributes(ex. it is an object we can add the id ) and third is the content inside that element, also one key note it is an object
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React",
// );
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// below line will render the element on browser here parent object is converted to html by react and reactdom
// root.render(heading);
// root.render(parent);

// *********Lecture 3************

import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = function () {
     return <h1>Inside react ussing jsx</h1>;
};

// element = it is enclosed inside bracket
const title2 = (<h1>
Inside react ussing jsx title 2
</h1>);

// element
let num1 = 10000;
// function component, to define component we have to use capital letter in the starting of the component name and it should return some jsx, also we need to use the arrow function
const HeadingComponent = () => (
    <div>
        {title2}
       <h2>{num1}</h2>
        <Title/>
        <h1>Inside Namaste react</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);
