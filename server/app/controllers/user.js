const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const db = require('../modules/db/models');
const BaseController = require("./base");
const authConfig = require('../config/constants')['authConfig'];

class UserController extends BaseController {
    constructor() {
        super('user');
    }
    create = async (req, res) => {
        const user = req.body;

        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            user.password = hashedPassword;
            const createdUser = await db.User.create(user);

            const accessToken = jwt.sign({ uid: createdUser.id }, authConfig.jwtSecret, {
                expiresIn: authConfig.jwtExpire,
            });
            res.cookie('access_token', accessToken, {
                secure: true,
                httpOnly: true,
                path: '/',
            });
            delete createdUser.dataValues.password;
            this.responseHandler.successResponse(createdUser, res);
        } catch (err) {
            this.responseHandler.errorResponse(err, res);
        }
    };

    getById = async (req, res) => {
        const id = req.params.id;
        try {
            const user = await db.User.findByPk(id);
            if (user) {
                return this.responseHandler.successResponse(user, res);
            }
            throw this.responseHandler.getNotFoundError(`User with id <${id}> not found.`);
        } catch (err) {
            this.responseHandler.errorResponse(err, res);
        }
    };

    getProfile = async (req, res) => {
        return this.responseHandler.successResponse({ user: req.user }, res);
    };

    login = async (req, res) => {
        const user = await db.User.scope('includePassword').findOne({
            where: { email: req.body.email },
        });
        try {
            if (user !== null && (await bcrypt.compare(req.body.password, user.password))) {
                const id = user.id;
                const accessToken = jwt.sign({ uid: id }, authConfig.jwtSecret, {
                    expiresIn: authConfig.jwtExpire,
                });
                res.cookie('access_token', accessToken, {
                    secure: true,
                    httpOnly: true,
                    path: '/',
                });
                return this.responseHandler.successResponse({ message: 'Logged in successfully' }, res);
            }
            throw this.responseHandler.getBadRequestError('Invalid email or password');
        } catch (err) {
            this.responseHandler.errorResponse(err, res);
        }
    };

    logout = async (req, res) => {
        await res.clearCookie('access_token', { path: '/' });
        return this.responseHandler.successResponse({ message: 'Logged out successfully' }, res, 204);
    };

    delete = async (req, res) => {
        const id = req.user.id;
        try {
            const numberOfDeletedUsers = await db.User.destroy({
                where: { id },
            });
            await res.clearCookie('access_token', { path: '/' });
            if (numberOfDeletedUsers) {
                return this.responseHandler.successResponse({ deleted: numberOfDeletedUsers }, res);
            }
            throw this.responseHandler.getNotFoundError(`User with id <${id}> not found.`);
        } catch (err) {
            this.responseHandler.errorResponse(err, res);
        }
    };
}

module.exports = new UserController();