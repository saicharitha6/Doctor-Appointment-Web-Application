import React from 'react';

const Select = ({ options, onSelect, disabled }) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  return (
    <select onChange={handleSelectChange} disabled={disabled}>
      <option value="Select an option">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
