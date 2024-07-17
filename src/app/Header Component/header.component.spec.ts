import { ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;


  beforeEach(() => {
    component = new HeaderComponent(); 
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
//   it('should render the header template', () => {
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('')).toBeTruthy();
//   });
});
