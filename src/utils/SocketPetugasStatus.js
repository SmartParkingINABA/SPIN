import statusService from "../services/Status.js";


const petugasSocketStatus = (io) => {
    io.on('connection', async (socket) => {
        const userId = socket.user.id;
        console.log('Socket Connected: ', socket.id);
        console.log('Socket User: ', socket.user);
        
        await statusService.setOnlineStatus(userId, socket.id);
        

        io.emit('petugas:status-update', { 
            id: userId,
            status: 'Online'
        });

        console.log(`Petugas ${userId} Online`);
        
        socket.on('heartbeat', async () => {
            await statusService.heartbeat(userId, socket.id)
        });

        socket.on('disconnect', async () => {
            await statusService.setOfflineStatus(userId, socket.id);

            io.emit('petugas:status-update', {
                userId,
                status: 'Offline'
            });
            console.log(`Petugas ${userId} Offline`);
            
            
        });
    });
};

export default petugasSocketStatus;