import { factory, primaryKey } from '@mswjs/data';

export const mockUsers = [
  {
    "email": "gyty@mailinator.comwwwww",
    "first_name": "Britanni",
    "last_name": "Bass",
    "address": "Fuga Suscipit volup",
    "phone_number": "9299299292",
    "created_at": 1681760766215,
    "id": 1
  },
  {
    "email": "jotuya2@gmail.com",
    "first_name": "Justice",
    "last_name": "Otuya",
    "address": "2 Tunde Adesokan Cl",
    "phone_number": "8130764107",
    "created_at": 1681905010609,
    "id": 2
  },
  {
    "email": "jotuya2@gmail.com",
    "first_name": "Justice",
    "last_name": "Otuya",
    "address": "2 Tunde Adesokan Cl",
    "phone_number": "8130764107",
    "created_at": 1681905143404,
    "id": 4
  },
  {
    "email": "jotuya2@gmail.com",
    "first_name": "Justice",
    "last_name": "Otuya",
    "address": "2 Tunde Adesokan Cl",
    "phone_number": "8130764107",
    "created_at": 1681905143404,
    "id": 5
  },
  {
    "email": "jotuya2@gmail.com",
    "first_name": "Justice",
    "last_name": "Otuya",
    "address": "2 Tunde Adesokan Cl",
    "phone_number": "8130764107",
    "created_at": 1681905143404,
    "id": 6
  },
  {
    "email": "jotuya2@gmail.com",
    "first_name": "Justice",
    "last_name": "Otuya",
    "address": "2 Tunde Adesokan Cl",
    "phone_number": "8130764107",
    "created_at": 1681905143404,
    "id": 7
  }
]

// Create a "db" with an user model and some defaults
export const db = factory({
  user: {
    id: primaryKey(Number),
    first_name: () => 'Firstname',
    last_name: () => 'email@email.com',
     "email": () => "jotuya2@gmail.com",
    "address": () => "2 Tunde Adesokan Cl",
    "phone_number": () => "8130764107",
  },
});

// create 3 users
mockUsers.forEach((user) => db.user.create(user));
