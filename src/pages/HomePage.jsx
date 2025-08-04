import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      {/* Sección de Bienvenida y Descripción - RECTÁNGULO ROSADO */}
      <div className="pink-section">
        <h1>¡Bienvenido a PideFácil!</h1>
        <p className="subtitle">Tu tienda online favorita para todo lo que necesitas.</p>
        
        <h2>¿Qué es PideFácil?</h2>
        <p className="description">
          PideFácil es tu supermercado de barrio ahora en línea. Te ofrecemos una amplia variedad de productos esenciales para tu hogar: abarrotes, artículos de cuidado personal, productos de limpieza y mucho más. Nuestro objetivo es hacer tu vida más fácil, llevando tus compras directamente a tu puerta con rapidez y comodidad. ¡Calidad y buenos precios siempre a tu alcance!
        </p>
      </div>

      {/* Sección de WhatsApp - RECTÁNGULO VERDE */}
      <div className="green-section">
        <h2>¡Haz tus Pedidos por WhatsApp!</h2>
        <p>
          ¿Prefieres la comodidad de pedir por WhatsApp? ¡Estamos aquí para ti! Contáctanos directamente para realizar tus pedidos, hacer consultas o solicitar productos específicos.
        </p>
        <div className="whatsapp-buttons">
          <a
            href="https://wa.me/51987654321?text=Hola!%20Quisiera%20hacer%20un%20pedido%20en%20PideFácil."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            📱 Enviar Mensaje por WhatsApp
          </a>
          <p><strong>O escríbenos a: +51 987 654 321</strong></p>
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
          <div className="payment-item">
            <span>💳</span>
            <div>
              <strong>Tarjetas de Crédito/Débito:</strong> Aceptamos Visa, MasterCard, American Express, Diners Club.
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