// Entidade, Tabela de User
import { uuid } from 'uuidv4';

class User {
  id: string;

  name: string;

  email: string;

  password: string;

  whatsapp: number;

  date: Date;

  street: string;

  number: number;

  complement: string;

  uf: string;

  city: string;

  constructor(name: string, email: string,
    password: string, whatsapp: number, date: Date,
    street: string, number: number, complement: string,
    uf: string, city: string) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
    this.whatsapp = whatsapp;
    this.date = date;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.uf = uf;
    this.city = city;
  }
}

export default User;
