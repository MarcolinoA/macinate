import React from "react";

function CallIcon({ className }) {
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
        d="M150 225c0-3 11-10 25-15s30-21 35-35c11-28 20-33 20-10 0 20-45 65-65 65-8 0-15-2-15-5zM36 204C7 176 24 128 82 74c63-60 119-69 134-22 9 30-21 51-62 43-40-7-68 21-59 58 8 29-9 67-30 67-7 0-21-7-29-16zm48-20c4-9 1-22-5-30-23-28 47-98 75-75 17 14 46 4 46-15 0-22-27-28-60-14C85 73 26 159 45 189c10 16 32 13 39-5zM165 170c10-11 20-18 23-15 7 6-18 35-31 35-5 0-2-9 8-20z"
        transform="matrix(.1 0 0 -.1 0 24)"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default CallIcon;
