import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './TextDrop.css';

export default function TextDrop({title, text}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const dropdownStyle = {
        width: "100%",
        textAlign: "left",
        border: "none",
        borderRadius: "0.5vw",
        background: dropdownOpen ? "white" : "#F0F0F0"
    }

    return (
        <div className='text-drop'>
            <button onClick={toggle} style={dropdownStyle} >
                {dropdownOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} &nbsp; {title}
                {/* {dropdownOpen ? '\u25B2' : '\u25BC'} &nbsp; {title}  */}
            </button>
            {dropdownOpen && 
                text
            }
        </div>
    )
}
