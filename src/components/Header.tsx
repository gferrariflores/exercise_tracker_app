import React from 'react';
import Button from './Button.tsx'

interface HeaderProps {
    title: string; // El título es opcional
    onAdd: () => void;
    showAdd: boolean; // El título es opcional
}

const Header: React.FC<HeaderProps> = ({ title, onAdd, showAdd }) => {
    return (
        <header className="my-5 flex items-center justify-between">
            <h1 className="text-2xl my-1 flex items-center">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                {title}
            </h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header