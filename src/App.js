
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {CartWidget} from './components/CartWidget/CartWidget';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>

    <header>
      <NavBar/>
    </header>
    
    <ItemListContainer greeting = 'Catalogo' perro = 'guau guau'>
      
    </ItemListContainer>
      
   


    </>

    
    
  )
}

export default App;
