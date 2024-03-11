import React from 'react';
import './Popup.css';
import {FaGithubAlt, FaTimes} from 'react-icons/fa';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup' onClick={() => props.setTrigger(false)}>
      <div className='popup-inner' onClick={e => {e.stopPropagation()}}>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
            <FaTimes fontSize={'20px'}/>
        </button>
        <FaGithubAlt fontSize={'30px'}/>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup
