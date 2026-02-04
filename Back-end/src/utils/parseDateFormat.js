
export const formatSQLDate = (sqlDateString) => {
    if (!sqlDateString) {
        return '';
    }

    if (typeof sqlDateString !== 'string') {
        sqlDateString = String(sqlDateString);
    }

    const dateOnly = sqlDateString.split(' ')[0];
    const parts = dateOnly.split('-');
    
    if (parts.length !== 3) {
        return sqlDateString;
    }

    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    
    return `${day}/${month}/${year}`;
};


export const parseSQLDateToLocalDate = (sqlDateString) => {
    if (!sqlDateString) {
        throw new Error('Tanggal tidak boleh kosong');
    }

    
    const parts = sqlDateString.split('-');
    if (parts.length !== 3) {
        throw new Error('Format tanggal SQL tidak valid');
    }

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);


    return new Date(year, month - 1, day);
};


export const parseDateToSQL = (dateString) => {
    if (!dateString || typeof dateString !== 'string') {
        throw new Error('Format tanggal tidak valid');
    }

    
    dateString = dateString.trim();

    
    const dateRegex = /^(\d{1,2})[-\/\s](\d{1,2})[-\/\s](\d{4})$/;
    const match = dateString.match(dateRegex);

    if (!match) {
        throw new Error(`Format tanggal tidak valid. Gunakan format: DD-MM-YYYY, DD/MM/YYYY, atau DD MM YYYY. Input: ${dateString}`);
    }

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        throw new Error('Tanggal tidak valid');
    }

    
    const tempDate = new Date(year, month - 1, day);
    if (tempDate.getDate() !== day) {
        throw new Error('Tanggal tidak valid (misalnya: 31 Februari)');
    }

    
    const yyyy = String(year);
    const mm = String(month).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    
    return `${yyyy}-${mm}-${dd}`;
};


export const validateDateRange = (tanggalMulai, tanggalAkhir) => {
    const mulai = new Date(tanggalMulai);
    const akhir = new Date(tanggalAkhir);

    if (mulai > akhir) {
        throw new Error('Tanggal mulai harus lebih kecil atau sama dengan tanggal akhir');
    }

    return { tanggalMulai, tanggalAkhir };
};


