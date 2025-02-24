import { useState, useEffect } from "react";
import { apiService } from "../services/apis/spotify/spotify-api-service";

export function useWeeklyReleases() {
  const [newReleases, setNewReleases] = useState([]);
  const [nextItemsUrl, setNextItemsUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchNewReleases = async () => {
    try {
      const data = await apiService.getNewReleases();

      setNewReleases((prev) => [...prev, ...data.items]);
      setNextItemsUrl(data.nextItemsUrl);
    } catch (error) {
      if (error.status === 404) {
        setNewReleases([]);
      } else {
        setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewReleases();

    return () => {
      setNewReleases([]);
    };
  }, []);

  const loadNextItems = async () => {
    if (nextItemsUrl && !isLoading) {
      setIsLoading(true);

      await fetchNewReleases(nextItemsUrl);
    }
  };

  return { items: newReleases, isLoading, isError, loadNextItems, isAllItemsLoaded: !nextItemsUrl };
}