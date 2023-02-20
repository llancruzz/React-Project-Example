// This gives evereything that react itself can do, including callling react.createElement
// Note: This line is actually not required in the latest versions of React
import React from "react";

// Create function to return html
// Function Js Vanilla
// function FunctionalGreeting(){
//    return <h1>Hello from React!</h1>
// }

// Function Js ES6 Arrow
const FunctionalGreeting = () => <h1>Hello from React!</h1>

// To display it, you have to export the function and import that function
// where you want to use, on that case in App.js
export default FunctionalGreeting

