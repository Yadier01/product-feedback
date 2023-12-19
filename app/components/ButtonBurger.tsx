"use client";

import { useEffect, useState } from "react";
import { useMyStore } from "./Store";

export const ButtonBurger = () => {
  const { setIsOpen } = useMyStore();
  const [isOpen, setIsOpens] = useState(false);

  const toggle = () => {
    setIsOpens((prev) => !prev);
  };
  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);
  return (
    <>
      <button className="" onClick={toggle}>
        <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
          </g>
        </svg>
      </button>
    </>
  );
};
