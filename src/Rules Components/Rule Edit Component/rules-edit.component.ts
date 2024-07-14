import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../app/Shared Component/table/table.component';
import ruleDetails from '../../assets/Rules Data/ruleDetails.json';
import rulesData from '../../assets/Rules Data/rules.json';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

export interface RuleDetail {
  typeName: string;
  Validity: string;
  status: string;
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
  ruleDetail: RuleDetail[] = [];
  ruleData: RuleData[] = [];
  headers: string[] = ['Type Name', 'Validity', 'Status'];
  country: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.ruleDetail = ruleDetails.map((item) => ({
      typeName: item.name,
      Validity: item.validity,
      status: item.status,
    }));

    this.ruleData = rulesData.map((item) => ({
      country_name: item.country_name,
    }));
    this.country = this.ruleData[0].country_name || 'DefaultCountry';
  }
}
