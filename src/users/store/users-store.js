import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  numOfPages: 0,
  users: [],
};

const loadNextPage = async () => {
  const { users, pages } = await loadUsersByPage(state.currentPage + 1);
  const nextPages = state.currentPage + 1;
  if (users.length === 0) return;
  if (nextPages > pages) return;
  state.currentPage += 1;
  state.numOfPages = pages;
  state.users = users;
};

const loadPreviousPage = async () => {
  const { users, pages } = await loadUsersByPage(state.currentPage - 1);
  const prevPages = state.currentPage - 1;
  // Otra forma de hacer la validacion es usando if(state.currentPage ===1) return;
  //pero alli la logica cambia todo lo que esta dentro del If debe estar afuera
  if (prevPages < pages && prevPages > 0) {
    state.currentPage -= 1;
    state.numOfPages = pages;
    state.users = users;
  }
};

// TODO: Imprementar

const onUserChanged = () => {
  throw new Error("No Implementado");
};

const reloadPage = () => {
  throw new Error("No Implementado");
};

export default {
  loadPreviousPage,
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
