import { v4 as uuid } from 'uuid';
import bcyrpt from 'bcryptjs';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Shobit',
    lastName: 'Deshwal',
    email: 'shobit@test.com',
    userName: 'shobit1337',
    password: bcyrpt.hashSync('test', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Test',
    lastName: 'One',
    email: 'test1@test.com',
    userName: 'test1',
    password: bcyrpt.hashSync('test1', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Test',
    lastName: 'Two',
    email: 'test2@test.com',
    userName: 'test2',
    password: bcyrpt.hashSync('test2', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
