import axios from "axios";
import qs from "qs";
import { Buffer } from "buffer";

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
        Authorization: "Basic " + Buffer.from(this.clientId + ":" + this.clientSecret).toString("base64"),
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

  async getData(url) {
    const token = await this.getAuthorizationToken();

    return axios({
      method: "GET",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "json",
    });
  }

  async getNewReleases(optionalNextItemsUrl) {
    const defaultUrl = `${this.apiBaseUrl}/new-releases`;

    const response = await this.getData(optionalNextItemsUrl || defaultUrl);

    return getNewReleasesFromData(response.data);
  }

  async getFeaturedPlaylists(optionalNextItemsUrl) {
    const defaultUrl = `${this.apiBaseUrl}/featured-playlists`;

    const response = await this.getData(optionalNextItemsUrl || defaultUrl);

    return getFeaturedPlaylistsFromData(response.data);
  }

  async getCategories(optionalNextItemsUrl) {
    const defaultUrl = `${this.apiBaseUrl}/categories`;

    const response = await this.getData(optionalNextItemsUrl || defaultUrl);

    return getCategoriesFromData(response.data);
  }
}

export const apiService = new SpotifyApiService();
