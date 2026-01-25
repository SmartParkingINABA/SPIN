import menuProfilPetugas from "../../services/petugas/menuProfilPetugas.js";

class menuProfilPetugasController {
    async getProfilPetugas(req, res, next) {
        try {
            const userId = req.user.id_users;
            const data = await menuProfilPetugas.getProfilePetugas(userId);
            res.status(200).json({
                message: 'Berhasil mengambil data profil',
                data
            })
        } catch (error) {
            next(error)
        }
    }

    async updateProfilPetugas(req, res, next) {
        try {
            const userId = req.user.id_users;
            await menuProfilPetugas.updateProfilPetugas(userId, req.body);

            res.status(200).json({
                message: 'Data profil berhasil diperbarui'
            });
        } catch (error) {
            next(error)
        }
    }
}


export default new menuProfilPetugasController();