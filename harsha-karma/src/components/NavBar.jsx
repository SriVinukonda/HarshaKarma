import '../styles/NavBar.css'
import Button from './Button';

function NavBar() {
  return ( 
    <div className='navBar'>
      <Button buttonTitle="HOME"/>
      <Button buttonTitle="JOURNEY" />
      <Button buttonTitle="ABOUT"/>
      <Button buttonTitle="TECH"/>
    </div>
  );
}

export default NavBar;
