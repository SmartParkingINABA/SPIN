import dashboardAdminServices from "../../services/admin/dashboardMainOverview.js";

const dashboardMainOverviewControllers = {
    async getOverview(req, res) {
        try {
            const overview = await dashboardAdminServices.getOverview();
            return res.status(200).json(
                {
                    message: overview
                }
            );
        } catch (err) {
            console.log('Dashboard Main Overview Error: ', err);
            return res.status(500).json(
                {
                    message: 'Internal Server Error!'
                }
            )
        }
    }
};

export default dashboardMainOverviewControllers;