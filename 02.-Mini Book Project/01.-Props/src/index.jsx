import React from "react";
import { createRoot } from "react-dom/client"; //New RenderDOM

//Importing Image
import bookImg from "./Img/Book.jpg";

// Importing CSS
import './index.css';

// Objects

const firstBook ={
  img: 'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL600_SR600,400_.jpg',
  title: 'Prince Harry The Duke of Sussex',
  author: 'Spare'
};

const secondBook ={
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL600_SR600,400_.jpg',
  title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear'
};

// Main Funtion

function Booklist() {
  return (
    <section  className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>

      <Book img={secondBook.img} title={secondBook.title} author={
        secondBook.author} />
      

    </section>
  );
}

//--------funtions--------

const Book = (props) => {
  return (
    <article className="book">
    <img src={props.img} alt="Book Img" />
    <h1>{props.title}</h1>
    <h4 className="AuthorStyles">{props.author}</h4>
    </article>
  );
};

// Render

createRoot(document.getElementById("root")).render(<Booklist />);


// arrow functions return implicitly if they have a single line

// Forma incorrecta de dar estilos
// const Author = ()=> <h4 style={ {color:'#617d98', fontSize: '0.75rem', marginTop:'0.25rem'} }>Prince Harry The Duke of Sussex</h4>;

// -----forma correcta----
// const Author = ()=> <h4 className="AuthorStyles">Prince Harry The Duke of Sussex</h4>;
