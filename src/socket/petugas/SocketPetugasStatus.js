import statusCache from "../../cache/Status.js";


const petugasSocketStatus = (io) => {
    io.on('connection', async (socket) => {
        const userId = socket.user.id;
        console.log('Socket Connected: ', socket.id);
        console.log('Socket User: ', socket.user);
        
        statusCache.setOnline(userId, socket.id);
        
        io.to('admin').emit('petugas:online:update');

        console.log(`Petugas ${userId} Online`);
        
        socket.on('heartbeat', () => {
            statusCache.heartbeat(userId)
        });

        socket.on('disconnect', async () => {
            await statusCache.removeSocket(userId, socket.id);

            io.to('admin').emit('petugas:online:update')
            console.log(`Petugas ${userId} Offline`);
            
            
        });
    });
};

export default petugasSocketStatus;