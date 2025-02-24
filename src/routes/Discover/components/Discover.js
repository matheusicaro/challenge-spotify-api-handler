import React, { Component } from "react";
import DiscoverView from "./DiscoverView";
import { apiService } from "../../../services/apis/spotify/spotify-api-service";

import "../styles/_discover.scss";

const initialState = () => ({
  error: null,
  isLoading: false,
  items: [],
});

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: initialState(),
      playlists: initialState(),
      categories: initialState(),
    };
  }

  async getNewReleases() {
    this.setState((prevState) => ({
      ...prevState,
      newReleases: {
        ...prevState.newReleases,
        isLoading: true,
        error: null,
      },
    }));

    try {
      const newReleases = await apiService.getNewReleases();

      this.setState((prevState) => ({
        ...prevState,
        newReleases: {
          ...prevState.newReleases,
          items: newReleases,
          error: null,
          isLoading: false,
        },
      }));
    } catch (error) {
      this.setState((prevState) => ({
        ...prevState,
        newReleases: {
          ...prevState.newReleases,
          error: "Error on loading the new releases",
          isLoading: false,
        },
      }));
    }
  }

  componentDidMount() {
    this.getNewReleases();
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <DiscoverView
        newReleases={newReleases}
        playlists={playlists}
        categories={categories}
      />
    );
  }
}

