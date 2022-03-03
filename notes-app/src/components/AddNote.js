import { useState } from "react";

const AddNote = ({handleAddNote}) =>{
    const [titleText, setTitleText] = useState('');
    const handleChangeTitle = (event) =>{
        setTitleText(event.target.value);
    }

    const [descriptionText, setDescriptionText] = useState('');
    const handleChangeDescription = (event) =>{
        if( characterLimit - event.target.value.length >= 0){
            setDescriptionText(event.target.value);
        }
    }

    const characterLimit = 200;

    const handleSaveClick = () =>{
        if(titleText.trim().length > 0 &&
            descriptionText.trim().length > 0){
            handleAddNote(titleText, descriptionText);
            setTitleText('');
            setDescriptionText('');
        }
    }

    return(
        <div className='note new'>
            <textarea className='title'
                      cols="8"
                      rows="1"
                      placeholder="Type a title.."
                      value={titleText}
                      onChange={handleChangeTitle}>
            </textarea>
            <textarea className='description'
                      cols="8"
                      rows="6"
                      placeholder="Type a note.."
                      value={descriptionText}
                      onChange={handleChangeDescription} >
            </textarea>
            <div className='note-footer'>
                <small className='characterLimit'>{characterLimit - descriptionText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;