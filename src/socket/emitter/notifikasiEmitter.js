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

const emitNotifToPengendara = (payload) => {
    if (!ioInstance) return;

    ioInstance
    .to('role:pengendara')
    .emit('notifikasi:new', payload);
    console.log('Notifikasi Baru: ');
    console.log(JSON.stringify(payload, null, 2));
    
    
};

const emitNotifToPetugas = (payload) => {
    if (!ioInstance) return;

        ioInstance
        .to('role:petugas')
        .emit('notifikasi:new', payload)
        console.log('Notifikasi Baru: ');
        console.log(JSON.stringify(payload, null, 2));
        
    
};

const emitNotifToAllUser = (payload) => {
    if (!ioInstance) return;

    ioInstance
    .emit('notifikasi:new', payload);
    console.log('Notifikasi Baru: ');
    console.log(JSON.stringify(payload, null, 2));
}

export {
    setSocketIo,
    emitNotifikasiPengendara,
    emitNotifToPengendara,
    emitNotifToPetugas,
    emitNotifToAllUser
}