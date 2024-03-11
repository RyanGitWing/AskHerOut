import React, { useState, useEffect } from 'react';
import './HeartRain.css';
import {FaHeart} from 'react-icons/fa';


function HeartRain(props) {
  // useEffect(() => {
  //   const createHeart = (e) => {
  //     // const body = document.getElementsByClassName('heartBody');
  //     const body = document.body;
  //     const heartIcon = document.createElement('div');
  //     heartIcon.classList.add('heart');
  //     heartIcon.style.left = (Math.random()*100) + 'vw';
  //     heartIcon.style.animationDuration = (Math.random*3+2) +'s';
  //     body.appendChild(heartIcon);
  //   }

  //   const createHeartInterval = setInterval(createHeart, 100);

  //   return () => {
  //     clearInterval(createHeartInterval);
  //   };

  // }, []);

  const [icons, setIcons] = useState([]);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setIcons((prevIcons) => {
        // Create a new icon and add it to the array
        const newIcon = <FaHeart className='heart' fontSize={'30px'} color='#0504aa' style={{left:(Math.random()*100) + 'vw', animationDuration:(Math.random()*3+2) +'s'}} key={icons.length}/>;
        const updatedIcons = [...prevIcons, newIcon];

        if (updatedIcons.length > 100) {
          return updatedIcons.slice(1);
        }

        return updatedIcons;
      });
    }, 100); // Change the interval time as needed
    
    // const intervalId = setInterval(() => {
    //   // Create a new icon and add it to the array
    //   const newIcon = <FaHeart className='heart' fontSize={'20px'} color='white' style={{left:(Math.random()*100) + 'vw', animationDuration:(Math.random()*3+2) +'s'}}key={icons.length}/>;
    //   setIcons((prevIcons) => [...prevIcons, newIcon]);
    // }, 100); // Change the interval time as needed

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);
  

  return (props.trigger) ? (
    <div className='heart-body'>
      <div className='heart-inner'>
        <div> {icons.map((icon, index) => (<div key={index}>{icon}</div>))} </div>
      </div>
    </div>
  ) : '';
};

export default HeartRain;