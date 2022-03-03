import {MdDeleteForever} from "react-icons/md";

const Note = ({id, title, description, date, handleDeleteNote}) =>{
    return(
        <div className='note'>
            <div className='note-title'>{title}</div>
            <p className='note-description'>{description}</p>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)}
                                 className='delete-icon'
                                 size='1.5em'/>
            </div>
        </div>
    )
}

export default Note;