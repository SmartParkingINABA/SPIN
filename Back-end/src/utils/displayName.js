const getDisplayName = (user, email) => {
    const role = user.role.nama_role.toLowerCase();

    if (role === 'admin') {
        return user.adminProfile?.nama_admin || email;
    } else if (role === 'petugas') {
        return user.petugasProfile?.nama_petugas || email;
    } else if (role === 'pengendara') {
        return user.pengendaraProfile?.nama_pengendara || email;
    }
};

export default getDisplayName;