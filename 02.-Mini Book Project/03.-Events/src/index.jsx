import React from "react";
import { createRoot } from "react-dom/client"; //New RenderDOM

//Importing Image
// import bookImg from "./Img/Book.jpg";

// Importing CSS
import "./index.css";
// importing books
import {data} from "./testing/books";

// import component Book
// import Book from "./Book";  
//puede cambiarse el nombre Book al que se desee y seguira funcionando
//si se escribe ./Book se sobreentiende que la extensión es js o jsx por ejemplo
import SpecificBook from './testing/Book'

// Main Funtion

function Booklist() {
  return (
    <section className="booklist">
      {data.map((book)=>{
        return <SpecificBook key={book.id} /*book ={book}*/ {...book}/>
      })}
    </section>
  );
}

//--------funtions--------

  
// desestructurando


// Render

createRoot(document.getElementById("root")).render(<Booklist />);

