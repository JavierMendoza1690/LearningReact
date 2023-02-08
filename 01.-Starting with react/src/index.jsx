import React from "react";
import ReactDOM from "react-dom";  //old its not necessary
import { createRoot } from "react-dom/client"; //New RenderDOM


/* 
JSX Rules:

1.-Return a simple element: div/section/article or fragment
2.-Capital leter in firts element (CamelCase)
3.-Use ClassName instead Class
4.-Close every elements
5.-Formating
*/

const Person = () => {
  return <h2>John Smilga</h2>;
};

const Message = () =>{
  return <h1>This is the teacher in my firts component</h1>;
}



const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

// ReactDOM.render(Greeting(), document.getElementById('root'));

createRoot(document.getElementById("root")).render(<Greeting />);
