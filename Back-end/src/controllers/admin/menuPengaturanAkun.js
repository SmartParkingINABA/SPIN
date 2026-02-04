import menuPengaturanAkun from "../../services/admin/menuPengaturanAkun.js";

class menuPengaturanController {
    async getProfile(req, res, next) {
        try {
            res.status(200).json(
                await menuPengaturanAkun.getProfile(req.user.id_users)
            );
        } catch (error) {
            console.error(error?.original)
            next(error);
        }
    }

    async updateProfile(req, res, next) {
        try {
            res.status(200).json(
                await menuPengaturanAkun.updateProfile(req.user.id_users, req.body)
            );
        } catch (error) {
            console.error(error?.original)
            next(error)
        }
    }

    async changePassword(req, res, next) {
        try {
            const { old_password, new_password } = req.body;
            res.status(200).json(
                await menuPengaturanAkun.changePassword(
                    req.user.id_users,
                    old_password,
                    new_password
                )
            );
        } catch (error) {
            console.error(error?.original)
            next(error)
        }
    }
}


export default new menuPengaturanController();