
import FakeUserRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

describe('CreateUser', () =>{
    it('should be able to create a new user', async () =>{
        const fakeUserRepository = new FakeUserRepository();
        const CreateUser = new CreateUserService(
            fakeUserRepository,

            );

            const user = await CreateUser.execute({
               name: 'John Doe',
               email: 'johndoe@example.com',
               password: '123456',
            });
            expect(user).toHaveProperty('id');
    });

});
