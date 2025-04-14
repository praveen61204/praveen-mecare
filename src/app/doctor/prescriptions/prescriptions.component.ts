import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-prescription',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule], // Add FormsModule
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css'],
})
export class PrescriptionComponent {
  doctorName: string = 'Dr. Praveenkumar';
  hospitalName: string = 'Me Care Hospital';
  activeLink: string = 'prescription';
  showNotifications: boolean = false;
  notifications: any[] = [
    { message: 'New prescription created', time: '10:30 AM' },
    { message: 'Prescription updated', time: '09:15 AM' },
    { message: 'Reminder: Check patient records', time: '08:00 AM' },
  ];

  medicines: { name: string; dosage: string; duration: string }[] = [{ name: '', dosage: '', duration: '' }];
  patientName: string = 'Robert Wilson'; // Example patient
  date: string = new Date().toLocaleDateString();

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

  addMedicine() {
    this.medicines.push({ name: '', dosage: '', duration: '' });
  }

  removeMedicine(index: number) {
    if (this.medicines.length > 1) {
      this.medicines.splice(index, 1);
    }
  }

  generatePrescription() {
    const prescriptionContent = `
      Prescription
      Date: ${this.date}
      Patient Name: ${this.patientName}
      Doctor Name: ${this.doctorName}
      Hospital Name: ${this.hospitalName}
      Medicines:
      ${this.medicines.map((med, index) => `${index + 1}. ${med.name} - Dosage: ${med.dosage}, Duration: ${med.duration}`).join('\n')}
      Signature: ______________________
    `;
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head><title>Prescription</title></head>
          <body onload="window.print();window.close()">
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
              <h1 style="text-align: center; color: #2c3e50;">Prescription</h1>
              <p><strong>Date:</strong> ${this.date}</p>
              <p><strong>Patient Name:</strong> ${this.patientName}</p>
              <p><strong>Doctor Name:</strong> ${this.doctorName}</p>
              <p><strong>Hospital Name:</strong> ${this.hospitalName}</p>
              <h3>Medicines:</h3>
              <ul>
                ${this.medicines.map(med => `<li>${med.name} - Dosage: ${med.dosage}, Duration: ${med.duration}</li>`).join('')}
              </ul>
              <p style="margin-top: 40px;">Signature: ______________________</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}