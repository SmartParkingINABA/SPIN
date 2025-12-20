import statusCache from "../../cache/Status.js";

const adminSocket = (io) => {
    io.on('connection', (socket) => {
        socket.join('admin');

        socket.on('dashboard:request', async () => {
            const total = await statusCache.totalPetugasOnline();
            socket.emit('petugas:status:total', total)
        });
    });
};

export default adminSocket;