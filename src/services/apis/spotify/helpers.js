/**
 * The Spotify API has the same pattern for fetch answers like New Releases, Featured Playlists
 */
const getNameAndImagesUrl = (data) => {
  return {
    nextItemsUrl: data.next,
    items: data.items.map((item) => ({
      name: item.name,
      href: item.external_urls.spotify,
      images: item.images.map((image) => ({
        url: image.url,
      })),
    })),
  };
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
export const getNewReleasesFromData = (data) => getNameAndImagesUrl(data.albums);

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
export const getFeaturedPlaylistsFromData = (data) => getNameAndImagesUrl(data.playlists);

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
export const getCategoriesFromData = (data) => {
  return {
    nextItemsUrl: data.categories.next,
    items: data.categories.items.map((item) => ({
      name: item.name,
      href: item.href,
      images: item.icons.map((icon) => ({
        url: icon.url,
      })),
    })),
  };
};
