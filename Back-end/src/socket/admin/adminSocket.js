import statusCache from "../../cache/Status.js";
import menuNotifikasi from "../../services/admin/menuNotifikasi.js";

const adminSocket = (io) => {
    io.on('connection', (socket) => {

        if (socket.user?.role === 'Admin') {
            socket.join('Admin');
        }

        if (socket.user?.role === 'Petugas') {
            socket.join(`petugas:${socket.user.petugasProfile.id_petugas}`)
            socket.join('role:petugas')
        }

        if (socket.user?.role === 'Pengendara') {
            socket.join(`pengendara:${socket.user.pengendaraProfile.id_pengendara}`)
            socket.join('role:pengendara')
        }

        socket.on('dashboard:request', async () => {
            const total = await statusCache.totalPetugasOnline();
            socket.emit('petugas:status:total', total)
        });
        
        socket.on('dashboard:init', async () => {
            try {
                const stats = await menuNotifikasi.getDashboardStats();
                socket.emit('dashboard:stats', stats);
            } catch (error) {
                socket.emit('dashboard:error', {
                    message: 'Gagal memuat data statistik'
                })
            }
        })
    });

};

export default adminSocket;