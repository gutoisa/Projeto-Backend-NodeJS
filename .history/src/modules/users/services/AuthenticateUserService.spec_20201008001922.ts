
import AppError from '@shared/errors/AppError';
import FakeUserRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import CreateUserService from './CreateUserService';


describe('AuthenticateUser', () =>{
    it('should be able to authenticate', async () =>{
        const fakeUserRepository = new FakeUserRepository();
        const createUser = new CreateUserService(fakeUserRepository);
        const authenticateUser = new AuthenticateUserService(
            fakeUserRepository,

            );

            await createUser.execute({
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: '123456',
            });

            const response = await authenticateUser.execute({
               email: 'johndoe@example.com',
               password: '123456',
            });
            expect(response).toHaveProperty('token');
        });
});
