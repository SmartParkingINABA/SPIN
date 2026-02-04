const parseDateToSql = (dateString) => {
    if (!dateString) return null;

    const separator = dateString.includes('/') ? '/' : '-';
    const parts = dateString.split(separator);
    if (parts.length !== 3) return null;

    const [days, months, years] = parts;
    if (!days || !months || !years) return null;
    const sqlDate = `${years}-${months.padStart(2, '0')}-${days.padStart(2, '0')}`;

    const parsed = new Date(sqlDate);
    if (isNaN(parsed.getTime())) return null;

    return sqlDate;
};

export default parseDateToSql;