/**
 * The Spotify API has the same pattern for fetch answers like New Releases, Featured Playlists,
 */
const getMappedData = (data) => {
  return data.items.map((item) => ({
    name: item.name,
    images: item.images.map((image) => ({
      url: image.url,
    })),
  }));
};

/**
 * Function to return the new released mapped from the Spotify API response.
 *
 * @param {data} data: https://developer.spotify.com/documentation/web-api/reference/get-new-releases
 * @returns NewReleases
 *
 * @example
 * ```
 * // returns
 * [
 *   {
 *     name: string,
 *     images: [
 *       { url: string }
 *     ]
 *   }
 *   ...n
 * ]
 * ```
 */
export const getNewReleasesFromData = (data) => getMappedData(data.albums);

/**
 * Function to return the new featured playlist mapped from the Spotify API response.
 *
 * @param {data} data: https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists
 * @returns FeaturedPlaylists
 *
 * @example
 * ```
 * // returns
 * [
 *   {
 *     name: string,
 *     images: [
 *       { url: string }
 *     ]
 *   }
 *   ...n
 * ]
 * ```
 */
export const getFeaturedPlaylistsFromData = (data) => getMappedData(data.playlists);

/**
 * Function to return the new featured playlist mapped from the Spotify API response.
 *
 * @param {data} data: https://developer.spotify.com/documentation/web-api/reference/get-categories
 * @returns Categories
 *
 * @example
 * ```
 * // returns
 * [
 *   {
 *     name: string,
 *     images: [
 *       { url: string }
 *     ]
 *   }
 *   ...n
 * ]
 * ```
 */
export const getCategoriesFromData = (data) => getMappedData(data.categories);

