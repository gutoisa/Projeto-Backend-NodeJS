import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

// POST http://localhost:3333/appointments
appointmentsRouter.use(ensureAuthenticated);
/* appointmentsRouter.get('/', async (request, response) => {
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
}); */
appointmentsRouter.post('/', async (request, response) => {
    // eslint-disable-next-line camelcase
    const { provider_id, date } = request.body;
    const parsedDate = parseISO(date); // transformando data
    const appointmentsRepository = new AppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
        appointmentsRepository,
    );
    const appointment = await createAppointment.execute({
        date: parsedDate,
        provider_id,
    });
    return response.json(appointment);
});

export default appointmentsRouter;
