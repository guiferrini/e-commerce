// Entidade, Tabela de Wines
// import { uuid } from 'uuidv4';

class Wine {
  id: number;

  name: string;

  value: number

  description: string;

  image: string;

  constructor(id: number, name: string, value: number, description: string,
    image: string) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.description = description;
    this.image = image;
  }
}

export default Wine;
