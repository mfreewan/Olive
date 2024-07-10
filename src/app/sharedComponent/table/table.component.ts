import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';




@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Input() showAddNewButton = false;
  @Input() name: string = '';
  itemsPerPage = 6;
  currentPage = 1;

  constructor(private router: Router) {}

  get rowKeys() {
    return this.data.length > 0 ? Object.keys(this.data[0]).filter(key => key !== 'id') : [];
  }

  editRow(id: any) {
    this.router.navigate(['/details', id]);
  }

  auditTrail() {}

  addNew() {
    console.log('Add New button clicked');
  }

  get paginationText() {
    return `${(this.currentPage - 1) * this.itemsPerPage + 1} - ${Math.min(this.currentPage * this.itemsPerPage, this.data.length)} Out of ${this.data.length}`;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.data.length) {
      this.currentPage++;
    }
  }

  firstPage() {
    this.currentPage = 1;
  }

  lastPage() {
    this.currentPage = Math.ceil(this.data.length / this.itemsPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  get totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  isImageUrl(value: string): boolean {
    return value.startsWith('') ;
  }
}
