import React from 'react';

interface ButtonProps {
    text?: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const colorClasses = [
    { color: "green", value: 'bg-green-500 hover:bg-green-700' },
    { color: "red", value: 'bg-red-500 hover:bg-red-700' },
];

const Button: React.FC<ButtonProps> = ({ text = 'Button', onClick, color }) => {
    const colorClass = colorClasses.find(item => item.color === color)?.value || '';
    return (
        <button className={`text-white py-2 px-4 ${colorClass}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
