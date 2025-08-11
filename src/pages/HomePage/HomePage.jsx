import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-wrapper"> {/* Envoltura principal */}

      {/* SECCIÓN 1: BIENVENIDA Y QUIÉNES SOMOS */}
      <section className="section-welcome">
        <div className="content-container">
          <h1>¡Bienvenido a PideFácil!</h1>
          <p className="subtitle">Tu tienda online favorita para todo lo que necesitas.</p>
          
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
        </div>
      </section>

      {/* SECCIÓN 2: WHATSAPP (LLAMADA A LA ACCIÓN) */}
      <section className="section-cta">
        <div className="content-container">
          <h2>Ofertas Exclusivas y Pedidos Directos</h2>
          <p>
            Mantente al día con nuestras últimas promociones y productos uniéndote a nuestro canal de difusión. ¡No te pierdas ninguna oferta!
          </p>
          <div className="whatsapp-buttons">
            <a
              href="https://whatsapp.com/channel/0029Vb66nad89inZPukxJF1I"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              📢 Únete a nuestro canal de WhatsApp
            </a>
          </div>
          <div className="direct-order-info">
            <p>O si prefieres realizar un pedido directamente, escríbenos a nuestro número:</p>
            <p className="whatsapp-number"><strong>📱 +51 964 230 471</strong></p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: MEDIOS DE PAGO */}
      <section className="section-payments">
        <div className="content-container">
          <h2>Nuestros Medios de Pago</h2>
          <p>En PideFácil, te ofrecemos diversas opciones para que tus compras sean lo más cómodas posible:</p>
          
          <div className="payment-list">
            <div className="payment-item">
              <span>💵</span>
              <div>
                <strong>Pago en Efectivo:</strong> Paga al momento de la entrega de tu pedido.
              </div>
            </div>
            
            <div className="payment-item payment-item-disabled">
              <div className="proximamente-text">Próximamente</div>
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
      </section>
    </div>
  );
};

export default HomePage;