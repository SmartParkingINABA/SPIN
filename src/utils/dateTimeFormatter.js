const formatDateTimeFormatter = (date = new Date()) => {
    const dateTime = new Date(date);

    if (isNaN(dateTime.getTime())) return '-';

    const tanggal = new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jakarta'
    }).format(dateTime);
    
    const waktu = new Intl.DateTimeFormat('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta'
    }).format(date)

    return `${tanggal} pukul ${waktu}`;
};

export default formatDateTimeFormatter;