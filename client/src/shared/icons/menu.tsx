import React from 'react';
interface Props {
  height: number
  width: number
  className: string
}

const MenuLogo: React.FC<Props> = ({ height, width, className }: Props) => {
  return (
    <svg
      width={10}
      height={10}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
};

export default MenuLogo;
