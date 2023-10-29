import '../styles/EntryLog.css'

function EntryLog(props) {
    // Send the title name in item props
  return (
    
    <div className='entryLogBody'>
        <p className='date'>YYYY-MM-DD</p>
        <div className="content">
          <p className='entryTitle'>Entry Title</p>
          <p className='journalEntry'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
  );
}

export default EntryLog;
