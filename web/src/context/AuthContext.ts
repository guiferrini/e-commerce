import React from 'react';
import { createContext } from 'react';

interface AuthContextState { // colocar tds infos q quero repassar...
  name: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState); //busrlando tipagem p qdo inicializar com objeto vazio

export default AuthContext;