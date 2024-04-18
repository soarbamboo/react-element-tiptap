import React from "react";
interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
