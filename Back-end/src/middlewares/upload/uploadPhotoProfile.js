import multer from "multer";
import path from 'path';
import fs from 'fs';

const uploadDir = 'public/uploads/profile';

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {recursive: true});
};

const storage = multer.diskStorage({
    destination: (_, __, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const text = path.extname(file.originalname);
        cb(null, `profile-${req.user.id_users}-${Date.now()}${text}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowed.includes(file.mimetype)) {
        return cb(new Error('File harus berformat JPG/PNG'));
    }
    cb(null, true);
};

export default multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }
});