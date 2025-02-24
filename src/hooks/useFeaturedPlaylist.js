import { useState, useEffect } from "react";
import { apiService } from "../services/apis/spotify/spotify-api-service";

export function useFeaturedPlaylist() {
  const [featuredPlaylist, setFeaturedPlaylist] = useState([]);
  const [nextItemsUrl, setNextItemsUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchFeaturedPlaylist = async () => {
    try {
      const data = await apiService.getFeaturedPlaylists();

      setFeaturedPlaylist((prev) => [...prev, ...data.items]);
      setNextItemsUrl(data.nextItemsUrl);
    } catch (error) {
      if (error.status === 404) {
        setFeaturedPlaylist([]);
      } else {
        setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadNextItems = async () => {
    if (nextItemsUrl && !isLoading) {
      setIsLoading(true);

      await fetchFeaturedPlaylist(nextItemsUrl);
    }
  };

  useEffect(() => {
    fetchFeaturedPlaylist();

    return () => {
      setFeaturedPlaylist([]);
    };
  }, []);

  return { items: featuredPlaylist, isLoading, isError, loadNextItems, isAllItemsLoaded: !nextItemsUrl };
}