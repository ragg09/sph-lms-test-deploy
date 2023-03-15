/* eslint-disable object-shorthand */
import React from 'react';

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  className?: string;
  resizable: boolean;
  name?: string;
  value?: string;
  eventHandler?: (...args: any[]) => any;
}

const Textfield: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  width,
  height,
  className,
  resizable,
  name,
  value,
  eventHandler
}: TextFieldProps) => {
  const propStyle = {
    width: width,
    height: height
  };
  return (
    <div className="mb-4 h-auto w-auto">
      {label !== null && (
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2"
          >{label}</label>
        </div>
      )}
      <textarea
        style={propStyle}
        className={`shadow appearance-none border border-gray-300 rounded text-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${resizable ? 'resize' : 'resize:none'}`}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={eventHandler}
      ></textarea>
    </div>
  );
};

Textfield.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  width: '100%',
  height: '150px',
  className: ''
};

export default Textfield;
