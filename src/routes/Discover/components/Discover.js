import React from "react";
import { useWeeklyReleases } from "../../../hooks/useWeeklyReleases";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";

import "../styles/_discover.scss";

const Discover = () => {
  const { items, isError, isLoading } = useWeeklyReleases();

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={{ items, isError, isLoading }}
        errorMessage="Something is bad on loading the releases of this week. Try again later or refresh the page"
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={{ items, isError, isLoading }}
        errorMessage="Something is bad on loading the featured playlists. Try again later or refresh the page"
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={{ items, isError, isLoading }}
        errorMessage="Something is bad on loading the browse. Try again later or refresh the page"
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;

