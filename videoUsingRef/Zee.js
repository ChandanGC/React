import React, {useState,useRef} from 'react'
import "./App.css";
import VED from "./Music.mp4";
import VED1 from "./Song.mp4";


const Zee = () => {
    let [video, setVideo] = useState(VED);
    let [vid, setVid] = useState(VED1);
    let [play, setPlay] = useState(true)
    let videoRef = useRef();
    let vidRef = useRef();

     let playOrPause = () => {
       if (play == true) {
         setPlay(false);
         videoRef.current.play();
       } else {
         setPlay(true);
         videoRef.current.pause();
       }
    };
    let click = () => {
      if (play == true) {
        setPlay(false);
        vidRef.current.play();
      } else {
        setPlay(true);
        vidRef.current.pause();
      }
    };
  return (
    <div>
      <section className="mainSection">
        <article>
          <div className="logo">
            <img
              src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.63"
              title="ZEE5 Logo"
              alt="ZEE5 Logo"
              width="100%"
              height="auto"
            ></img>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#" className="home">
                  Home
                </a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Web Series</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <li>
                  <a href="#">
                    <i class="fa-sharp fa-solid fa-braille"></i>
                  </a>
                </li>
              </li>
            </ul>
          </div>
          <div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search for movies,Shows,Channels etc."
            />
          </div>
          <div className="content">
            <ul>
              <li className="letter2">
                <a href="#" className="letter1">
                  <abbr title="Change language">
                    A<sup>5</sup>
                  </abbr>
                </a>
              </li>
              <li>
                <a href="#">
                  <button className="btn1">LOGIN</button>
                </a>
              </li>
              <li>
                <a href="#" className="king">
                  <i class="fa-solid fa-crown"></i>
                  <button className="btn2">BUY PLAN</button>
                </a>
              </li>
              <li>
                <i class="fa-solid fa-bars"></i>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <div className='vid'>
        <video src={video} ref={videoRef} onClick={playOrPause}></video>
        <video src={vid} ref={vidRef} onClick={click}></video>
      </div>
    </div>
  );
};

export default Zee