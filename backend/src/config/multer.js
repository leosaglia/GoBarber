import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
    storage: multer.diskStorage({
        // como serão guardados os arquivos de imagens. CDN...
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, res) => {
                if (err) return callback(err);

                return callback(
                    null,
                    res.toString('hex') + extname(file.originalname)
                );
            });
        }
    })
};
