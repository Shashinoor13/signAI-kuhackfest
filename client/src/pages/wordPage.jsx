import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function WordPage() {
    const [list, setList] = useState([]);
    const {id} = useParams() || "A";
    
    useEffect(() => {
        let mounted = true;
        getList(id)
        .then(items => {
            if(mounted) {
                setList(items)
            }
        })
        return () => mounted = false;
    }, [id])
    
    const renderedData = list.map(item => (
        <div key={item} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-12 mx-10">
            <iframe
            width={800}
            height={600}
                src={`https://www.youtube.com/embed/${item.video}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.word}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><i>meaning : </i>{item.def}</p>
    </div>
        </div>
      ));

      console.log(renderedData);
    return(
        <div className="wrapper">
        <h1 className="text-lg	">Some Popular Words from <b>{id}</b></h1>
        <div className="list">
          {renderedData}
          </div>
      </div>
    )
}

async function getList(id) {
    console.log(id)
    const data = await fetch(`http://127.0.0.1:8080/${id}.json`);
    return await data.json();
}

export default WordPage;
