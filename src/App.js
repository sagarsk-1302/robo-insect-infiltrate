import './App.css';
import { useEffect,useState } from 'react';
import MatrixInput from './components/matrix-input.component/matrix-input.component';
function App() {
  const [result,setResult] = useState([])
  // console.log({result})
  const onSubmitHandler = (event) => {
    const row = event.target.row.value
    const column = event.target.column.value
    const commands = event.target.commands.value
    event.preventDefault();
    fetch("/getpath", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        row, column, commands
      })
    }).then(response => response.json())
      .then((result) => {
        console.log(result)
        setResult(result.result)
      })
  }

  return (
    <div className='robo-insect'>
      <h1 className='title'>Robo Insect Infiltrate</h1>
      <form onSubmit={onSubmitHandler} className='form'>
        <MatrixInput />
        <textarea name="commands" cols="30" rows="5" placeholder='enter the steps'></textarea>
        <button className='submit'>Submit</button>
      </form>
      <div className='result'>
          {
            result.length>0 ? result.map(data=>
              <h3 key={result.indexOf(data)}>{`${data[0]} ${data[1]} ${data[2]}`}</h3>
              ):<h3>Enter data and hit submit.</h3>
          }
      </div>
    </div>
  );
}

export default App;
