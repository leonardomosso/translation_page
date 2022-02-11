import React, { useEffect, useState } from 'react';
import axios from "axios";
import AlternativesPages from '../components/Alternatives';
import LoadingComponent from '../components/LoadingComponent';

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
        let  values = []
        for await (const item of words){
            let dict = {}
            let key = Object.keys(item)[0]
            dict["name"] = key.toLocaleUpperCase()
            dict["meaning"] = item[key].meaning
            dict["examples"] = item[key].examples
            values.push(dict)
            }

            function doesContainDups(values) {
                let newArray = []
                for (const item of values){
                    newArray.push(item.name)
                    
                }
                console.log(newArray)
                let set = new Set(newArray);
                return set.size !== newArray.length;
             }
            
             const verifyingValues = (doesContainDups(values))
             if(verifyingValues === true){
                 getData()
             } else {
            setArrayData(values)
             }
        }
        
        dataOrganize()
        
    }, [loadingData]);

    useEffect(() => {

        setRightData(arrayData[Math.floor(Math.random() * arrayData.length)])    
    }, [arrayData])

  return (
    
    <div>
        {rightData !== undefined ?
        <AlternativesPages 
            arrayData={arrayData}
            rightData={rightData}          
        /> :     
        <LoadingComponent />
        }  
  </div>
  ) 
};

export default InitialPage;
