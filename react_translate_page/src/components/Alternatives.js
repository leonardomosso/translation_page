import {useNavigate} from 'react-router-dom';

const AlternativesPages = ({arrayData, rightData}) =>{

    const navigate = useNavigate()

    const matchingData = (answer) => {
        if(answer === rightData.name){
          navigate('/rightanswer')
        } else {
          return console.log("Resposta Errada")
        }
    
      }

    return(
        <div>

        <h2>What's the correct answer?  </h2>
        <h3>{rightData.meaning}</h3>
    
        <div>
          <h2>Alternatives: </h2>
        {arrayData.map(words => <div>
          <h3>{words.name}</h3>
          <p>{words.meaning}</p>
          <p>{words.examples[0]}</p>
          <button onClick={() => matchingData(words.name)}>Select this</button>
          
          </div>)}
          </div>
        </div>

    )
}

export default AlternativesPages;