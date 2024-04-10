import React from "react";

function DivisorIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      version="1"
      viewBox="0 0 48 48"
      className={`${className}`}
    >
      <path
        d="M125 350L15 240l113-113L240 15l112 112 113 113-110 110c-60 60-112 110-115 110s-55-50-115-110z"
        transform="matrix(.1 0 0 -.1 0 48)"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default DivisorIcon;
