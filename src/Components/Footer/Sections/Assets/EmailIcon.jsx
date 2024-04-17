import React from "react";

function EmailIcon({ className }) {
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
        d="M71 206C4 169 6 63 75 32c32-15 95-16 95-2 0 6-18 10-40 10-80 0-119 82-65 135 49 50 135 15 135-55 0-20-5-30-15-30-9 0-15 9-15 24 0 48-52 73-84 40-41-40-8-83 61-81 59 3 73 11 73 42 0 79-81 129-149 91zm74-86c0-18-6-26-23-28-24-4-38 18-28 44 3 9 15 14 28 12 17-2 23-10 23-28z"
        transform="matrix(.1 0 0 -.1 0 24)"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default EmailIcon;
