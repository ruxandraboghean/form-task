import url from "./url";

const fetchData = async () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default fetchData;
