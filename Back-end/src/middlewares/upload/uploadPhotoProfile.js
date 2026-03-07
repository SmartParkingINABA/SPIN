import multer from "multer";

const storage = multer.memoryStorage();
const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
const fileFilter = (req, file, cb) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(new Error("File harus berformat JPEG, JPG, dan PNG!"), false);
    }

    cb(null, true);
};

const uploadFotoProfile = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }
});

export default uploadFotoProfile;