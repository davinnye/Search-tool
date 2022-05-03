import {FiSearch} from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className='title'>Find your ZIP Code/CEP</h1>
      
      <div classname="containerInput">
        <input type="text"
        placeholder="Enter your ZIP Code/CEP"/>
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>


        <main className='main'>
          <h2>CEP: 40800470</h2>
          <span>Rua 8 de Dezembro</span>
          <span>Complemento: Complementando</span>
          <span>Bairro: Paripe</span>
          <span>Salvador - Bahia</span>
        </main>
      
      
    </div>
  );
}

export default App;
