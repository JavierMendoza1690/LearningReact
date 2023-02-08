
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import { useGetData } from "./components/useGetData";
const Initialurl = "https://rickandmortyapi.com/api/character";


function App() {
  const [searchUrl,setSearchUrl] = useState(Initialurl);
  const {info, results, fetchPrevPage, fetchNextPage} = useGetData(searchUrl);

 
  return (
    <>

      <Navbar brand="Rick and Morty app" />;
      <Pagination fetchNextPage={fetchNextPage} fetchPrevPage={fetchPrevPage} {...info}/>
      <Main results={results} />
      <Pagination  fetchNextPage={fetchNextPage} fetchPrevPage={fetchPrevPage} {...info}/>
      
    </>
  );
}

export default App;
