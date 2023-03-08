import React, { useState } from 'react';

import ChevronDownIcon from '@/src/shared/icons/ChevronDownIcon';

export interface Option {
  text: string;
  url: string;
}

export interface DropdownProps {
  label?: string;
  options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelectEvent = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{selectedOption ?? label}</span>
          <div className="-mr-1 ml-2 h-5 w-5" aria-hidden="true">
            <ChevronDownIcon height={20} width={20} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <a
                key={option.url}
                href={`#${option.url}`}
                className={`${
                  selectedOption === option.url
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100`}
                role="menuitem"
                onClick={() => {
                  handleOptionSelectEvent(option.url);
                }}
              >
                {option.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  label: ''
};

export default Dropdown;
