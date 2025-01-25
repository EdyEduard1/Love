import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS styles
import 'animate.css';
import './styles.css';
import './bee.css'



const App = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [lastAnswerDate, setLastAnswerDate] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const yesClicked = () => {
    setResult({ header: 'Yay! 🥳', imgSrc: 'path/to/yes-image.png' });
    setLastAnswerDate(new Date().toLocaleString());
  };

  const noClicked = () => {
    setResult({ header: 'Oh no! 😢', imgSrc: 'path/to/no-image.png' });
    setLastAnswerDate(new Date().toLocaleString());
  };

  const changeAnswerClicked = () => {
    setResult(null);
  };

  return (
    <div id="mainContainer">
      {loading ? (
        <div id="loader" className="m-5">
          <h2 id="loaderHeart" className="animate__animated animate__bounce animate__infinite">💘</h2>
          <h2 className="animate__animated animate__fadeIn">Loading...</h2>
        </div>
      ) : (
        <>
          <em>
            <h1 id="header" className="animate__animated animate__fadeInDown" style={{ textShadow: '1px 1px 0 #444' }}>
            Hey love,
            Every day with you feels like a celebration, but I’d love to make Valentine’s Day extra special with you. Will you be my Valentine? 💘
            </h1>
          </em>

          <div className="animate__animated animate__zoomIn animate__delay-2s">
            {/* Bee SVG */}
            <svg id="bee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340">
            <g id="backWing">
                    <path class="wings" d="M110.08,183.77C45.58,135.62-5.14,65,42.17,37.69S120,62.14,135.11,161.07Z" />
                </g>
                <g id="frontWing">
                    <path class="wings" d="M134.28,169.43C92.1,100.88,71,16.51,125.05,8.6s63.28,51.41,40.87,149Z" />
                </g>
                <g id="body">
                    <path d="M40.69,215.56s-11.87,10.55-34.28,9.23c0,0,14.5,17.14,31.64,15.82Z" />
                    <ellipse class="body" cx="165.92" cy="227.43" rx="134.59" ry="80.21"
                        transform="translate(-10.38 7.95) rotate(-2.66)" />
                    <path
                        d="M125.52,152.06a193.42,193.42,0,0,0-26.58,7.75c-18,47.06-16.09,96.65,2.91,140.13A193.6,193.6,0,0,0,134,306.37C108.45,252,107,208.58,125.52,152.06Z" />
                    <path
                        d="M180.51,147.19q-9-.3-18.32.11c-1.65.08-3.3.18-4.94.29-24.07,53.6-21.51,111.38,3.29,160.2,3,0,6.05-.09,9.1-.24,6.5-.3,12.86-.88,19.09-1.7C162.07,249.83,160.78,205.65,180.51,147.19Z" />
                    <path
                        d="M228.31,154.44a189.4,189.4,0,0,0-21.68-4.75c-19.52,51.57-15.38,105.49,8.23,151.06A185,185,0,0,0,240.44,292C218,245.44,215.28,205.4,228.31,154.44Z" />
                    <path class="legs" d="M110.55,285.43c6.59,18.46,1.32,33-15.82,40.87" />
                    <path class="legs" d="M168.18,284.7c9.18,17.32,6,32.43-9.77,42.72" />
                    <path class="legs" d="M219.1,279.14c11.61,15.79,10.72,31.19-3.43,43.69" />
                </g>
                <g id="head">
                    <ellipse class="body" cx="314.88" cy="169.43" rx="80.41" ry="54.05"
                        transform="translate(-31.65 81.25) rotate(-14.01)" />
                    <circle cx="343.88" cy="149.65" r="6.59" />
                    <circle cx="363.65" cy="54.74" r="6.59" />
                    <circle cx="230.51" cy="79.79" r="6.59" />
                    <circle cx="281.92" cy="164.15" r="6.59" />
                    <path
                        d="M322,194.21c11.88-3.48,19.85-12,17.81-18.94l-43,12.57C298.83,194.83,310.12,197.68,322,194.21Z" />
                    <path class="antennae" d="M329.38,120.65c-4-47.45,19.77-63.27,31.64-65.91" />
                    <path class="antennae" d="M277.47,135.15c-9-46.75-35.49-55.8-47.31-55.25" />
                </g>
            </svg>
          </div>

          {result && (
            <div id="resultGroup" className="mt-5">
              <div id="result">
                <h2 id="resultHeader" className="animate__animated animate__zoomIn animate__delay-2s mb-3">
                  {result.header}
                </h2>
                
              </div>
            </div>
          )}

          <div id="btnsGroup" className="btns-group">
            <button
              type="button"
              onClick={yesClicked}
              id="btnYes"
              className="animate__animated animate__zoomIn animate__delay-2s m-3 btn btn-dark btn-lg w3-card red"
            >
              Yeah 😄
            </button>
            <button
              type="button"
              onClick={noClicked}
              id="btnNo"
              className="animate__animated animate__zoomIn animate__delay-3s m-3 btn btn-dark btn-lg w3-card red"
            >
              Nope 😢
            </button>
            <button
              type="button"
              onClick={changeAnswerClicked}
              id="btnChangeAnswer"
              className="animate__animated animate__zoomIn animate__delay-2s  btn btn-dark btn-lg w3-card red"
            >
              Change Answer 😢
            </button>
            {lastAnswerDate && (
              <p id="lastAnswerDate" className="animate__animated animate__fadeIn animate__delay-2s mt-3">
                Last answer given on: {lastAnswerDate}
              </p>
            )}
          </div>

          
        </>
      )}
    </div>
  );
};

export default App;

/*
 * Created Date: 25.01.2025
 * Author: Eduard Constantinescu
 */

