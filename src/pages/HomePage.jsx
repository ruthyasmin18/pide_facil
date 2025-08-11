import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      {/* Sección de Bienvenida y Quiénes Somos - RECTÁNGULO ROSADO (MODIFICADO) */}
      <div className="pink-section">
        <h1>¡Bienvenido a PideFácil!</h1>
        <p className="subtitle">Tu tienda online favorita para todo lo que necesitas.</p>
        
        {/* -- INICIO DEL NUEVO CONTENIDO -- */}
        <div className="about-us-content">
          <h2>Quiénes Somos</h2>
          <p>
            En PideFácil, nos esforzamos por ser líderes en ventas online de productos para el hogar. Nuestra misión es brindar a nuestra distinguida clientela productos de calidad y garantía a bajos precios, satisfaciendo sus necesidades y superando sus expectativas.
          </p>

          <h3>Nuestros Valores</h3>
          <ul className="values-list">
            <li className="value-item">
              <strong>Calidad:</strong> Ofrecemos productos seleccionados para garantizar la satisfacción de nuestros clientes.
            </li>
            <li className="value-item">
              <strong>Accesibilidad:</strong> Nuestros precios bajos hacen que nuestros productos sean accesibles para todos.
            </li>
            <li className="value-item">
              <strong>Confianza:</strong> Nos comprometemos a brindar productos con garantía, generando confianza en nuestros clientes.
            </li>
          </ul>

          <h3>Nuestra Trayectoria</h3>
          <p>
            Con una trayectoria enfocada en la satisfacción del cliente, hemos establecido una sólida reputación en el mercado online. Nuestro equipo está dedicado a ofrecer un servicio eficiente y amable.
          </p>

          <h3>Nuestra Visión</h3>
          <p>
            Ser la tienda online líder en productos para el hogar en Perú, reconocida por nuestra calidad, garantía y precios competitivos.
          </p>
        </div>
        {/* -- FIN DEL NUEVO CONTENIDO -- */}
      </div>

      {/* Sección de WhatsApp - RECTÁNGULO VERDE */}
      <div className="green-section">
        <h2>Ofertas Exclusivas y Pedidos Directos</h2>
        <p>
          Mantente al día con nuestras últimas promociones y productos uniéndote a nuestro canal de difusión. ¡No te pierdas ninguna oferta!
        </p>
        <div className="whatsapp-buttons">
          <a
            href="https://wa.me/51987654321" // MODIFICADO: Se elimina el texto predefinido para que sea un enlace más general al perfil.
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            📢 Únete a nuestro canal de WhatsApp
          </a>
        </div>
        <div className="direct-order-info">
            <p>O si prefieres realizar un pedido directamente, escríbenos a nuestro número:</p>
            <p className="whatsapp-number"><strong>📱 +51 987 654 321</strong></p>
        </div>
      </div>

      {/* Sección de Medios de Pago - RECTÁNGULO AMARILLO */}
        <div className="yellow-section">
        <h2>Nuestros Medios de Pago</h2>
        <p>En PideFácil, te ofrecemos diversas opciones para que tus compras sean lo más cómodas posible:</p>
        
        <div className="payment-list">
          <div className="payment-item">
            <span>💵</span>
            <div>
              <strong>Pago en Efectivo:</strong> Paga al momento de la entrega de tu pedido.
            </div>
          </div>
          
          {/* --- ÍTEM DE TARJETAS CON ESTRUCTURA SIMPLIFICADA --- */}
          <div className="payment-item payment-item-disabled">
            {/* Texto que solo se mostrará cuando la tarjeta esté desactivada */}
            <div className="proximamente-text">Próximamente</div>

            {/* Contenido original (será ocultado con CSS) */}
            <span className="payment-content">💳</span>
            <div className="payment-content">
              <strong>Tarjetas de Crédito/Débito:</strong> Aceptamos Visa, MasterCard, y más.
            </div>
          </div>
          
          <div className="payment-item">
            <span>📱</span>
            <div>
              <strong>Pagos QR (Yape, Plin):</strong> Escanea nuestro código QR para pagar de forma rápida y segura.
            </div>
          </div>
          <div className="payment-item">
            <span>🏦</span>
            <div>
              <strong>Transferencia Bancaria:</strong> Realiza una transferencia a nuestra cuenta.
            </div>
          </div>
        </div>
        
        <p className="payment-security">Todas las transacciones son seguras y protegidas.</p>
      </div>
    </div>
  );
};

export default HomePage;