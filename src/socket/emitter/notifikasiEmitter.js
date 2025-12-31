let ioInstance = null;

const setSocketIo = (io) => {
    ioInstance = io;
};

const emitNotifikasiPengendara = (pengendaraId, payload) => {
    if (!ioInstance) return;

    ioInstance
    .to(`pengendara:${pengendaraId}`)
    .emit('notifikasi:new', payload);
};

export {
    setSocketIo,
    emitNotifikasiPengendara
}