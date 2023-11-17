import NavBar  from '../components/NavBar';
import EntryLog from '../components/EntryLog';
let Journey = () => {
    return (
        <div>
            <NavBar/>
            <EntryLog date="2023-May-17th" title="Intro" content="Kimura with Steve"/>
            <EntryLog/>
            <EntryLog/>
        </div>
    );
}

export default Journey;