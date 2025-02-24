import { useState, useEffect } from "react";
import { apiService } from "../services/apis/spotify/spotify-api-service";

export function useWeeklyReleases() {
  const [newReleases, setNewReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const data = await apiService.getNewReleases();
        console.log("===>", data);
        setNewReleases(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewReleases();

    return () => {
      setNewReleases([]);
    };
  }, []);

  return { items: newReleases, isLoading, isError };
}

