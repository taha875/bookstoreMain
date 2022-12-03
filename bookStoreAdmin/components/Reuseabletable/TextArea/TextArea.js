import React from "react";

function TextArea({ label, disabled, placeholder, name, value, onChange }) {
  return (
    <>
      <div className="flex flex-col w-full">
        <label className="text-lg font-semibold capitalize mb-3">{label}</label>
        <textarea
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className={`w-full border border-gray-200 focus:outline-none focus:border-yellow-700 rounded-md py-3 px-2 text-base ${
            disabled && `placeholder-black`
          }`}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default TextArea;