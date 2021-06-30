import './App.scss';
import React, { useEffect, useRef } from 'react';

export const App = ({comments, buttons, counter, bet, draw, manageNumbers, manageCounter, manageBet, manageDraw, getComments}) => {
    const time = useRef();
      useEffect(() => {
      let itemsTest = [];
      for (let i = 1; i <= 80; i++) {
          itemsTest.push({number:i, state: 'default'});
      }
      manageNumbers(itemsTest);
      startTimer(180, time);
      getComments();
    }, []);
    
    const startTimer = (duration) => {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            time.current.innerText = minutes + ":" + seconds;
            
            if (--timer < 0) {
                getComments();
                timer = duration;
            }
        }, 1000);
    };
  
    const addNumber = (number, state) => {
    if ( counter < 12 || state === 'clicked') {
        let temCounter = counter;
        buttons.map(item => {
            if (item.number === number) {
                if(item.state === 'clicked') {
                    item.state = 'default';
                    temCounter--;
                    manageCounter(temCounter);
                } else {
                    item.state = 'clicked';
                    temCounter++;
                    manageCounter(temCounter);
                }
            } else {
              if (item.state === 'disabled') {
                  item.state = 'default'
              }
            }
        });
    }
    if(counter >= 11  && state !== 'clicked') {
        buttons.map(item => {
            if (item.state !== 'clicked') {
              item.state = 'disabled';
            }
        });
    }
      manageNumbers([...buttons])
  };
    
    const handleBetSection = (event, isBetChanged) => {
      if(isBetChanged) {
          manageBet(event.target.value);
      } else {
          manageDraw(event.target.value);
      }
    };
  
  return (
    <div className="App">
        <div className="field">
            {buttons.map((item, index) => {
              return <div className="btn-wrapper" key={index}><span className={`button ${item.state}`} onClick={() => addNumber(item.number, item.state)}>{item.number}</span></div>;
            })}
        </div>
        <div className="bet-section">
            <div>
                <label>Bet</label>
                <input type="number" step="0.2" value={bet} onChange={(event) => handleBetSection(event, true)}/>
            </div>
            <div>
                <label>Draw</label>
                <input type="number" step="1" value={draw} onChange={(event) => handleBetSection(event, false)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={counter * draw * bet} disabled/>
            </div>
        </div>
        <div className="bold">Time <span ref={time}>03:00</span> minutes!</div>
        <div className="comments">
            {comments.map((comment, index) => {
                return <div className={`comment-wrapper ${comments.length - counter <= index ? 'bold' : ''}`} key={index}>Name: <span className="comment" key={index} >{comment.name}</span></div>;
            })}
        </div>
    </div>
  );
};
