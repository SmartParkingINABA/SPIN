import menuMainOverview from "../../services/petugas/menuMainOverview.js";

class menuMainOverviewController {
    async getMainOverview(req, res, next) {
        try {
            const petugasId = req.user.id_users;
            const result = await menuMainOverview.getMainOverview(petugasId);
            res.status(200).json({
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
}

export default new menuMainOverviewController();