import { ValidationError } from 'yup'; // 'tipando' o erro de acordo com Yup - ValidationError

interface Errors{
  [keyOfObject: string]: string; // keyOfObject - generico - email, password, ...
}

export default function validationError(err: ValidationError): Errors {
  const checkError: Errors = {}; // inicia vazia

  err.inner.forEach((error) => { // percorro os erros dentro do inner (é Array)
    checkError[error.path] = error.message;
  });

  return checkError;
}
