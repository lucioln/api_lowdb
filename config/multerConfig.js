const multer = require('multer');
const path = require('path');
const shortid = require('shortid');

// Configuração do multer para salvar arquivos localmente
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Diretório onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${shortid.generate()}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
