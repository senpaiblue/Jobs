import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = ({ endpoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': 'ad211775f1msh2c84ab8a70a1fc9p13a6e7jsn15c1c2b85697',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request
        (options);
      setData(response.data.data);
      console.log(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData();
  }
  return {data, isLoading, refetch, error}
}
export default useFetch