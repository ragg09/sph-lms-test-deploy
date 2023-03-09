import React from 'react';

interface Props {
  height: number;
  width: number;
  className?: string;
}

const PreviousIcon: React.FC<Props> = ({ height, width, className }: Props) => {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export default PreviousIcon;
