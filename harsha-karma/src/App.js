import './App.css';
import NavBar  from './components/NavBar';
import EntryLog from './components/EntryLog';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <EntryLog/>
        <EntryLog/>
        <EntryLog/>
      </header>
      
    </div>
  );
}

export default App;
