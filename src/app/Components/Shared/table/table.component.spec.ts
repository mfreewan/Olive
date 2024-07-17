import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        TableComponent,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        BrowserAnimationsModule,
        FormsModule,
      ],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    component.headers = ['column1', 'column2'];
    component.tableData = new MatTableDataSource([
      { column1: 'data1', column2: 'data2' },
    ]);
    component.showAddNewButton = true;
    component.name = 'Test Table';
    component.searchWord = 'data';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct columns', () => {
    expect(component.displayedColumns).toEqual([
      'column1',
      'column2',
      'actions',
    ]);
  });

  it('should filter table data based on search word', () => {
    component.searchWord = 'data1';
    component.ngOnChanges();
    expect(component.tableData.filter).toBe('data1');
  });

  it('should call router navigate on editRow', () => {
    const id = 1;
    component.editRow(id);
    expect(router.navigate).toHaveBeenCalledWith(['/details', id]);
  });

  it('should log message on addNew', () => {
    spyOn(console, 'log');
    component.addNew();
    expect(console.log).toHaveBeenCalledWith('Add New button clicked');
  });

  it('should return true for isImageUrl if value starts with an empty string', () => {
    const result = component.isImageUrl('');
    expect(result).toBe(true);
  });

  it('should render header elements correctly', () => {
    const headerElement = fixture.debugElement.query(By.css('.sideLabel'));
    expect(headerElement).toBeTruthy();

    const labelElement = headerElement.query(By.css('label'));
    expect(labelElement.nativeElement.textContent.trim()).toBe('Rules Engine');
  });

  it('should show additional label when name is provided', () => {
    component.name = 'Some Name';
    fixture.detectChanges();

    const nameLabelElement = fixture.debugElement.query(By.css('.name-label'));
    expect(nameLabelElement).toBeTruthy();
    expect(nameLabelElement.nativeElement.textContent.trim()).toContain(
      '> Leave Type - Some Name'
    );
  });

  it('should show add new button when showAddNewButton is true', () => {
    component.showAddNewButton = true;
    fixture.detectChanges();

    const addNewButton = fixture.debugElement.query(
      By.css('.create-new-button')
    );
    expect(addNewButton).toBeTruthy();
  });

  it('should trigger addNew method when add new button is clicked', () => {
    spyOn(component, 'addNew');

    const addNewButton = fixture.debugElement.query(
      By.css('.create-new-button')
    );
    addNewButton.nativeElement.click();

    expect(component.addNew).toHaveBeenCalled();
  });

  it('should update searchWord on input change', () => {
    const searchInput = fixture.debugElement.query(
      By.css('.search-input')
    ).nativeElement;
    searchInput.value = 'test';
    searchInput.dispatchEvent(new Event('input'));

    expect(component.searchWord).toBe('test');
  });

  it('should trigger search method when search button is clicked', () => {
    spyOn(component, 'search');

    const searchButton = fixture.debugElement.query(By.css('.search-button'));
    searchButton.nativeElement.click();

    expect(component.search).toHaveBeenCalled();
  });
});
