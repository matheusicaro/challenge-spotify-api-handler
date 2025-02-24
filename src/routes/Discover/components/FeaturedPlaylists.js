import React from "react";
import { useFeaturedPlaylist } from "../../../hooks";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";

const FeaturedPlaylists = () => {
  const { items, isError, isLoading, onClickNextItems, isAllItemsLoaded } = useFeaturedPlaylist();

  return (
    <DiscoverBlock
      text="FEATURED PLAYLISTS"
      id="released"
      items={items}
      isError={isError}
      isLoading={isLoading}
      onClickNextItems={onClickNextItems}
      isAllItemsLoaded={isAllItemsLoaded}
      errorMessage="Something is bad on loading the releases of this week. Try again later or refresh the page"
    />
  );
};

export default FeaturedPlaylists;

