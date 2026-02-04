import statusCache from "../cache/Status.js";

const startCleanupJobs = () => {
    setInterval(() => {
        statusCache.cleanUp();
    }, 60 * 1000);
};

export default startCleanupJobs;