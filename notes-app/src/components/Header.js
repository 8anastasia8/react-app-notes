import React from "react";
import {MdDarkMode} from "react-icons/md";
import ToggleButton from "./ToggleButton";

const Header = ({handleToggleDarkMode, active, handleChangeActive}) =>{
    return(
        <div className='header'>
            <h1>Notes</h1>
            <button
                onClick={() => handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode) }
                className='toggle-wrap'>
                <ToggleButton className='toggle-btn'
                              active={active} handleChangeActive={handleChangeActive}/>
            </button>

        </div>
    )
}

export default Header;