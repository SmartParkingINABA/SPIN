import { v4 as uuidv4 } from 'uuid';

const generateQrCode = () => {
    return uuidv4();
};

export default generateQrCode;