import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import DiscoverItemList from "./DiscoverItemList";

import "../styles/_discover-block.scss";

function scrollContainer(id, { isNegative } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

export default function DiscoverBlock({
  text,
  id,
  items,
  isError,
  isLoading,
  isAllItemsLoaded,
  errorMessage,
  onClickNextItems,
}) {
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {items.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>

      <DiscoverItemList
        id={id}
        items={items}
        isError={isError}
        isLoading={isLoading}
        isAllItemsLoaded={isAllItemsLoaded}
        errorMessage={errorMessage}
        onClickNextItems={onClickNextItems}
      />
    </div>
  );
}
