import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default function Authentication(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // validação do token - token vaipelo header da aplicação
  const AuthHeader = request.headers.authorization;

  if (!AuthHeader) {
    throw new Error('JWT token is missing.');
  }

  // token existe. Divido o 'Bearer' do 'token'
  const [, token] = AuthHeader.split(' '); // separa no espaço entre eles
  // decodificando o token
  try {
    const decoding = verify(token, 'bec52fd2d8eebdd4659debc24823a295');

    console.log(decoding);

    return next();
  } catch {
    throw new Error('Invalid JWT token.');
  }
}
