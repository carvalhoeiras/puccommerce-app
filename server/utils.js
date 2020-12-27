import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    // eslint-disable-next-line no-undef
    process.env.JWT_SECRET || 'jwtjndfakjsdfaow',
    {
      expiresIn: '30d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(
      token,
      // eslint-disable-next-line no-undef
      process.env.JWT_SECRET || 'hfasbdhbfasjdna',
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Token inválido' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'Token não encontrado' });
  }
};