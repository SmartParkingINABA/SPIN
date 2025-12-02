import dashboardAdminServices from "../services/AdminDashboard.js";

const dashboardAdminControllers = {
    getOverview: async (req, res, next) => {
        try {
            const data = await dashboardAdminServices.getOverview();
            return res.json({ data })
        } catch(err) {
            console.error(err);
            return res.status(500).json(
                {
                    message: 'Internal Server Error'
                }
            );
            
        }
    }
};

export default dashboardAdminControllers;