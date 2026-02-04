import menuKendaraanParkir from "../../services/petugas/menuKendaraanParkir.js";

class menuKendaraanParkirController {
    async list(req, res, next) {
        try {
            const result = await menuKendaraanParkir.getKendaraanParkir(req.query);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new menuKendaraanParkirController();