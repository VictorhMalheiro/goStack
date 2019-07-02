import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const {
            email,
            password
        } = req.body;

        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(401).json({
                error: 'User not found'
            });
        }
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({
                error: 'Passoword does not match'
            });
        }

        const {
            id,
            name
        } = user;
        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({
                id
            }, '449c8e5c07fe2958f74fa2ca1f9c54f9', {
                expiresIn: '7d',
            }),
        })
    }
}

export default new SessionController();
