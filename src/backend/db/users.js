import bcyrpt from 'bcryptjs';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: '115da28e-3cb4-40e2-b6e8-5f791b33b932',
    firstName: 'Shobit',
    lastName: 'Deshwal',
    email: 'shobit@test.com',
    displayName: 'Shobhit',
    displayImage: 'https://i.ibb.co/WGJC2rt/logo.png',
    country: 'India',
    password: bcyrpt.hashSync('test', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    cart: [],
    wishlist: [],
    address: [],
  },
  {
    _id: '06fa2f68-0b0a-469b-bcc3-e024a949995e',
    firstName: 'Test',
    lastName: 'Test',
    email: 'test@test.com',
    displayName: 'testUser',
    displayImage: 'https://i.ibb.co/WGJC2rt/logo.png',
    country: 'India',
    password: bcyrpt.hashSync('test', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    cart: [],
    wishlist: [],
    address: [
      {
        _id: 'a8e4ec5b-ce2e-4b44-82cf-1868d0c1810e',
        city: 'Banglore',
        country: 'India',
        createdAt: '2022-04-17T21:59:13+05:30',
        name: 'Ram Aggarwal',
        phone: '+91-9876543210',
        pin: '25890',
        state: 'Karnataka',
        street: 'xyz, ramdom street',
        updatedAt: '2022-04-17T21:59:13+05:30',
      },
    ],
  },
  {
    _id: '9b21d331-f466-4b3e-863e-f6eb3954fa55',
    firstName: 'Test',
    lastName: 'One',
    email: 'test1@test.com',
    displayName: 'testUserTwo',
    displayImage: 'https://i.ibb.co/WGJC2rt/logo.png',
    country: 'USA',
    password: bcyrpt.hashSync('test', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    cart: [],
    wishlist: [],
    address: [],
  },
];
