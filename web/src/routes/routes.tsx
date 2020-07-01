import React, { useContext } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

interface RoutePro extends RouteProps { // extendendo as propriedade q um aRoutes já tem
  isPrivate?: boolean;
  component: React.ComponentType; //Sobre escreve component={nome aqui}
} 

const RoutePrivate: React.FC<RoutePro> = ({ 
  isPrivate = false, 
  component: Component, 
  ...rest 
}) => {
  const { user } = useContext(AuthContext)

  return (
    <Route 
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? ( //se rota privada e 'user' logado, segue
          <Component />
        ) : ( // se não direciona ele...
          <Redirect to={{ 
            pathname: isPrivate ? '/' : '/userpage',
            state: { from: location } // garente q eu n perca meu historico de acesso de rotas
          }} />
        )
      }}
    />
  );
};

export default RoutePrivate;