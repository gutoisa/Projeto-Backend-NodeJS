import Appointment from '../models/Appointment';

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public create(provider: string, date: Date){

    }
}
