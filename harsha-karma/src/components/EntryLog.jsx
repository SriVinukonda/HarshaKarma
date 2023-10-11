import '../styles/EntryLog.css'

function EntryLog(props) {
    // Send the title name in item props
  return (
    
    <div className='buttonBody'>
        {props.buttonTitle}
    </div>
  );
}

export default EntryLog;
