import { uploadPictureToS3, deletePictureFromS3 } from "../../services/upload/profilePicture.js";
import generateProfileFilename from "../../utils/generateFilename.js";
import sequelize from "../../configs/DBConfig.js";

export const updateProfilePhoto = async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'Foto tidak ditemukan'
            });
        }

        const userId = req.user.id_users;

        const profile = await sequelize.models.pengendaraProfile.findOne({
            where: { user_id: userId },
            transaction
        });

        if (!profile) {
            await transaction.rollback();
            return res.status(404).json({
                message: 'Profil pengendara tidak ditemukan'
            });
        }

        const key = generateProfileFilename(userId, req.file.originalname);

        const imageUrl = await uploadPictureToS3({
            key,
            buffer: req.file.buffer,
            mimetype: req.file.mimetype
        });

        const oldImageKey = profile.picture_private_key;

        await profile.update(
            {
                foto_profil: imageUrl,
                picture_private_key: key
            },
            { transaction }
        );
        await transaction.commit();

        if (oldImageKey) {
            await deletePictureFromS3(oldImageKey);
        }

        return res.json({
            message: 'Foto profil berhasil diperbarui',
            data: {
                foto_profil: imageUrl
            }
        })

    } catch (error) {
        await transaction.rollback();
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}