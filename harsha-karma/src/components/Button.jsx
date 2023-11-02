import '../styles/Button.css'

function Button(props) {
    // Send the title name in item props
  
  let handleClick = () => {
    alert(props.routeTo)


  };

  
  return (
    
    <div className='buttonBody' onClick={handleClick}>
        <a href='https://www.google.com/'>
          {props.buttonTitle}
        </a>
        <div>
          {
          // map the props.options value, and then pass each props.options value as a prop to dropdown
          }
        </div>
    </div>
    
  );
}

export default Button;
