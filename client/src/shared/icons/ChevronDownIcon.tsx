import React from 'react';

interface ChevronDownIconProps {
  height: number;
  width: number;
  className?: string;
  color?: string;
}

const ChevronDown: React.FC<ChevronDownIconProps> = ({
  height,
  width,
  className,
  color
}: ChevronDownIconProps) => {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

ChevronDown.defaultProps = {
  className: '',
  color: 'currentColor'
};

export default ChevronDown;
