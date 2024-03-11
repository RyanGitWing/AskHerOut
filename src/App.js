import './App.css';
import Popup from './component/Popup';
import HeartRain from './component/HeartRain';
import Schedule from './component/Schedule';
import { useState } from 'react';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({position:'', top: '', left: ''});

  // const [icons, setIcons] = useState([]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Create a new icon and add it to the array
  //     const randomLeft = (Math.random()*100) + 'vw';
  //     const duration = (Math.random*3+2) +'s';
  //     const newIcon = <FaHeart color="red" key={icons.length} style={{left:(Math.random()*100) + 'vw', animationDuration:((Math.random()*3)+2) +'s', position:'absolute', animation: 'falling linear infinite'}}/>;
  //     setIcons((prevIcons) => [...prevIcons, newIcon]);
  //   }, 2000); // Change the interval time as needed

  //   return () => {
  //     clearInterval(intervalId); // Clear the interval when the component unmounts
  //   };
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonPopup(true);
  }

  const moveButton = (e) => {
    e.preventDefault();

    const randomTop = Math.random() * (window.innerHeight - 60);
    const randomLeft = Math.random() * (window.innerWidth - 170);
    
    setButtonPosition({position:'absolute', top:randomTop, left:randomLeft});
  }


  return (
    <div>
      {/* <div> {icons.map((icon, index) => (<div key={index}>{icon}</div>))} </div> */}
      <div className="App">
        <main>
          <div style={{display:'block', textAlign:'center', alignItems:'center'}}>
            <h1 style={{color:'white', fontSize:'300%', margin:'20px', letterSpacing:'1px'}}>Date?</h1>
            <div id='imgContainer' style={{position:'relative'}}>
              <img src='img\praying-cat.gif' alt='cat' style={{height:'30%', width:'30%'}}></img>
              <div id='please' style={{color:'white', fontSize:'300%', position:'absolute', bottom:'20px', left:'50%', transform: 'translate(-50%, -50%)'}}>PLEASE</div>
            </div>
            <div className='main-btn'>
              <button onClick={e => sendEmail(e)}>Yes</button>
              <button onClick={e => moveButton(e)} style={buttonPosition}>No</button>
            </div>
          </div>
        </main>
        <HeartRain trigger={buttonPopup}></HeartRain> 
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2>Your date has been confirmed!</h2>
            <Schedule></Schedule>
        </Popup>
      </div>
    </div>
    
  );
}

export default App;
