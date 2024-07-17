import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  pageSize: unknown;
  pageLength: unknown;
  pageChangeEvent($event: PageEvent) {
    throw new Error('Method not implemented.');
  }
  @Input() headers: string[] = [];
  @Input() tableData: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @Input() showAddNewButton = false;
  @Input() name: string = '';
  @Input() searchWord: string = '';

  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router) {}

  ngOnInit() {
    this.displayedColumns = [...this.headers, 'actions'];
  }

  ngAfterViewInit() {
    this.tableData.paginator = this.paginator;
  }

  ngOnChanges() {
    this.tableData.filter = this.searchWord.trim().toLowerCase();
  }

  search() {
    this.tableData.filter = this.searchWord.trim().toLowerCase();
  }

  editRow(id: any) {
    this.router.navigate(['/details', id]);
  }

  auditTrail() {}

  addNew() {
    console.log('Add New button clicked');
  }

  isImageUrl(value: string): boolean {
    return value.startsWith('');
  }
}
