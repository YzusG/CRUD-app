import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) return;
  state.currentPage += 1;
  state.users = users;
};

const ladPreviousPage = async () => {
  throw new Error("No Implementado");
};

// TODO: Imprementar

const onUserChanged = () => {
  throw new Error("No Implementado");
};

const reloadPage = () => {
  throw new Error("No Implementado");
};

export default {
  ladPreviousPage,
  loadNextPage,
  onUserChanged,
  reloadPage,

  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],
  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
};
