import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoPideFacil from '../../assets/logoPideFacil.png';
import { navItems } from "../../NavItems/NavItems";
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cerrar menú al hacer clic en un enlace
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Cerrar menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className='nav1' ref={navbarRef}>
      {/* Logo y texto */}
      <Link to="/" className='containerLogo' onClick={closeMobileMenu}>
        <div className='logoContainer'>
          <img src={logoPideFacil} alt="Logo PideFácil" className='logoPideFacil' />
        </div>
        <span className='span2'>PideFácil</span>
      </Link>

      {/* Botón hamburguesa - FUERA del wrapper para mejor control */}
      <div className='hamburger' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú de navegación */}
      <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className='nav-items'>
          {navItems.map((item) => (
            <li key={item.id} className={item.cName}>
              <Link to={item.path} onClick={closeMobileMenu}>
                {item.title}
              </Link>
            </li>
          ))}
          <li className="nav-item cart-icon-container">
            <Link to="/carrito" className="navbar_link cart-link" onClick={closeMobileMenu}>
              <FaShoppingCart className="cart-icon" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera (solo móvil) */}
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}
    </nav>
  );
};

export default Navbar;