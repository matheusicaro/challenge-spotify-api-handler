import { useState, useEffect } from "react";
import { apiService } from "../services/apis/spotify/spotify-api-service";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [nextItemsUrl, setNextItemsUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchCategories = async (optionalNextItemsUrl) => {
    try {
      const data = await apiService.getCategories(optionalNextItemsUrl);
      setCategories((prev) => [...prev, ...data.items]);
      setNextItemsUrl(data.nextItemsUrl);
    } catch (error) {
      if (error.status === 404) {
        setCategories([]);
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

      await fetchCategories(nextItemsUrl);
    }
  };

  useEffect(() => {
    fetchCategories();

    return () => {
      setCategories([]);
    };
  }, []);

  return { items: categories, isLoading, isError, loadNextItems, isAllItemsLoaded: !nextItemsUrl };
}