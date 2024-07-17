import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/table/table.component';
import ruleDetails from '../../../../assets/Rules Data/ruleDetails.json';
import rulesData from '../../../../assets/Rules Data/rules.json';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

export interface RuleDetail {
  Name: string;
  Validity: string;
  Status: string;
}
export interface RuleData {
  country_name: string;
}

@Component({
  selector: 'app-rule-details',
  standalone: true,
  imports: [TableComponent, NgFor],
  templateUrl: './rules-edit.component.html',
  styleUrls: ['./rules-edit.component.scss'],
})
export class RuleEditComponent implements OnInit {
  ruleDetail = new MatTableDataSource<RuleDetail>();
  ruleData: RuleData[] = [];
  headers: string[] = ['Name', 'Validity', 'Status'];
  country: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const mappedData = ruleDetails.map((item) => ({
      Name: item.name,
      Validity: item.validity,
      Status: item.status,
    }));

    this.ruleDetail.data = mappedData;

    this.ruleDetail.sortingDataAccessor = (
      data: RuleDetail,
      sortHeaderId: string
    ): string | number => {
      switch (sortHeaderId) {
        case 'name':
          return data.Name;
        case 'validity':
          return data.Validity;
        case 'status':
          return data.Status;
        default:
          return '';
      }
    };

    this.ruleData = rulesData.map((item) => ({
      country_name: item.country_name,
    }));
    this.country = this.ruleData[0].country_name || '';
  }
}
