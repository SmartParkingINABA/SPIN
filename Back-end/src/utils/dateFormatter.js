const formatDateDDMMYYYY = (date) => {
    if (!date) return '-';

    const data = new Date(date);
    if(isNaN(data.getTime())) return '-';

    return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jakarta'
    }).format(data)
};

export default formatDateDDMMYYYY;