import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();
const usersRepository = new UsersRepository();

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    const authenticateUserService = new AuthenticateUserService(
        usersRepository,
    );
    const { user, token } = await authenticateUserService.execute({
        email,
        password,
    });

    delete user.password;
    return response.json({ user, token });
});

export default sessionsRouter;
