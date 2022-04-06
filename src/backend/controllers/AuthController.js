import { v4 as uuid } from 'uuid';
import { Response } from 'miragejs';
import { formatDate, requiresAuth } from '../utils/authUtils';
import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, email, password}
 * */

export const signupHandler = function (schema, request) {
  const { email, password, ...rest } = JSON.parse(request.requestBody);
  try {
    // check if email already exists
    const foundUser = schema.users.findBy({ email });
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ['Unprocessable Entity. Email Already Exists.'],
        }
      );
    }
    const _id = uuid();
    const encryptedPassword = bcrypt.hashSync(password, 5);
    const newUser = {
      _id,
      email,
      password: encryptedPassword,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      ...rest,
      cart: [],
      wishlist: [],
    };
    const createdUser = schema.users.create(newUser);
    const encodedToken = jwt.sign(
      { _id, email },
      process.env.REACT_APP_JWT_SECRET
    );
    return new Response(201, {}, { createdUser, encodedToken });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {email, password}
 * */

export const loginHandler = function (schema, request) {
  const { email, password } = JSON.parse(request.requestBody);
  try {
    const foundUser = schema.users.findBy({ email });
    if (!foundUser) {
      return new Response(
        404,
        {},
        { errors: ['The email you entered is not Registered. Not Found error'] }
      );
    }
    if (bcrypt.compareSync(password, foundUser.password)) {
      const encodedToken = jwt.sign(
        { _id: foundUser._id, email },
        process.env.REACT_APP_JWT_SECRET
      );
      foundUser.password = undefined;
      return new Response(200, {}, { foundUser, encodedToken });
    }
    new Response(
      401,
      {},
      {
        errors: [
          'The credentials you entered are invalid. Unauthorized access error.',
        ],
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user data updation.
 * send POST Request at /api/auth/update
 * body contains {firstName, lastName, displayName, country, email, displayImage, oldPassword, newPassword}
 * */

export const updateUserHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);

  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ['The email you entered is not Registered. Not Found error'],
        }
      );
    }
    const foundUser = schema.users.findBy({ _id: userId });
    const {
      firstName,
      lastName,
      displayName,
      country,
      email,
      displayImage,
      oldPassword,
      newPassword,
    } = JSON.parse(request.requestBody);

    if (bcrypt.compareSync(oldPassword, foundUser.password)) {
      this.db.users.update(
        { _id: userId },
        {
          firstName,
          lastName,
          displayName,
          country,
          email,
          displayImage,
          password: bcrypt.hashSync(newPassword ? newPassword : oldPassword, 5),
        }
      );
      const updatedUser = schema.users.findBy({ _id: userId });
      const encodedToken = jwt.sign(
        { _id: updatedUser._id, email },
        process.env.REACT_APP_JWT_SECRET
      );
      updatedUser.password = undefined;
      return new Response(200, {}, { updatedUser, encodedToken });
    } else {
      return new Response(
        401,
        {},
        {
          errors: [
            'The credentials you entered are invalid. Unauthorized access error.',
          ],
        }
      );
    }
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
