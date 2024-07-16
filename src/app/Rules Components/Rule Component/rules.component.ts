import { Component, NgZone, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

import rulesData from '../../../assets/Rules Data/rules.json';
import { TableComponent } from '../../Shared/table/table.component';

export interface Rule {
  id: number;
  Name: string;
  Module: string;
  country: string;
  Status: string;
}

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [NgFor, TableComponent],
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  ruleData = new MatTableDataSource<Rule>();
  headers: string[] = ['Name', 'Module', 'country', 'Status'];
  sort: any;

  // constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    const mappedData = rulesData.map((item) => ({
      id: item.id,
      Name: item.name,
      Module: item.module,
      country: item.country,
      Status: item.status,
    }));

    this.ruleData.data = mappedData;

    this.ruleData.sortingDataAccessor = (data: Rule, sortHeaderId: string): string | number => {
      switch (sortHeaderId) {
        case 'name': return data.Name;
        case 'module': return data.Module;
        case 'country': return data.country;
        case 'status': return data.Status;
        default: return '';
      }
    };

    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     this.ngZone.run(() => {
    //       this.ruleData.data = mappedData;
    //     });
    //   }, 2000);
    //   console.log('Rule data fetched:', this.ruleData.data);
    // });
  }
}
