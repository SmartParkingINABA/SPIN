import { uploadPictureToS3, deletePictureFromS3 } from "../../services/upload/profilePicture.js";
import generateProfileFilename from "../../utils/generateFilename.js";
import sequelize from "../../configs/DBConfig.js";

export const updateProfilePhoto = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'Foto tidak ditemukan'
            });
        }

        const userId = req.user.id_users;
        const key = generateProfileFilename(userId, req.file.originalname);

        const imageUrl = await uploadPictureToS3({
            key,
            buffer: req.file.buffer,
            mimetype: req.file.mimetype
        });

        const user = await sequelize.models.Users.findByPk(userId);

        if (user?.picture_private_key) {
            await deletePictureFromS3(user.picture_private_key);
        }

        await sequelize.models.Users.update(
            {
                foto_profil: imageUrl,
                picture_private_key: key
            },
            {
                where: { id_users: userId }
            }
        );

        return res.json({
            message: 'Foto profil berhasil diperbarui',
            data : {
                profile_picture: imageUrl,
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}