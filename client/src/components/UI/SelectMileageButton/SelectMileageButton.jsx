import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'mileage1', label: '15000 км или 1 год' },
  { value: 'mileage2', label: '30000 км или 2 года' },
  { value: 'mileage3', label: '45000 км или 3 года' },
];

function SelectMileageButton() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default SelectMileageButton;