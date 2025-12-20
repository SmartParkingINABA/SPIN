const profileController = {
    async getProfile(req, res) {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json(
                    {
                        message: 'Unauthorized'
                    }
                );
            }
            return res.status(200).json(
                {
                    message: 'Data Profile Berhasil Dimuat',
                    data: {
                        id: user.id,
                        email: user.email,
                        role: user.role,

                        admin: user.adminProfile || null,
                        petugas: user.petugasProfile || null,
                        pengendara: user.pengendaraProfile || null,
                    }
                }
            );

        } catch(err) {
            console.error(err);
            return res.status(500).json(
                {
                    message: 'Terjadi Kesalahan Server Saat Memuat Profile'
                }
            );
        }
    }
};

export default profileController;