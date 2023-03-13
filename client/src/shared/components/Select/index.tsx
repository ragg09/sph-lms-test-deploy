import React, { useState } from 'react';

export interface SelectProps {
  label?: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const handleOptionSelect = (option: string): void => {
    setSelectedOption(option);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        value={selectedOption}
        onChange={(event) => {
          handleOptionSelect(event.target.value);
        }}
      >
        <option value="" disabled selected>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="py-2 px-4 my-1">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.defaultProps = {
  label: ''
};

export default Select;
