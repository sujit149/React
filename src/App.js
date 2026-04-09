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

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Title = function () {
//      return <h1>Inside react ussing jsx</h1>;
// };

// // element = it is enclosed inside bracket
// const title2 = (<h1>
// Inside react ussing jsx title 2
// </h1>);

// // element
// let num1 = 10000;
// // function component, to define component we have to use capital letter in the starting of the component name and it should return some jsx, also we need to use the arrow function
// const HeadingComponent = () => (
//     <div>
//         {title2}
//        <h2>{num1}</h2>
//         <Title/>
//         <h1>Inside Namaste react</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HeadingComponent/>);

// *********Lecture 4************

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantCard from "./components/RestaurantCard";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = ({ resName, cuisine, rating, deliveryTime }) => {
//     return (
//         <div className= "res-card">
//             <img
//             className="res-logo"
//             alt="res-logo"
//             src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg"></img>
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>{rating}</h4>
//             <h4>{deliveryTime}</h4>
//         </div>
//     )
// }

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-container">
//         <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian , Asian" rating="4.5 stars" deliveryTime="38 Minutes"/>
//         <RestaurantCard resName="KFC" cuisine="Fast Food" rating="4.0 stars" deliveryTime="30 Minutes"/>
//       </div>
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
