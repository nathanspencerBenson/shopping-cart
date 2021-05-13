import React, { useState} from 'react';
import '../styles/Home.scss';
import playstationImage from '../images/background5.jpeg';
import nintendoImage from '../images/background2.jpeg';
import xboxImage from '../images/xbox.jpeg';

const Home = () => {
    const [backgroundImage, setBackgroundImage] = useState(nintendoImage);




    return (
  <div className="Home" style={{backgroundImage: `url(${backgroundImage})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'cover'}}>
      <div className="wrapper">
    <button className={"button-playstation main-div main-div1"} type="button" onMouseOver={(e) => {setBackgroundImage(playstationImage)}}><h1 style={{textShadow: '5px 5px blue'}}>PLAYSTATION</h1></button>
    <button className={"button-xbox main-div main-div2"} type="button" onMouseOver={() => {setBackgroundImage(xboxImage)}}><h1 style={{textShadow: '5px 5px green'}}>XBOX</h1></button>
    <button className={"button-playstation main-div main-div3"} type="button" onMouseOver={() => {setBackgroundImage(nintendoImage)}}><h1 style={{textShadow: '5px 5px red'}}>NINTENDO</h1></button>
  </div>
  </div>
    )
}
;

export default Home;
