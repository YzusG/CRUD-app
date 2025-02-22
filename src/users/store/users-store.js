import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  user: [],
};

const loadNextPage = async () => {
  await loadUsersByPage(state.currentPage + 1);
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

  getUser: () => [...state.user],
  getCurrentPage: () => state.currentPage,
};
