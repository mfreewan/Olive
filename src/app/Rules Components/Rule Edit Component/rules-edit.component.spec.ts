import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RuleEditComponent } from './rules-edit.component';
import ruleDetails from '../../../assets/Rules Data/ruleDetails.json';
import rulesData from '../../../assets/Rules Data/rules.json';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockActivatedRoute {
  paramMap = convertToParamMap({ id: '1' });
}

describe('RuleEditComponent', () => {
  let component: RuleEditComponent;
  let fixture: ComponentFixture<RuleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize ruleDetail and ruleData', () => {
    const mappedData = ruleDetails.map((item) => ({
      typeName: item.name,
      Validity: item.validity,
      status: item.status,
    }));

    expect(component.ruleDetail.data.length).toBe(mappedData.length);

    expect(component.ruleData.length).toBe(rulesData.length);

    expect(component.country).toBe('United States');
  });
});
