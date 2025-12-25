const formatDateDDMMYYYY = (date) => {
    if (!date) {
        return '-';
    }

    const tanggal = new Date(date);
    if (isNaN(tanggal.getTime())) return '-';

    return `${String(tanggal.getDate()).padStart(2, '0')}/${String(tanggal.getMonth() + 1).padStart(2, '0')
    }/${tanggal.getFullYear()}`;
};

export default formatDateDDMMYYYY;