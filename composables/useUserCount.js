export const useUserCount = () => {
  const config = useRuntimeConfig();
  const { DASHBOARD_URL } = config.public;

  const userCount = useState('userCount', () => 30000); // Default fallback
  const lastFetched = useState('userCountLastFetched', () => 0);

  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  const fetchUserCount = async () => {
    const now = Date.now();

    // Return cached value if still fresh
    if (lastFetched.value && (now - lastFetched.value) < CACHE_DURATION) {
      return userCount.value;
    }

    try {
      const url = new URL("/api/utils/total-users", DASHBOARD_URL).toString();
      const response = await fetch(url);
      const data = await response.json();

      if (data.ok && data.count) {
        userCount.value = data.count;
        lastFetched.value = now;
      }
    } catch (error) {
      console.error("Failed to fetch user count:", error);
      // Keep using cached/fallback value on error
    }

    return userCount.value;
  };

  return {
    userCount: readonly(userCount),
    fetchUserCount,
  };
};

