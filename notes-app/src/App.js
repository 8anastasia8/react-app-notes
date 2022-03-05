import {useEffect, useState} from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () =>{
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            title: 'This is my first note',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu. ',
            date: '15.04.2021'
        },
        {
            id: nanoid(),
            title: 'This is my second note',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            date: '13.04.2021'
        },
        {
            id: nanoid(),
            title: 'This is my third note',
            description: 'Suscipit tellus mauris a diam maecenas sed enim ut sem.',
            date: '11.04.2021'
        },

    ])

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    const [active, setActive] = useState(false);

    const handleChangeActive = () =>{
        setActive((previousStar) => {
            return !previousStar;
        })
    }

    useEffect(()=>{
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if(savedNotes){
            setNotes(savedNotes)
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('react-notes-app-data',
            JSON.stringify(notes));
    }, [notes]);

    const addNote = (title, description) =>{
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            description: description,
            date: date.toLocaleDateString()
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    const deleteNote = (id) =>{
       const newNotes =  notes.filter((note) => note.id !== id);
       setNotes(newNotes);
    }

    return(
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header
                    active={active}
                    handleChangeActive={handleChangeActive}
                    handleToggleDarkMode={setDarkMode }/>
                <Search handleSearchNote={setSearchText }/>
                <NotesList
                    notes={notes.filter((note)=>
                        note.description.toLowerCase().includes(searchText)
                    )}
                    handleAddNote={addNote }
                    handleDeleteNote={deleteNote}/>
            </div>
        </div>

    )
}

export default App;