import { format } from "@fast-csv/format";

const exportDataHistoryParkirToCsv = (data = []) => {
    return new Promise((resolve, reject) => {
        let csvOutput = '';

        const csvStream = format({
            headers: [
                'Plat Nomor',
                'Tanggal Masuk',
                'Jam Masuk',
                'Jam Keluar',
                'Durasi',
                'Status'
            ],
            writeHeaders: true
        });
        csvStream
        .on('error', err => reject(err))
        .on('data', chunk => {
            csvOutput += chunk.toString();
        })
        .on('end', () => resolve(csvOutput));

        data.forEach(item => {
            csvStream.write({
                'Plat Nomor': item.plat_nomor,
                'Tanggal Masuk': item.tanggal_masuk,
                'Jam Masuk': item.jam_masuk,
                'Jam Keluar': item.jam_keluar,
                'Durasi': item.durasi,
                'Status': item.status
            });
        });
        csvStream.end();
    });

};


export default exportDataHistoryParkirToCsv;