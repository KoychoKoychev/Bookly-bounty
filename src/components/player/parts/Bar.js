import React from "react";

import "./Bar.css"

export default function Bar({ duration, curTime, onTimeUpdate }) {

  const curPercentage = (curTime / duration) * 100;

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  function formatDuration(time) {
    const min = Math.floor(time/60);
    const sec = Math.ceil(time - min*60)
    return `${min.toString().padStart(2, '0')}.${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className="controls-wraper">
      <div className="bar">
        <div
          className="bar__progress"
          style={{
            background: `linear-gradient(to right, #4838D1 ${curPercentage}%, #DDD7FC 0)`
          }}
          onMouseDown={e => handleTimeDrag(e)}
        >
          <span
            className="bar__progress__knob"
            style={{ left: `${curPercentage - 2}%` }}
          />
        </div>
      </div>
      <div className="time">
        <span className="bar__time">{formatDuration(curTime)}</span>
        <span className="bar__time">{formatDuration(duration)}</span>
      </div>
    </div>
  );
}
