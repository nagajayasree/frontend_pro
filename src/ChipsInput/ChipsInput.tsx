import React, { useState, ChangeEvent } from 'react';
import './ChipsInput.css';

interface Chip {
  id: number;
  name: string;
}

function ChipsInput() {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState<Chip[]>([]);

  const onHandleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputValue(event.target.value);
  };

  const onHandleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = event.currentTarget.value;
      if (value !== '' && value.trim()) {
        setChips([
          ...chips,
          { id: Date.now(), name: event.currentTarget.value },
        ]);
        console.log(chips);
        setInputValue('');
      }
    }
  };

  const onHandleDelete = (id: any) => {
    setChips(chips.filter((chip) => chip.id !== id));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '40px 0',
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        value={inputValue}
        onChange={onHandleChange}
        placeholder="Type a chip and press tag"
        style={{ padding: '8px', width: '200px' }}
        onKeyDown={onHandleKeyDown}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {chips.map((chip) => (
          <ul key={chip.id}>
            {chip.name}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => onHandleDelete(chip.id)}
            >
              X
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
