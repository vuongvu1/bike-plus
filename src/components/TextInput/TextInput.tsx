import React from "react";
import styles from "./TextInput.module.css";

type TextInputProps = {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={styles.textInput}
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};
