import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, interval } from 'rxjs';
import { DeadlineService } from '../services/deadline.service';
import { DeadlineModalComponent } from '../deadline-modal/deadline-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  deadlineTime: number | null = null;
  secondsLeft: number | null = null;
  private intervalSubscription: Subscription | null = null;

  constructor(
    private deadlineService: DeadlineService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.deadlineService.getDeadline().subscribe(
      (response) => {
        this.deadlineTime = Date.now() + response.secondsLeft * 1000;
        this.startCountdown();
      },
      (error) => {
        console.error('Error fetching deadline', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  startCountdown(): void {
    this.intervalSubscription = interval(1000).subscribe(() => {
      if (this.deadlineTime !== null) {
        this.secondsLeft = Math.max(
          0,
          Math.floor((this.deadlineTime - Date.now()) / 1000)
        );
      } else {
        this.secondsLeft = 0;
      }
    });
  }

  openChangeDeadlineModal(): void {
    const dialogRef = this.dialog.open(DeadlineModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deadlineService.editDeadline(result).subscribe(
          (response) => {
            console.log(response.message);
            this.refreshDeadline();
          },
          (error) => {
            console.error('Error updating deadline', error);
          }
        );
      }
    });
  }

  refreshDeadline(): void {
    this.deadlineService.getDeadline().subscribe(
      (response) => {
        this.deadlineTime = Date.now() + response.secondsLeft * 1000;
        this.startCountdown();
      },
      (error) => {
        console.error('Error fetching updated deadline', error);
      }
    );
  }
}
