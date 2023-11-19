import WebGLScene from '../components/WebGLScene';

import '../styles/EntryLog.css'

function EntryLog(props) {
    // Send the title name in item props
  return (
    
    <div className='entryLogBody'>
        <p className='date'>{props.date}</p>
        <div className="content">
          <p className='entryTitle'>{props.title}</p>
          <p className='journalEntry'>{props.content}</p>
        <div className='webGlScene'>
          <WebGLScene/>
          <WebGLScene/>
          <WebGLScene/>
          <WebGLScene/>
        </div>
        </div>
        </div>
  );
}

export default EntryLog;
