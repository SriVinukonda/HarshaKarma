import '../styles/NavBar.css'
import Button from './Button';

function NavBar() {
  return ( 
    <div className='navBar'>
      <Button buttonTitle="HOME" routeTo="/"/>
      <Button buttonTitle="JOURNEY" routeTo="/journey"/>
      <Button buttonTitle="ABOUT" routeTo="/about"/>
      <Button buttonTitle="TECH" routeTo="/tech"/>
    </div>
  );
}

export default NavBar;
