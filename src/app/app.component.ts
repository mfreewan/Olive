import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RulesComponent } from './rules/rules.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './sharedComponent/table/table.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RulesComponent,HeaderComponent,SidebarComponent,TableComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'olive1';
}
