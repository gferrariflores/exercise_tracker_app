// components/Header.tsx
import React from 'react'
import { useLocation } from 'react-router-dom'
import { routes } from '../utils/routes'
import Button from './Button.tsx'

interface HeaderProps {
  title: string
  onAdd: () => void
  showAdd: boolean
}

const Header: React.FC<HeaderProps> = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className="my-5 px-4 flex items-center justify-between">
      <h1 className="text-2xl my-1 flex items-center">
        <i className="fas fa-star text-yellow-500 mr-2"></i>
        {title}
      </h1>
      {location.pathname === routes.index && (
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
      )}
    </header>
  )
}

export default Header
