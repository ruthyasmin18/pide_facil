// src/components/Navbar/Navbar.jsx
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

  return (
    <nav className='nav1' ref={navbarRef}>
      {/* Sección del Logo y Nombre */}
      <Link to="/" className='containerLogo'> {/* containerLogo ya tiene display: flex y gap */}
        <div className='logoContainer'> {/* Contenedor del icono del carrito */}
          <img src={logoPideFacil} alt="Logo PideFácil" className='logoPideFacil' />
        </div>
        <span className='span2'>PideFácil</span> {/* El texto del nombre */}
      </Link>

      {/* Nuevo contenedor para agrupar el menú y el botón de hamburguesa */}
      <div className="nav-menu-wrapper"> {/* Añade esta envoltura */}
        {/* Botón de Hamburguesa para Móviles */}
        <div className='hamburger' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Lista de Navegación */}
        <ul className={`nav-items ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={item.cName}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
          {/* Carrito de Compras */}
          <li
            className="nav-item cart-icon-container"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            <Link to="/carrito" className="navbar_link cart-link">
              <FaShoppingCart className="cart-icon" />
            </Link>
          </li>
        </ul>
      </div> {/* Cierra la nueva envoltura */}
    </nav>
  );
};

export default Navbar;