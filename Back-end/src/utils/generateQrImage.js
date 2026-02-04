import QrCode from 'qrcode';

const generateQrImage = async (text, options = {}) => {
    if (options.raw) {
        return QrCode.toBuffer(text, {
            type: 'png',
            errorCorrectionLevel: 'H',
            width: 400
        });
    }
    return QrCode.toDataURL(text, {
        errorCorrectionLevel: 'H',
        width: 400
    });
}

export default generateQrImage;