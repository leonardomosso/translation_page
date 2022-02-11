import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';


const AlternativesPages = ({arrayData, rightData}) =>{

    const ImagesDiv = styled.div `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
      margin: 20px;
      justify-content: center;
      
      
    `

    const EachDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center; 
      width: 50%;
      align-items: center;
      border: solid 4px red;
    
    `
    const ImageAlternative = styled.img`
      width: 80%;
      height: 50%;

    `

    const navigate = useNavigate()

    const matchingData = (answer) => {
        if(answer === rightData.name){
         navigate('/rightalternative')
        } else {
          return console.log("Resposta Errada")
        }
    
      }

    return(
        <div>

        <h2>What's the correct answer?  </h2>
        <h3>{rightData.meaning}</h3>
        
        <h2>Alternatives: </h2>
        <ImagesDiv>
          
          {arrayData.map(words => <EachDiv>
            
            <ImageAlternative src={`/dados/${words.name}/${words.name}.png`} alt={`${words.name}`}></ImageAlternative>
            <div><h3>{words.name}</h3></div>
            <div><p>{words.meaning}</p></div>
            <div><p>{words.examples[0]}</p></div>
            <div><button onClick={() => matchingData(words.name)}>Select this</button></div>
         
          
            </EachDiv>)}
        
        </ImagesDiv>
        </div>

    )
}

export default AlternativesPages;