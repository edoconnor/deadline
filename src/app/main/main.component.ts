import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DeadlineService } from '../services/deadline.service';
import { DeadlineModalComponent } from '../deadline-modal/deadline-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'], // Corrected the typo here to styleUrls
})
export class MainComponent implements OnInit, OnDestroy {
  secondsLeft: number | null = null;
  private intervalSubscription: Subscription | null = null;

  constructor(
    private deadlineService: DeadlineService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getDeadline();
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  getDeadline(): void {
    this.deadlineService.getDeadline().subscribe(
      (response) => {
        this.secondsLeft = response.secondsLeft;
      },
      (error) => {
        console.error('Error fetching deadline', error);
      }
    );
  }

  startCountdown(): void {
    this.intervalSubscription = interval(1000)
      .pipe(switchMap(() => this.deadlineService.getDeadline()))
      .subscribe(
        (response) => {
          this.secondsLeft = response.secondsLeft;
        },
        (error) => {
          console.error('Error fetching deadline', error);
        }
      );
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
            this.getDeadline();
          },
          (error) => {
            console.error('Error updating deadline', error);
          }
        );
      }
    });
  }
}
