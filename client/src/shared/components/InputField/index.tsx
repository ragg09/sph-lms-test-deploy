/* eslint-disable object-shorthand */
import React from 'react';

export interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  width?: string;
  height?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type,
  id,
  width,
  height
}: InputFieldProps) => {
  const propStyle = {
    width: width,
    height: height
  };

  return (
    <div className="mb-4">
      {label !== '' && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className="shadow appearance-none border rounded text-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        style={propStyle}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

InputField.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  id: '',
  width: '100%',
  height: ''
};

export default InputField;
