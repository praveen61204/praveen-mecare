import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent {
  doctorName: string = 'John Wills';
  activeLink: string = 'patients';
  showNotifications: boolean = false;
  patients: any[] = [
    { 
      id: 'RW', 
      name: 'Robert Wilson', 
      age: '37 years old', 
      gender: 'Male', 
      reason: 'Headache', 
      waitingTime: '90 min', 
      staff: 'Michael Dowry', 
      room: '105B',
      bp: '120/80 mmHg',
      heartRate: '72 bpm',
      phone: '9876543210',
      email: 'robert.wilson@email.com',
      address: '8309 Barby Hill',
      particularSickness: 'Heart Disease, Hepatitis',
      allergic: 'Medicine Allergic',
      occlusi: 'Normal Bite',
      torusPalatinus: 'No',
      diastema: 'Yes (tooth number 21)',
      anomalousTeeth: 'No',
      photo: 'https://via.placeholder.com/100',
      lastUpdateMedical: '12 June 2022',
      lastUpdateOral: '12 July 2022'
    },
    { 
      id: 'RR', 
      name: 'Rose Robert', 
      age: '47 years old', 
      gender: 'Female', 
      reason: 'Wrist Fracture Pain', 
      waitingTime: '20 min', 
      staff: 'Lita McLoin Nurse', 
      room: '102C',
      bp: '130/85 mmHg',
      heartRate: '68 bpm',
      phone: '8765432109',
      email: 'rose.robert@email.com',
      address: '1234 Rose Lane',
      particularSickness: 'Asthma',
      allergic: 'None',
      occlusi: 'Normal Bite',
      torusPalatinus: 'No',
      diastema: 'No',
      anomalousTeeth: 'No',
      photo: 'https://via.placeholder.com/100',
      lastUpdateMedical: '10 June 2022',
      lastUpdateOral: '15 July 2022'
    },
    { 
      id: 'RS', 
      name: 'Willie Jennings', 
      age: '22 years old', 
      gender: 'Male', 
      reason: 'Toe Fracture Pain', 
      waitingTime: '45 min', 
      staff: 'Adam Clark Front Desk', 
      room: '102B',
      bp: '130/80 mmHg',
      heartRate: '75 bpm',
      phone: '(302) 555-0107',
      email: 'willie.jennings@email.com',
      address: '8309 Barby Hill',
      particularSickness: 'Heart Disease, Hepatitis',
      allergic: 'Medicine Allergic',
      occlusi: 'Normal Bite',
      torusPalatinus: 'No',
      diastema: 'Yes (tooth number 21)',
      anomalousTeeth: 'No',
      photo: 'https://via.placeholder.com/100',
      lastUpdateMedical: '12 June 2022',
      lastUpdateOral: '12 July 2022'
    },
  ];
  selectedPatient: any = null;
  activeTab: string = 'patient-information';
  notifications: any[] = [
    { message: 'New patient appointment scheduled', time: '10:30 AM' },
    { message: 'Medical record updated for Robert Wilson', time: '09:15 AM' },
    { message: 'Reminder: Check Willie Jennings\'s next treatment', time: '08:00 AM' },
  ];

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

  showPatientDetails(patient: any) {
    this.selectedPatient = { ...patient }; // Create a copy to avoid direct reference
    this.activeTab = 'patient-information'; // Default to Patient Information tab
  }

  closePatientDetails() {
    this.selectedPatient = null;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  toggleNotifications() {
    this.showNotifications = true;
  }
}