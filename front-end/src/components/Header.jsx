import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate('/');
  }

  const handleButtonLogin = () => {
    navigate('/login');
  }

  const handleButtonRegister = () => {
    navigate('/register');
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login'); 
  }

  
  const renderHomeButton = location.pathname !== '/register' && location.pathname !== '/login' && (
    <button className="relative inline-block group mr-4 text-white font-oswald py-2 px-5 text-xl" onClick={handleButtonClick}>Home
      <span className="absolute top-9 left-5 w-full h-2 bg-gold transition-all transform origin-left scale-x-0 group-hover:scale-x-100 rounded-sm" style={{ width: '100%', maxWidth: 'calc(100% - 2rem)' }}></span>
    </button>
  );

  
  const renderLogoutButton = (location.pathname === '/' || location.pathname.startsWith('/reviews/')) && (
    <button className="relative inline-block group mr-4 text-white font-oswald py-2 px-5 text-xl" onClick={handleLogout}>Logout
      <span className="absolute top-9 left-5 w-full h-2 bg-gold transition-all transform origin-left scale-x-0 group-hover:scale-x-100 rounded-sm" style={{ width: '100%', maxWidth: 'calc(100% - 2rem)' }}></span>
    </button>
  );

 
  const renderLoginRegisterButtons = location.pathname !== '/' && !location.pathname.startsWith(`/reviews/`) && (
    <div className='flex'>
      <button className="relative inline-block group mr-4 text-white font-oswald py-2 px-5 text-xl" onClick={handleButtonLogin}>Login
        <span className="absolute top-9 left-5 w-full h-2 bg-gold transition-all transform origin-left scale-x-0 group-hover:scale-x-100 rounded-sm" style={{ width: '100%', maxWidth: 'calc(100% - 2rem)' }}></span>
      </button>
      <button className="relative inline-block group mr-4 text-white font-oswald py-2 px-5 text-xl" onClick={handleButtonRegister}>Register
        <span className="absolute top-9 left-5 w-full h-2 bg-gold transition-all transform origin-left scale-x-0 group-hover:scale-x-100 rounded-sm" style={{ width: '100%', maxWidth: 'calc(100% - 2rem)' }}></span>
      </button>
    </div>
  );

  return (
    <nav className="flex justify-between bg-black py-5 px-6 shadow-md">
      <div className='flex'>
        {renderHomeButton}
      </div>
      <div className='flex'>
        {renderLogoutButton}
        {renderLoginRegisterButtons}
      </div>
    </nav>
  );
}

export default Header;


