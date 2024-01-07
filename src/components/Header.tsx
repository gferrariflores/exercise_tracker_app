import React from 'react';
import Button from './Button.tsx'
import { useLocation } from 'react-router-dom'

interface HeaderProps {
    title: string; // El título es opcional
    onAdd: () => void;
    showAdd: boolean; // El título es opcional
}

const baseUrl = import.meta.env.VITE_PUBLIC_PATH;

const Header: React.FC<HeaderProps> = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className="my-5 flex items-center justify-between">
            <h1 className="text-2xl my-1 flex items-center">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                {title}
            </h1>
            { location.pathname === baseUrl && (
                <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            )}
        </header>
    )
}

export default Header