import React, { useEffect, useState } from 'react';
import axios from "axios";

const InitialPage = () => {
    const [loadingData, setLoadingData] = useState([])
    const [arrayData, setArrayData] = useState([])
    const [ rightData ,setRightData] = useState([])

    

    // Getting datas from the backend
    const getData = async () => {
        await axios.get("http://localhost:3001/").then((response ) =>{
                setLoadingData(response.data)     
                console.log(response.data)     
    })
        .catch((err) => {
            return console.log(err, "impossible to load")} )
    };
    
    useEffect( () => {
        getData()
    }, [])

    useEffect(() => {
        
        async function dataOrganize() {
        const words = loadingData
        let values = []
        for await (const item of words){
            let dict = {}
            let key = Object.keys(item)[0]
            dict["name"] = key.toLocaleUpperCase()
            dict["meaning"] = item[key].meaning
            dict["examples"] = item[key].examples
            values.push(dict)
          }
          setArrayData(values)
        }
        dataOrganize()
        
    }, [loadingData]);

    useEffect(() => {
        setRightData(arrayData[Math.floor(Math.random() * arrayData.length)])
    }, [arrayData])

    console.log(rightData)
  return <div>
      <h1> Initial Page </h1>
  </div>;
};

export default InitialPage;
