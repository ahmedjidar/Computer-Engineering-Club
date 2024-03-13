import React from 'react'
import '../../../assets/styles/show.css'
import { useEffect , useState } from 'react';

function Show() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Engineering Club", "Club GI", "Club Genie Informatique"];
  const [text, setText] = useState('');
  const period = 400;
  const [delta, setDelta] = useState(300 - Math.random() * 70);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 3);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };
  function navigateToLogin() {
    window.location.href = '/get-started/login'; // Use window.location.href to navigate
  }


  return (
    <div>
        {/* <div class="hero-image">
            <div class="hero-text">
                <h1>{text}</h1>
                <p>Live Your Best Experiences</p>
                <button class="btn-default">Explore</button>
            </div>
        </div> */}

        <div className='backgr'>
            <div className="hero-text">
                <h1>{text}</h1>
                <p>Live Your Best Experiences</p>

                <button className="btn-default" onClick={navigateToLogin}>
      Explore
    </button>
            </div>

            <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
              <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" strokeWidth="120" strokeLinecap="round"/>
            </svg>
        </div>

    </div>

  )
}

export default Show;