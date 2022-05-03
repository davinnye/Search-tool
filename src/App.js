import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});


  async function handleSearch(){
    if(input === ''){
      alert ("Enter the ZIP Code/CEP")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      console.log(response.data)
      setCep(Response.data)
      setInput("")
    }
    catch{
      alert ("Ops, the search has failed!")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Find your ZIP Code/CEP</h1>
      
      <div classname="containerInput">
        <input type="text"
        placeholder="Enter your ZIP Code/CEP"
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
      
      <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (

          <main className='main'>
          <h2>ZIP Code/CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Aditional info: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>

      )}
        
      
      
    </div>
  );
}

export default App;
