import React from "react";
import classnames from "classnames";

interface PropTypes {
  isFavorite?: boolean;
}

const HeartIcon = ({ isFavorite }: PropTypes) => (
  <i
    className={classnames("heart-icon", {
      active: !!isFavorite,
    })}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32.003"
      height="26.233"
      viewBox="0 0 32.003 26.233"
    >
      <path
        id="Path_17"
        d="M15.471,5.646c.125-.247.2-.4.28-.554A7.579,7.579,0,0,1,21.05.741a7.7,7.7,0,0,1,7.94,2.549,6.69,6.69,0,0,1,1.459,3.731c.316,2.821-.871,5.111-2.628,7.191a24.321,24.321,0,0,1-3.856,3.417c-2.175,1.678-4.353,3.355-6.5,5.072a23.728,23.728,0,0,0-1.827,1.8.612.612,0,0,1-.131-.071,46.513,46.513,0,0,0-6.324-5.264,46.278,46.278,0,0,1-5.238-4.2,11.476,11.476,0,0,1-2.836-3.985A7.754,7.754,0,0,1,1.57,4,6.95,6.95,0,0,1,6.547.659a7.757,7.757,0,0,1,6.227,1.357,7.671,7.671,0,0,1,2.263,2.8C15.165,5.062,15.295,5.309,15.471,5.646Z"
        transform="translate(0.507 0.502)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  </i>
);

export default HeartIcon;
