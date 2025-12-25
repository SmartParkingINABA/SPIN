const formatDateTimeFormatter = (date = new Date()) => {
    const dateTime = new Date(date);

    if (isNaN(dateTime.getTime())) return '-';

    const tanggal = String(dateTime.getDate()).padStart(2, '0');
    const bulan = String(dateTime.getMonth() + 1).padStart(2, '0');
    const tahun = dateTime.getFullYear();

    const jam = String(dateTime.getHours()).padStart(2, '0');
    const menit = String(dateTime.getMinutes()).padStart(2, '0');
    const detik = String(dateTime.getSeconds()).padStart(2, '0');

    return `${tanggal}/${bulan}/${tahun} pukul ${jam}:${menit}:${detik}`;
};

export default formatDateTimeFormatter;