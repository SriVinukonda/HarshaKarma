import './App.css';
import NavBar  from './components/NavBar';
import EntryLog from './components/EntryLog';
import Waves from './components/Waves';

function App() {
  return (
    <html className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
      <img className='moon' src={require('./media/moon.png')}  alt='Moon'/>
        <div className='welcome-msg'>
          <h1>
            Hello there, my name is (Sri)Harsha, I'm currently working as a SWE at a Financial Institution
          </h1>
          <br></br>
          <h6>
          And when I'm not busy re-inventing the wheel, I focus on building highly resilient fullstack applications
          </h6>
        </div>
        <Waves></Waves>
      </body>

      
    </html>
  );
}

export default App;
