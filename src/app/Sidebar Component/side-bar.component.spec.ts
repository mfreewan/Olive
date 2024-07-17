import { ComponentFixture } from '@angular/core/testing';
import { SidebarComponent } from './side-bar.component';

describe('HeaderComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;


  beforeEach(() => {
    component = new SidebarComponent(); 
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});