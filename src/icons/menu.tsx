import React from "react";

interface PropTypes {
  className: string;
}

const MenuIcon: React.FunctionComponent<PropTypes> = ({
  className,
}: PropTypes) => (
  <i className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="24"
      viewBox="0 0 28 24"
    >
      <g
        id="Group_13"
        data-name="Group 13"
        transform="translate(-166.5 -2709.5)"
      >
        <line
          id="Line_4"
          x2="28"
          transform="translate(166.5 2710.5)"
          fill="none"
          stroke="#1c1419"
          strokeWidth="2"
        />
        <line
          id="Line_6"
          x2="28"
          transform="translate(166.5 2721.5)"
          fill="none"
          stroke="#1c1419"
          strokeWidth="2"
        />
        <line
          id="Line_5"
          x2="28"
          transform="translate(166.5 2732.5)"
          fill="none"
          stroke="#1c1419"
          strokeWidth="2"
        />
      </g>
    </svg>
  </i>
);

export default MenuIcon;
