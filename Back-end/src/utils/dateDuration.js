const diffMinutes = (start, end = new Date()) => {
    if (!start || !end) return 0;

    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();
    if (!Number.isFinite(startTime) || !Number.isFinite(endTime)) {
        return 0;
    }

    const diffMs = endTime - startTime;

    if (diffMs <= 0) {
        return 0;
    }

    return Math.floor(diffMs / 60000);
};

const formatDuration = (totalMinutes = 0) => {
    if (!Number.isFinite(totalMinutes) || totalMinutes <= 0) {
        return 0;
    }
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0 && minutes > 0) {
        return `${hours} jam ${minutes} menit`;
    }

    if (hours > 0) {
        return `${hours} jam`
    }

    return `${minutes} menit`;
};

export {
    diffMinutes,
    formatDuration
}