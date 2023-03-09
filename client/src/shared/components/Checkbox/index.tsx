import React, { Fragment } from 'react';

interface Props {
  label?: string;
  options: string[];
  alignment?: string;
  classname?: string;
  onClickEvent: () => unknown;
}

const Checkbox: React.FC<Props> = ({ label, options, alignment, classname, onClickEvent }: Props) => {
  const [chosenOption, setChosenOption] = React.useState(['']);
  const handleOnClick = (value: any): void => {
    setChosenOption((chosenOption) => [...chosenOption, value]);
    console.log(chosenOption);
  };
  return (
    <Fragment>
      {label !== null && (
        <div className='pb-2'>
          <label className={classname}>{label}</label>
        </div>
      )}
      <div
        className={`${
          alignment === 'horizontal' ? 'flex flex-row' : 'flex flex-col'
        }`}
      >
        {options.map((option, index) => (
          <div key={index} className="flex flex-row space-x-2 pr-4 pb-2">
            <input
              className={classname}
              type="checkbox"
              onClick={() => { // sample of onclickevent
                handleOnClick(`${option}`);
              }}
            ></input>
            <div className={classname}>{option}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

Checkbox.defaultProps = {
  label: '',
  alignment: 'vertical',
  classname: ''
};
export default Checkbox;
