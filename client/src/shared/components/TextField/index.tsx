import React from 'react';

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  width: number;
  height: number;
  className: string;
  resizable: boolean;
}

const Textfield: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  width,
  height,
  className,
  resizable
}: TextFieldProps) => {
  return (
    <div className="p-5 h-auto w-auto">
      {label !== null && (
        <div>
          <label>{label}</label>
        </div>
      )}
      <textarea
        rows={height}
        cols={width}
        className={`${resizable ? 'resize' : 'resize:none'} ${className}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

Textfield.defaultProps = {
  label: '',
  placeholder: ''
};

export default Textfield;
