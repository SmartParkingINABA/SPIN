let ioInstance = null;

const setSocketIo = (io) => {
    ioInstance = io;
};

const emitNotifikasiPengendara = (pengendaraId, payload) => {
    if (!ioInstance) return;

    ioInstance
    .to(`pengendara:${pengendaraId}`)
    .emit('notifikasi:new', payload);
    console.log('Notifikasi Baru: ');
    console.log(JSON.stringify(payload, null, 2));
    
    
};

export {
    setSocketIo,
    emitNotifikasiPengendara
}