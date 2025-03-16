import React, { useState } from "react";

interface PillListProps {
  value: string[];
  onChange: (newValue: string[]) => void;
  placeholder?: string;
}

export const PillList: React.FC<PillListProps> = ({
  value = [],
  onChange,
  placeholder = "Type and press Enter to add",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!value.includes(inputValue.trim())) {
        const newValue = [...value, inputValue.trim()];
        onChange(newValue);
      }
      setInputValue("");
    }
  };

  const removePill = (pillToRemove: string) => {
    const newValue = value.filter((pill) => pill !== pillToRemove);
    onChange(newValue);
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
      {value.map((pill, index) => (
        <div
          key={index}
          className="flex items-center border border-gray-300 text-gray-700 px-3 py-1 rounded-md"
        >
          <span className="text-blue-700">{pill}</span>
          <button
            type="button"
            onClick={() => removePill(pill)}
            className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            ×
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder={value.length === 0 ? placeholder : ""}
        className="flex-grow min-w-[120px] outline-none border-none focus:ring-0"
      />
    </div>
  );
};
