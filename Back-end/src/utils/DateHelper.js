const generateLastNDates = (n = 7) => {
    const dates = [];
    for (let i = n - 1; i >= 0; i--) {
        const days = new Date();
        days.setDate(days.getDate() - i);
        dates.push(days.toISOString().slice(0, 10))
    }
    return dates;
};

const mergeCounts = (dates, rows, dateKey = 'tanggal', valueKey = 'total') => {
    const map = new Map(rows.map((r) => [String(r[dateKey]), Number(r[valueKey])]));
    return dates.map((date) => ({
        date,
        value: map.get(date) || 0,
    }));
};

export { generateLastNDates, mergeCounts };