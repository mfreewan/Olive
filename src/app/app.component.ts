import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RulesComponent } from './Components/Rules Components/Rule Component/rules.component';
import { SidebarComponent } from './Components/Sidebar Component/side-bar.component';
import { HeaderComponent } from './Components/Header Component/header.component';
import { TableComponent } from './Components/Shared/table/table.component';



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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'olive1';
}
