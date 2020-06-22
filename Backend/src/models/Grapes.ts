// Entidade, Tabela de Grapes
import { uuid } from 'uuidv4';

class Wine {
  id: string;

  name: string;

  constructor(name: string) {
    this.id = uuid();
    this.name = name;
  }
}

export default Wine;
