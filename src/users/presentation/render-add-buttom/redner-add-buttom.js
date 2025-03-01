/**
 *
 * @param {HTMLDivElement} element
 */

import "./render-add-buttom.css";
export const renderAddBtm = (element) => {
  const fabButtom = document.createElement("button");
  fabButtom.innerText = "+";
  fabButtom.classList.add("fab-button");
  element.append(fabButtom);

  //TODO
  fabButtom.addEventListener("click", () => {
    throw new Error("NO implementado");
  });
};
