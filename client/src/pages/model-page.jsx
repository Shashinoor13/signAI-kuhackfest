import { useEffect } from "react";

function ModelPage(){
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = fetch('http://localhost:3000/html').then((response) => response.json()).then((data) => {
      console.log(data);
    }
    ).catch((error) => {
      console.error("Error fetching data:", error);
    });
    console.log(response);
    setData([...data, response]);
  });

    return(
        <></>
    )
}

export default ModelPage;