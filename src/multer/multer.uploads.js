import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';


export const uploadSingleFile = (fieldName , folderName) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `uploads/${folderName}`)
        },
        filename: (req, file, cb) => {
            cb(null, uuidv4() + '_' + file.originalname)
        }
    })

    function fileFilter(req, file, cb) {
        if (file.mimetype.startsWith('image')) {
            cb(null, true)
        } else {
            cb(new Error('image only'), false)
        }
    }

    const upload = multer({ storage, fileFilter })
    return upload.single(fieldName)
}

