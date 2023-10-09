import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import questions from "./data/questions";
import axios from "axios";

const url: string = "http://127.0.0.1:3000/audiences";

function App() {
  const [audiences, setAudiences] = useState();
  const fetchData = () => {
    return axios.get(url).then((res) => setAudiences(res.data));
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  console.log(audiences, "@audiences");

  return <Form questions={questions} />;
}

export default App;
