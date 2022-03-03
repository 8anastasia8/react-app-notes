import React from "react";
import {MdDarkMode, MdLightMode} from "react-icons/md";

const ToggleButton = ({ active, handleChangeActive}) =>{
    return(
        <div className='toggle-wrapper' >
            {active ? (
                <MdDarkMode className='active' size='1.5em'
                            onClick={() => handleChangeActive()}/>) : (
                <MdLightMode className='inactive' size='1.5em '
                             onClick={() => handleChangeActive()}/>
            )}

        </div>
    )
}

export default ToggleButton;
