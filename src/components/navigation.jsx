"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReserveClick = (event) => {
    event.preventDefault();
    setModalOpen(true); // Abre o modal
  };

  const closeModal = () => setModalOpen(false); // Fecha o modal

  return (
    <>
      <nav className="navigation">
        <Link className="navigation__link__image" href={"#"}>
          <img
            src="./logo.svg"
            alt="logotipo"
            crossOrigin="anonymous"
            className="navigation__image"
          />
        </Link>
        <ul className="navigation__menu">
          <li className="navigation__menu_item">
            <Link className="navigation__menu_text" href={"#"}>
              Inicio
            </Link>
          </li>
          <li className="navigation__menu_item">
            <Link className="navigation__menu_text" href={"#"}>
              Sobre Nós
            </Link>
          </li>
          <li className="navigation__menu_item">
            <Link className="navigation__menu_text" href={"#"}>
              Populares
            </Link>
          </li>
        </ul>
        <Link href="#" className="navigation__btn" onClick={handleReserveClick}>
          Reserve já
        </Link>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay active">
          <div className="modal">
            <div className="modal-header">Desculpe!</div>
            <div className="modal-body">
              No momento, ainda não estamos aceitando reservas.
            </div>
            <div className="modal-footer">
              <button onClick={closeModal}>Entendido</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
