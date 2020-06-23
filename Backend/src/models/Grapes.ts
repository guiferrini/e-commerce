// Entidade, Tabela de Grapes
// import { uuid } from 'uuidv4';

class Wine {
  id: number;

  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default Wine;
