import React from "react";
import WeeklyReleases from "./WeeklyReleases";
import FeaturedPlaylists from "./FeaturedPlaylists";
import BrowseCategories from "./BrowseCategories";
import "../styles/_discover.scss";

const Discover = () => {
  return (
    <div className="discover">
      <WeeklyReleases />
      <FeaturedPlaylists />
      <BrowseCategories />
    </div>
  );
};


export default Discover;
