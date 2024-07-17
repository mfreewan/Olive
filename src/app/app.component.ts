import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RulesComponent } from './components/rules/ruleEngine/rules.component';
import { SidebarComponent } from './components/sidebar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/shared/table/table.component';



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
