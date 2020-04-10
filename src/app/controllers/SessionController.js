import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation fails.' });
    }

    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(400).json({ message: 'User not found.' });
    }

    if (!(await user.checkPassword(req.body.password))) {
      return res.status(400).json({ message: 'Password invalid.' });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      authConfig.secret,
      {
        expiresIn: authConfig.expiresIn,
      }
    );

    return res.json({ token });
  }
}

export default new SessionController();
