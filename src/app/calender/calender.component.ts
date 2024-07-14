import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './calender.component.html',
  standalone: true,
  styleUrls: ['./calender.component.scss'],
  imports: [NgFor],
})
export class CustomCalendarComponent implements OnInit {
  selectedYear: number = 0;
  selectedMonth: string = '';
  selectedDay: number = 0;
  months: string[] = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  days: number[] = [];

  ngOnInit(): void {
    this.selectedYear = new Date().getFullYear();
    this.generateDays();
  }

  prevYear() {
    this.selectedYear--;
    if (this.selectedMonth) {
      this.generateDays();
    }
  }

  nextYear() {
    this.selectedYear++;
    if (this.selectedMonth) {
      this.generateDays();
    }
  }

  selectMonth(month: string) {
    this.selectedMonth = month;
    this.generateDays();
  }

  selectDay(day: number) {
    this.selectedDay = day;
  }

  generateDays() {
    const monthIndex = this.months.indexOf(this.selectedMonth);
    const daysInMonth = this.getDaysInMonth(this.selectedYear, monthIndex);
    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
}
