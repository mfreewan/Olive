import { Component, OnInit } from '@angular/core';
import rulesData from '../../assets/data/rules.json'
import { NgFor } from '@angular/common';
import { TableComponent } from '../sharedComponent/table/table.component';

export interface Rule {
  id:number;
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
  data: Rule[] = [];
  headers: string[] = [ 'Rule name', 'Module', 'Country', 'Status'];

  ngOnInit(): void {
    this.data = rulesData.map(item => ({ 
      id:item.id,
      name: item.name,
      module: item.module,
      country: item.country,
      status:item.status
    }));
  }
  }

