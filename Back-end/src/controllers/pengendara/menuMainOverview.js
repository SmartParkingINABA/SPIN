import menuMainOverview from "../../services/pengendara/menuMainOverview.js";

class mainOverviewController {
    async mainOverview(req, res, next) {
        try {
            const pengendaraId = req.user.pengendaraProfile.id_pengendara;
            const result = await menuMainOverview.getMainOverview(pengendaraId, req.query);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
};

export default new mainOverviewController();