import React from 'react';


const NavBar: React.FC<{ scrollTo: (offset: number) => void }> = ({ scrollTo }) => {
    return (
        <nav style={{
            position: 'fixed', 
            width: '100%', 
            top: '3rem', 
            zIndex: 10, 
            background: 'transparent',
            height: '80px',  // Adjust this value to fit the logo size
            display: 'flex',
            alignItems: 'center',  // Ensures vertical centering of all content
            padding: '0 80px'
        }}>
          <img src="/Logo.svg" alt="Company Logo" className='navbar-logo' onClick={() => scrollTo(0)}/>
    
        <div style={{ display: 'flex', gap: '20px', marginLeft: 'auto' }}>
        <button className="navbar-button" onClick={() => scrollTo(1)}>
            About
        </button>
        <button className="navbar-button" onClick={() => scrollTo(2)}>
            Projects
        </button>
        <button className="navbar-button" onClick={() => scrollTo(3)}>
            Skills
        </button>
    </div>
</nav>
    );
};

export default NavBar;