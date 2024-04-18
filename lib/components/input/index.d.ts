import React from "react";
interface InputProps {
    value: string;
    onChange: (value: string) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
