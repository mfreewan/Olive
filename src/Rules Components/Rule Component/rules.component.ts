import { Component, NgZone, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import rulesData from '../../assets/Rules Data/rules.json';
import { TableComponent } from '../../app/Shared Component/table/table.component';

export interface Rule {
  id: number;
  name: string;
  module: string;
  country: string;
  status: string;
}

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [NgFor, TableComponent],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss',
})
export class RulesComponent implements OnInit {
  ruleData: Rule[] = [];
  headers: string[] = ['Rule name', 'Module', 'Country', 'Status'];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ruleData = rulesData.map((item) => ({
      id: item.id,
      name: item.name,
      module: item.module,
      country: item.country,
      status: item.status,
    }));

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ruleData = rulesData.map((item) => ({
          id: item.id,
          name: item.name,
          module: item.module,
          country: item.country,
          status: item.status,
        }));

        this.ngZone.run(() => {});
      }, 2000);
      console.log('Rule data fetched:', this.ruleData);
    });
  }
}
