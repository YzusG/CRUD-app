/**
 *
 * @param {HTMLDivElement} element
 */
import { modalHtml } from "./render-modal.html?raw"; //El ?raw es lo que usa vite para importar el html si se usaotra tecnologia investigar como se hace
let modal;
export const renderModal = (element) => {
  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  modal.className = "modal-container hide-modal";

  element.append(modal);
};
