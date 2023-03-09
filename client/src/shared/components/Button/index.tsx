/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';

export interface ButtonProps {
  text: string;
  color?: string;
  width?: string;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  color,
  width,
  onClick
}: ButtonProps) => {
  const propStyle = {
    backgroundColor: color,
    width: width
  };

  return (
    <div className="flex flex-row">
      <button
        className="m-2 text-white font-bold py-2 px-4 rounded border"
        style={propStyle}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: '',
  width: 'auto',
  onClick: () => {}
};

export default Button;
