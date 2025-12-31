const pengendaraSocket = (io) => {
    io.on('connection', (socket) => {
        if (!socket.user?.pengendaraProfile) return;

        const pengendaraId = socket.user.pengendaraProfile.id_pengendara;
        const room = `pengendara:${pengendaraId}`

        socket.join(room);

        console.log(`Pengendara ${pengendaraId} join ${room}`);
        
    });
}

export default pengendaraSocket;