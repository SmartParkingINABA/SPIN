const pengendaraSocket = (io) => {
    io.on('connection', (socket) => {
        console.log("Rooms: ", socket.rooms);
        
        if (socket.user?.role !== 'Pengendara') return;

        const pengendaraId = socket.user.pengendaraProfile.id_pengendara;
        const room = `pengendara:${pengendaraId}`

        socket.join(room);

        console.log(`Pengendara ${pengendaraId} join ${room}`);
        console.log(`[Socket JOIN] Pengendara ${pengendaraId} join ${room}`);
    });
}

export default pengendaraSocket;