//Div avec les compétences sous forme de boutons pour tout le site

import React from "react";
import classNames from "classnames";

const buttonStyles = {
  clair: {
    background: "bg-lightGreen",
    text: "text-darkGreen",
  },
  fonce: {
    background: "bg-darkGreen",
    text: "text-lightGreen",
  },
};

const Button = ({ type = "clair", text, ...props }) => {
  const styles = buttonStyles[type] || buttonStyles.clair;
  const { background, text: textColor } = styles || {};

  const buttonClass = classNames(
    "font-small font-lato rounded-sm shadow-menu pl-4 pr-4 pt-1.5 pb-1.5 mr-2",
    background,
    textColor
  );

  return (
    <button className={buttonClass} {...props}>
      {text}
    </button>
  );
};

export default Button;
