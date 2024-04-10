import React from "react";

function ScrollIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66.667"
      height="66.667"
      version="1"
      viewBox="0 0 50 50"
      className={`${className}`}
    >
      <path
        d="M240 268V116l-50 49c-27 27-53 46-57 42s21-36 55-70l62-62 62 62c34 34 59 66 55 70s-30-15-57-42l-50-49v152c0 95-4 152-10 152s-10-57-10-152z"
        transform="matrix(.1 0 0 -.1 0 50)"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default ScrollIcon;