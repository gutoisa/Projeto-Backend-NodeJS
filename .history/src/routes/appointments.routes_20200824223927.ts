import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();
// POST http://localhost:3333/appointments

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const parsedDate = startOfHour(parseISO(date));
    const findAppointmenteInSameDate = appointments.find(appointment =>
        isEqual(parsedDate, appointment.date),
    );
    const appointment = {
        id: uuid(),
        provider,
        date: parsedDate,
    };
    appointments.push(appointment);
    return response.json(appointment);
});

export default appointmentsRouter;
