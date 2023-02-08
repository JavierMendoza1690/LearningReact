import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
//two componentes - provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
 
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value = {{removePerson, people}}>
      <h3>Contesx API / UseContext</h3>
      <List people />
    </PersonContext.Provider>
  );
};

const List = ({ }) => {
  const MainData = useContext(PersonContext);
  console.log(MainData);
  return (
    <>
      {MainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
           
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson} = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
