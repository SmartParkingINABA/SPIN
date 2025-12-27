import menuPengaturanAkun from "../../services/pengendara/menuPengaturanAkun.js";

class menuPengaturanAkunController {
    getProfile = async (req, res, next) => {
        try {
            res.json(await menuPengaturanAkun.getProfile(req.user.id_users));
        } catch (error) {
            next(error);
        }
    };

    updateProfile = async (req, res, next) => {
        try {
            res.json(await menuPengaturanAkun.updateProfile(req.user.id_users, req.body));
        } catch (error) {
            next(error)
        }
    };

    uploadPhoto = async (req, res, next) => {
        try {
            res.json(await menuPengaturanAkun.uploadPhoto(req.user.id_users, req.file))
        } catch (error) {
            next(error)
        }
    };

    changePassword = async (req, res, next) => {
        try {
            const { old_password, new_password } = req.body;
            res.json(await menuPengaturanAkun.changePassword(
                req.user.id_users,
                old_password,
                new_password
            ));
        } catch (error) {
            next(error)
        }
    }

};

export default new menuPengaturanAkunController();