import { uuid } from 'uuidv4';
import IAppointmentsRepository from '@modules/appointments/repositories/iAppointmentsRepository';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

// Data transfer object

class AppointmentsRepository implements IAppointmentsRepository {
    private appointments: Appointment[] = [];

    public async findByDate(date: Date): Promise<Appointment | undefined> {

    }

    public async create({
        // eslint-disable-next-line camelcase
        provider_id,
        date,
    }: ICreateAppointmentDTO): Promise<Appointment> {
        const appointment = new Appointment();

        appointment.id = uuid();
        appointment.date = date;
        appointment.provider_id = provider_id;

        this.appointments.push(appointment);

        return appointment;
    }
}
export default AppointmentsRepository;
