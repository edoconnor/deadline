import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deadline-modal',
  templateUrl: './deadline-modal.component.html',
  styleUrls: ['./deadline-modal.component.css'],
})
export class DeadlineModalComponent {
  newDeadlineDate: Date | null = null;
  newDeadlineTime: string = '';

  constructor(public dialogRef: MatDialogRef<DeadlineModalComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.newDeadlineDate && this.newDeadlineTime) {
      const [hours, minutes] = this.newDeadlineTime.split(':').map(Number);
      const newDeadline = new Date(this.newDeadlineDate);
      newDeadline.setHours(hours, minutes, 0, 0);
      this.dialogRef.close(newDeadline.toISOString());
    }
  }
}