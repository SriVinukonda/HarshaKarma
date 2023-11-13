import '../styles/Button.css'

function Button(props) {
    // Send the title name in item props
  


  
  return (
    
    <div className='buttonBody'>
        <a href={props.routeTo}>
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
