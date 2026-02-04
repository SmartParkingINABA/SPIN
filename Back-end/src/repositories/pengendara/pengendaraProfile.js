import { pengendaraProfile } from "../../models/Index.js";

class pengendaraProfileRepo {
    findByUserId(user_id) {
        return pengendaraProfile.findOne({
            where: {user_id}
        })
    }
}

export default new pengendaraProfileRepo();