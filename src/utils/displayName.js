const getDisplayName = (user) => {
    const role = user.role.nama_role.toLowerCase();

    if (role === 'admin') {
        return user.adminProfile?.nama_admin || 'Admin';
    } else if (role === 'petugas') {
        return user.petugasProfile?.nama_petugas || 'Petugas';
    } else if (role === 'pengendara') {
        return user.pengendaraProfile?.nama_pengendara || 'Pengendara';
    }
};

export default getDisplayName;