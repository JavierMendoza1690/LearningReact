import React from 'react'


const Book = ({img, title, author}) => {
    //atrubute, EventHandler
    // atribute onMouseOver
    const clickHandler = () =>{
      alert('hello world')
    }
    
    const complexExample = (author)=>{
      console.log(author);
    
    }
      return ( 
        <article className="book">
          <img src={img} alt="Book Img" />
          <h1 onClick={()=> console.log(title)}>{title}</h1>
          <h4 className="AuthorStyles">{author}</h4>
           <button type="button" onClick={clickHandler}>reference example</button>
           {/* to send arguments. an arrow function must be applied  */}
           <button type="button" onClick={()=>complexExample(author)}>More complex example</button>
        </article>
      );
    };

export default Book