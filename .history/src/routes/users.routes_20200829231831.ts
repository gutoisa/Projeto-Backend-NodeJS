import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
// POST http://localhost:3333/appointments

usersRouter.post('/', async (request, response) => {
    try {
        // algumas regras de negocio, email nao pode ser duplicado, password deve ser encriptografada, não posso simplesmente armazena-la, então se tem regra de negocio eu preciso criar um service
        const { name, email, password } = request.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            email,
            password,
        });
        delete user.password;
        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;
