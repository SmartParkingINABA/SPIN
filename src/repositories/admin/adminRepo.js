import { adminProfile } from "../../models/Index.js";

const adminRepo = {
    async findUserById(userId) {
        return adminProfile.findOne({
            where: { user_id: userId }
        });
    }
};

export default adminRepo;