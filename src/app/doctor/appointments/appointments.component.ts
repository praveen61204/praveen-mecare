import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentComponent {
  doctorName: string = 'Praveenkumar';
  activeLink: string = 'appointments';
  showNotifications: boolean = false;
  notifications: any[] = [
    { message: 'New appointment scheduled', time: '10:30 AM' },
    { message: 'Appointment updated', time: '09:15 AM' },
    { message: 'Reminder: Upcoming appointment', time: '08:00 AM' },
  ];

  appointments: any[] = [
    { id: 'A1', patientName: 'Robert Wilson', mobile: '9876543210', timing: '10:00 AM - 10:30 AM', doctor: 'Dr. Stuart', cause: 'Routine Checkup', confirmed: false },
    { id: 'A2', patientName: 'Rose Robert', mobile: '8765432109', timing: '11:00 AM - 11:30 AM', doctor: 'Dr. Michael', cause: 'Follow-up', confirmed: false },
    { id: 'A3', patientName: 'Willie Jennings', mobile: '(302) 555-0107', timing: '02:00 PM - 02:30 PM', doctor: 'Dr. Praveenkumar', cause: 'Consultation', confirmed: false },
  ];

  selectedAppointment: any = null;

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    if (link === 'dashboard') this.router.navigate(['/doctor']);
    else if (link === 'patients') this.router.navigate(['/doctor/patients']);
    else if (link === 'appointments') this.router.navigate(['/doctor/appointments']);
    else if (link === 'prescriptions') this.router.navigate(['/doctor/prescriptions']);
  }

  showAppointmentDetails(appointment: any) {
    this.selectedAppointment = { ...appointment };
  }

  closeAppointmentDetails() {
    this.selectedAppointment = null;
  }

  confirmBooking() {
    if (this.selectedAppointment) {
      this.selectedAppointment.confirmed = true;
      alert(`Appointment ${this.selectedAppointment.id} confirmed successfully!`);
      this.closeAppointmentDetails();
    }
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}