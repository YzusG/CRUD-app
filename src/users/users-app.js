/**
 *
 * @param {HTMLDivElement} Element
 */

import { renderAddBtm } from "./presentation/render-add-buttom/redner-add-buttom";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

export const UsersApp = async (element) => {
  element.innerHTML = "Loading....";
  await usersStore.loadNextPage();
  element.innerHTML = "";
  renderTable(element);
  renderButtons(element);
  renderAddBtm(element);
  renderModal(element);
};
