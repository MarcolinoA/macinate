import React from "react";

function PositionIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      version="1"
      viewBox="0 0 24 24"
      className={`${className}`}
    >
      <path
        d="M79 209c-16-16-20-29-15-51 6-32 42-88 56-88s50 56 56 88c7 34-22 72-56 72-11 0-29-9-41-21zm71-14c14-17 8-51-15-80l-15-20-15 20c-35 44-26 95 15 95 10 0 23-7 30-15z"
        transform="matrix(.1 0 0 -.1 0 24)"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
      <path
        d="M104 179c-10-17 13-36 27-22 12 12 4 33-11 33-5 0-12-5-16-11zM30 64c-11-12-10-18 4-32C58 8 182 8 206 32c14 14 15 20 4 32-7 9-22 16-34 16-21-1-21-1-2-15 28-21 12-30-54-30s-82 9-54 30c19 14 19 14-2 15-12 0-27-7-34-16z"
        transform="matrix(.1 0 0 -.1 0 24)"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default PositionIcon;
