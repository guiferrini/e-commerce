// Entidade, Tabela de Wines
import { uuid } from 'uuidv4';

class Wine {
  id: string;

  name: string;

  description: string;

  image: string;

  constructor(name: string, description: string,
    image: string) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export default Wine;
