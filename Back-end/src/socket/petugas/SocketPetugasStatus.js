import statusCache from "../../cache/Status.js";


const petugasSocketStatus = (io) => {
    io.on('connection', async (socket) => {

        if (socket.user?.role !== 'Petugas') return;

        const petugasId = socket.user.petugasProfile.id_petugas;

        console.log('Petugas Socket Connected: ', socket.id);
        console.log(`Petugas ${petugasId} Online`);
        
        await statusCache.setOnline(petugasId, socket.id);
        
        io.to('admin').emit('petugas:online:update');

        socket.on('heartbeat', () => {
            statusCache.heartbeat(petugasId)
        });

        socket.on('disconnect', async () => {
            await statusCache.removeSocket(petugasId, socket.id);

            io.to('admin').emit('petugas:online:update')
            console.log(`Petugas ${petugasId} Offline`);
            
            
        });
    });
};

export default petugasSocketStatus;