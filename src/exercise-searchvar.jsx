// React, ReactDOM 가져오기
// import React from "https://esm.sh/react";
import { createRoot } from 'https://esm.sh/react-dom';
// Creating React Element
// ReactDOM create

const iconCircle = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      fill="url(#paint0_linear_81_8)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_81_8"
        x1="5"
        y1="-1.92473e-07"
        x2="19.5"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#06FD10" />
        <stop offset="1" stopColor="#00E1CE" />
      </linearGradient>
    </defs>
  </svg>
);

const searchBar = (
  <form className="searchBar">
    <div role="group">
      <label htmlFor="search" className="sr-only">
        검색어
      </label>
      <input id="search" type="search" placeholder="검색어를 입력해주세요." />
    </div>
    {/* type = submit[ | button | reset] */}
    <button type="submit" aria-label="검색">
      {/* SVG in HTML vs. JSX */}
      {iconCircle}
    </button>
  </form>
);

createRoot(document.getElementById('root')).render(searchBar);