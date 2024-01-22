import NavBar  from '../components/NavBar';
import EntryLog from '../components/EntryLog';
let journal_logs = {'entries': []};
// await fetch("http://localhost:8000/").then(unproc => unproc.text().then(unproc_txt => {
//     // console.log("{\"entries\": ["+unproc_txt+"]}");
//     journal_logs = JSON.parse("{\"entries\": ["+unproc_txt+"]}");
// }));
function Journey() {
    // let journal_logs;
    

    console.log("journal_logs: ",journal_logs['entries']);
    return (
        <div>
            <NavBar/>
            {journal_logs['entries'].map(curr_l => 
                <EntryLog date={curr_l['log_date']} title={curr_l['log_id']} content={curr_l['log_entry']}/>
            )}
            <h1>Page under construction</h1>
            
        </div>
    );
}

export default Journey;