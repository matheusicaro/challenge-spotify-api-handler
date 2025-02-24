import axios from "axios";
import qs from "qs";

import { Environment } from "../../../config";
import { getNewReleasesFromData, getFeaturedPlaylistsFromData, getCategoriesFromData } from "./helpers";

class SpotifyApiService {
  constructor() {
    this.apiAuthUrl = Environment.api.authUrl;
    this.apiBaseUrl = Environment.api.baseUrl;

    this.clientId = Environment.api.clientId;
    this.clientSecret = Environment.api.clientSecret;

    this.authorizationToken = null;
  }

  /**
   * Function to get the spotify API token:
   * reference: https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
   */
  async getAuthorizationToken() {
    if (this.authorizationToken) {
      return this.authorizationToken;
    }

    const response = await axios({
      method: "POST",
      url: this.apiAuthUrl,
      headers: {
        Authorization: "Basic " + new Buffer.from(this.clientId + ":" + this.clientSecret).toString("base64"),
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({ grant_type: "client_credentials" }),
      responseType: "json",
    });

    const { status: statusCode, data } = response || {};

    if (statusCode === 200 && data.access_token) {
      this.authorizationToken = data.access_token;

      return this.authorizationToken;
    }

    throw new Error(`Error on getting spotify api token, status code received: ${statusCode}`);
  }

  async getNewReleases() {
    const token = await this.getAuthorizationToken();

    const response = await axios({
      method: "GET",
      url: `${this.apiBaseUrl}/new-releases`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "json",
    });

    return getNewReleasesFromData(response.data);
  }

  async getFeaturedPlaylists() {
    const token = await this.getAuthorizationToken();

    const response = await axios({
      method: "GET",
      url: `${this.apiBaseUrl}/featured-playlists`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "json",
    });

    return getFeaturedPlaylistsFromData(response.data);
  }

  async getCategories() {
    const token = await this.getAuthorizationToken();

    const response = await axios({
      method: "GET",
      url: `${this.apiBaseUrl}/categories`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "json",
    });

    return getCategoriesFromData(response.data);
  }
}

export const apiService = new SpotifyApiService();
