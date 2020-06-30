import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState{
  token: string;
  user: object;
}

interface SingInCredential {
  email: string;
  password: string;
}

interface AuthContextState { // colocar tds infos q quero repassar...
  user: object;
  singIn(credential: SingInCredential): Promise<void>;
  singOut(): void;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
); //busrlando tipagem p qdo inicializar com objeto vazio

// Propriedade: children - td q o componente receber como filho, 
// repassamos p algum lugar aqui dentro do context provider
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => { // se já tiver registro no localstorage, retorna ele, se não retorna vazio
  const user = localStorage.getItem('@e-commerce:user'); 
  const token = localStorage.getItem('@e-commerce:token');

  if(user && token) {
    return { token, user: JSON.parse(user) }; //transformando em objeto d novo
  }

  return {} as AuthState
  }); 

  // MEtodo de Autenticação
  const singIn = useCallback(async({ email, password }) => {
    const response = await api.post('session', {
      email,
      password
    })

    // console.log(response.data.user[0].name);
    const { user, token } = response.data;

    localStorage.setItem('@e-commerce:user', JSON.stringify(user)); // uma string contendo um JSON
    localStorage.setItem('@e-commerce:token', token);

    setData({ token, user });
  }, [])

  const singOut = useCallback(() => {
    localStorage.removeItem('@e-commerce:user'); 
    localStorage.removeItem('@e-commerce:token');

    setData({} as AuthState);
  }, []);

  return ( 
    <AuthContext.Provider value={{ user: data.user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthContext;