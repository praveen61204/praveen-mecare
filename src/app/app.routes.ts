import { Routes } from '@angular/router';
import { DashboardComponent } from './doctor/dashboard/dashboard.component';
import { AppointmentComponent } from './doctor/appointments/appointments.component';
import { PatientsComponent } from './doctor/patients/patients.component';
import { PrescriptionComponent } from './doctor/prescriptions/prescriptions.component';

export const routes: Routes = [
  {
    path: 'doctor', // Parent route
    children: [
      { path: '', component: DashboardComponent }, // Default route for /doctor,
      { path: 'patients', component: PatientsComponent },
      { path: 'appointments', component: AppointmentComponent },
      { path: 'prescriptions', component:PrescriptionComponent},
      // Add more routes as needed (e.g., prescriptions, profile)
    ],
  },
  // Optionally, add a redirect for the root path
  { path: '', redirectTo: '/doctor', pathMatch: 'full' },
];