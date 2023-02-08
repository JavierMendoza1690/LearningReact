import { useEffect, useState } from "react";


export const useGetData = (url) => {
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  const [prevPage,setPrevPage] = useState({});
  const [nextPage, setNextPage] = useState({});

  const fetchData = async (newUrl) => {
    try {
      const response = await fetch(newUrl);
      const data = await response.json();
      setInfo(data.info);
      setResults(data.results)
      console.log('entro rolitronco de mamahuevo');
    } catch {
      console.log("error");
    }
  };

  const fetchPrevPage = (prevUrl)=>{
    fetchData(prevUrl)
  }

  const fetchNextPage = (nexturl)=>{
    fetchData(nexturl)
    console.log(info);
  }

  useEffect(() => {
    fetchData(url);
  },[]);

  return { info, results, fetchPrevPage, fetchNextPage};
};
