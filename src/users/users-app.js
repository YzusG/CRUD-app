/**
 *
 * @param {HTMLDivElement} Element
 */

import usersStore from "./store/users-store";

export const UsersApp = async (Element) => {
  Element.innerHTML = "Loading....";
  await usersStore.loadNextPage();
};
