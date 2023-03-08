import React, { useState } from 'react';

export interface SearchBarProps {
  onSearchEvent: (query: string) => void;
  height?: string;
  width?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  onSearchEvent,
  height = 'h-auto',
  width = 'w-auto'
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSearchEvent(query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const containerClasses = `pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 ${height} ${width}`;

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5 absolute ml-3 pointer-events-none'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
        <input
          type='text'
          placeholder='Search...'
          className={containerClasses}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
