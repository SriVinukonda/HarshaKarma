import '../styles/Button.css'

function Button(props) {
    // Send the title name in item props
  return (
    
    <div className='buttonBody'>
        {props.buttonTitle}
    </div>
  );
}

export default Button;
