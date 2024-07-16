import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RulesComponent } from '../Rules Components/Rule Component/rules.component';
import { SidebarComponent } from '../Sidebar Component/side-bar.component';
import { HeaderComponent } from '../Header Component/header.component';
import { TableComponent } from '../Shared/table/table.component';
import { CustomCalendarComponent } from '../calender/calender.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    RulesComponent,
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    CustomCalendarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'olive1';
}
