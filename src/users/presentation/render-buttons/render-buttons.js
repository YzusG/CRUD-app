/**
 *
 * @param {HTMLDivElement} element
 */

import usersStore from "../../store/users-store";
import "./render-buttons.css";
export const renderButtons = (element) => {
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next >";

  const previousButton = document.createElement("button");
  previousButton.innerText = "< Prev";

  const currentPageLabel = document.createElement("span");
  currentPageLabel.innerText = usersStore.getCurrentPage;
  currentPageLabel.id = "current-page";

  element.append(previousButton, currentPageLabel, nextButton);
};
