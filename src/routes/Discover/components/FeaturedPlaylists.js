import React from "react";
import { useFeaturedPlaylist } from "../../../hooks";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";

const FeaturedPlaylists = () => {
  const { items, isError, isLoading, isAllItemsLoaded, loadNextItems } = useFeaturedPlaylist();

  return (
    <DiscoverBlock
      text="FEATURED PLAYLISTS"
      id="featured"
      errorMessage="Something is bad on loading the featured playlists. Try again later or refresh the page"
      items={items}
      isError={isError}
      isLoading={isLoading}
      isAllItemsLoaded={isAllItemsLoaded}
      onClickNextItems={loadNextItems}
    />
  );
};

export default FeaturedPlaylists;
