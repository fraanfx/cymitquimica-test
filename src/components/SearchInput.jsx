import { forwardRef, useRef, useImperativeHandle } from 'react';
import { Search } from 'lucide-react';

const SearchInput = forwardRef(({ placeholder, onSearchClick }, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = '';
    },
    getValue: () => inputRef.current?.value || '',
  }));

  return (
    <div className="search--container" aria-label='Buscador'>
      <div className="search--wrapper">
       
        <input
          type="search"
          ref={inputRef}
          className="search--input"
          placeholder={placeholder}
        />
        <button className='search--button' onClick={() => onSearchClick(inputRef.current?.value)}> <Search className="search--icon" /></button>
      </div>
    </div>
  );
});

export default SearchInput;
