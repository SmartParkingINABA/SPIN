import { useEffect, useState } from "react";
import { mainOverview } from "../../services/user/dasboard.Service";

export const useDashboard = () => {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await mainOverview();
      setOverview(data);
      setLoading(false);
    };

    fetch();
  }, []);

  return { overview, loading };
};
