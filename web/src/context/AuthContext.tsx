import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SingInCredential {
  email: string;
  password: string;
}

interface AuthContextState { // colocar tds infos q quero repassar...
  name: string;
  singIn(credential: SingInCredential): Promise<void>;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
); //busrlando tipagem p qdo inicializar com objeto vazio

// Propriedade: children - td q o componente receber como filho, 
// repassamos p algum lugar aqui dentro do context provider
export const AuthProvider: React.FC = ({ children }) => {
  // MEtodo de Autenticação
  const singIn = useCallback(async({ email, password }) => {
    const response = await api.post('session', {
      email,
      password
    })
  }, [])

  return ( 
    <AuthContext.Provider value={{ name: 'guilherme', singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthContext;