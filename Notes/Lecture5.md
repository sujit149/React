
* Two Types of Export and import

1] Default Export/ import

import Component from "path"



2] Named export/ import

export const Component;
import {Component} from "path";



* React Hooks
================  It is normal Utility functions

1] useState() = to create super powerful state varibles in react

** how to use 

const [listOfRestaurants, setListOfRestaurants] = useState([])

listOfRestaurants = this variable give the value or you are setting the value at first time or initialising the variable

setListOfRestaurants = resetting the value or you have assign the modified value to it

setListOfRestaurants(add modified value)


<!-- now working of it -->

Whenever the state variable updates React will re render the component

2] useEffect()
