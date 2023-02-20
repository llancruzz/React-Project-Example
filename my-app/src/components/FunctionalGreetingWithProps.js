import React from "react";

// Use props as parameter to use props
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
// So just like that, we’ve passed in the greeting  prop like an HTML attribute, and then rendered it  
// in curly braces inside the component. Any time  you want to use a prop, a JavaScript variable  
// or any kind of JavaScript expression in your JSX,  all you need to do is wrap it in curly braces.
return <h1>Hello, {props.name}! I see you're {props.age} years old; {props.greeting}</h1>
}

export default FunctionalGreetingWithProps

