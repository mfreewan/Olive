import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import rulesData from '../../../assets/Rules Data/rules.json';
import { RulesComponent } from './rules.component'; // Import RulesComponent directly
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RulesComponent', () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with rule data', () => {
    const mappedData = rulesData.map(item => ({
      id: item.id,
      Name: item.name,
      Module: item.module,
      country: item.country,
      Status: item.status,
    }));

    component.ruleData = new MatTableDataSource(mappedData);
    fixture.detectChanges();

    expect(component.ruleData.data.length).toBe(rulesData.length);
  });

  // it('should sort data correctly', () => {
  //   const mappedData = rulesData.map(item => ({
  //     id: item.id,
  //     name: item.name,
  //     module: item.module,
  //     country: item.country,
  //     status: item.status,
  //   }));
  
  //   component.ruleData = new MatTableDataSource(mappedData);
  //   fixture.detectChanges();
  
  //   // Simulate sorting by 'name'
  //   component.sort.sort({ id: 'name', start: 'asc', disableClear: false });
  
  //   // Get the sorted data from the table
  //   const sortedData = component.ruleData.sortData(component.ruleData.filteredData, component.sort);
  
  //   // Assert that the first item after sorting by 'name' is correct
  //   expect(sortedData[0].name).toBe(['test1','test2']);
  // });
  
});

