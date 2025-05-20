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
    <div className="search--container">
      <div className="search--wrapper">
        <Search className="search--icon" />
        <input
          type="search"
          ref={inputRef}
          className="search-input"
          placeholder={placeholder}
        />
        <button onClick={() => onSearchClick(inputRef.current?.value)}>Buscar</button>
      </div>
    </div>
  );
});

export default SearchInput;
