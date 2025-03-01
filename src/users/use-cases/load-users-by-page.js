import { localhostUserToModel } from "../mappers/localhost-user.mapper";
/**
 *
 * @param {number} page
 * @returns
 */

//! Repasar el video de la clase de uso de MAPPERS
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const res = await fetch(url);
  const { data, pages } = await res.json();

  const users = data.map(localhostUserToModel);

  console.log(users);
  return { users, pages };
};
