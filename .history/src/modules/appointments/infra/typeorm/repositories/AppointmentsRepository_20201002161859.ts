import { EntityRepository, Repository } from 'typeorm';
import IAppointmentsRepository from '@modules/appointments/repositories/iAppointmentsRepository';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';


// Data transfer object

@EntityRepository(Appointment)
class AppointmentsRepository
    extends Repository<Appointment>
    implements IAppointmentsRepository {
    public async findByDate(date: Date): Promise<Appointment | undefined> {
        const findAppointment = await this.findOne({
            where: { date },
        });
        return findAppointment;
    }
}
export default AppointmentsRepository;
