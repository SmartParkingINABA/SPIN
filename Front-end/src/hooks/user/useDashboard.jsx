import { useEffect, useState } from "react";
import { mainOverview } from "../../services/user/dasboard.Service";

export const useDashboard = () => {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        setLoading(true);

        const data = await mainOverview();

        setOverview(data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  return { overview, loading, error };
};
