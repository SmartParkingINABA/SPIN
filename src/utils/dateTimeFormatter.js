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

const formatTimeFormatter = (date = new Date()) => {
    const dateTime = new Date(date);

    if (isNaN(dateTime.getTime())) return '-';

    const waktu = new Intl.DateTimeFormat('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta'
    }).format(date)

    return `${waktu} WIB`;

}


const formatDateFormatter = (input) => {
    if (!input) return null;

    let date;


    if (input instanceof Date) {
        date = input;
    }

    
    else if (typeof input === 'number') {
        date = new Date(input);
    }


    else if (typeof input === 'string') {
        const s = input.trim();


        if (/^\d{8}$/.test(s)) {
            const yearFirst = parseInt(s.slice(0, 4), 10);

            if (yearFirst >= 1900 && yearFirst <= 2100) {
                date = new Date(`${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)}`);
            } else {
                date = new Date(`${s.slice(4,8)}-${s.slice(2,4)}-${s.slice(0,2)}`);
            }
        }

        else if (/^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/.test(s)) {
            const [dd, mm, yyyy] = s.split(/[-\/]/);
            date = new Date(`${yyyy}-${mm}-${dd}`);
        }

        else {
            date = new Date(s);
        }
    }

    if (!date || isNaN(date.getTime())) return null;

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
};


export { formatDateTimeFormatter, formatTimeFormatter, formatDateFormatter};