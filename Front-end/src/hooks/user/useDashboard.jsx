import { useEffect, useState } from "react";
import { getMainOverview } from "../../services/user/dasboard.Service";

export const useDashboard = () => {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOverview = async () => {
    try {
      setLoading(true);

      const data = await getMainOverview();

      setOverview(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  return { overview, loading, error };
};
