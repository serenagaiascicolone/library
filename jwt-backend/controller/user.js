const { hash } = require('bcryptjs');
const {nanoid} = require('nanoid');
const fs = require('node:fs/promises');
const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const jwtKey = require('../shared/key');
const { NotFoundError } = require('../model/errors');

module.exports.signup = async (req, res, next) => {
  const data = req.body;
  let errors = {};

  if (!data.email && !data.email.includes('@')) {
    errors.email = 'Email not valid.';
  } else {
    try {
      const registeredUser = await checkEmail(data.email);
      if (registeredUser) {
        errors.email = 'Email already exists.';
      }
    } catch (error) {}
  }

  if (!data.password) {
    errors.password = 'Password not valid.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Cannot signup.',
      errors,
    });
  }

  try {
    const newUser = await addUser(data);
    const token = sign({ email: newUser.email }, jwtKey.KEY, { expiresIn: '1h' });
    res
      .status(201)
      .json({
        message: 'User created!', 
        user: newUser,
        token
      });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let existingUser;
  try {
    existingUser = await checkEmail(email);
  } catch (error) {
    return res.status(401).json({ message: 'Cannot login.' });
  }

  const pwIsValid = await compare(password, existingUser.password);
  if (!pwIsValid) {
    return res.status(422).json({
      message: 'Wrong credentials.',
      errors: { credentials: 'Check your email or password.' },
    });
  }
console.log(email)
  const token = sign({ email }, jwtKey.KEY, { expiresIn: '1h' });
  res.json({ token });
}



async function addUser(data) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(1000);
  const usersFile = await fs.readFile('./mock-db/users.json', 'utf8');
  const usersData = JSON.parse(usersFile);

  const userId = nanoid();
  const hashedPw = await hash(data.password, 12);
  if (!usersData.users) {
    usersData.users = [];
  }
  usersData.users.push({ ...data, password: hashedPw, id: userId });
  await fs.writeFile('./mock-db/users.json', JSON.stringify(usersData));
  return { id: userId, email: data.email };
}

async function checkEmail(email) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(1000);

  const usersFile = await fs.readFile('./mock-db/users.json', 'utf8');
  const usersData = JSON.parse(usersFile);

  if (!usersData.users || usersData.users.length === 0) {
    throw new NotFoundError('No users in the database.');
  }

  const user = usersData.users.find((ev) => ev.email === email);
  if (!user) {
    throw new NotFoundError('No user with email: ' + email);
  }

  return user;
}
