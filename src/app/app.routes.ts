import { Routes } from '@angular/router';
import { TableComponent } from './sharedComponent/table/table.component';
import { RulesComponent } from './rules/rules.component';
import { RuleEditComponent } from './rules-edit/rules-edit.component';

export const routes: Routes = [
    {path: '', component:RulesComponent},
    {path: 'details/:id',component:RuleEditComponent}
];
