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
            Welcome to my portfolio site, I hope that you find the experience intuitive and inviting!
          </h1>
          <br></br>
          <h6>
            My name is (Sri)Harsha, I'm currently working as an SWE at an FI, and my skillset is focused on building highly resilient fullstack applications!
          </h6>
        </div>
        <Waves></Waves>
      </body>

      
    </html>
  );
}

export default App;
