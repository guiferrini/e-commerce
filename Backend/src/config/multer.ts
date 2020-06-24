import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    // 1recebo as infos da requisição do frontend
    // 2td do arquivo: nome, extensão, ...
    // 3 é uma função q eu chamo qdo terminei de processar o filename
    filename(request, file, callback) { // crio o filename por segurança p n duplicar infos e não misturar infos entre usuarios
      const hash = crypto.randomBytes(6).toString('hex'); // converte 6 bites e p uma string hexadecimal

      const filename = `${hash}-${file.originalname}`;

      // 1° um erro (passo null pq neste caso é mto dificil dar erro), 2° nome do arquivo
      callback(null, filename);
    },
  }),
};
