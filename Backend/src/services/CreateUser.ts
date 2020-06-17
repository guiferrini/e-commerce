interface PropsUser {
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
  id: string;
}

function createUser({
  city, id, complement, date, email, name, number, password, street, uf, whatsapp,
}: PropsUser) {
  const user = {
    city, id, complement, date, email, name, number, password, street, uf, whatsapp,
  };
  return user;
}

export default createUser;
