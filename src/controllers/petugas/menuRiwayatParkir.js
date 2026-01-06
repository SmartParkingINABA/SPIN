import menuRiwayatParkir from "../../services/petugas/menuRiwayatParkir.js";

class menuRiwayatParkirController {
    async getRiwayatParkir(req, res, next) {
        try {
            const result = await menuRiwayatParkir.getRiwayatParkir(req.query);
            res.status(200).json(result)
        } catch (error) {
            next(error);
        }
    };
};

export default new menuRiwayatParkirController();