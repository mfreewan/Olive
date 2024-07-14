import { Routes } from '@angular/router';
import { TableComponent } from '../Shared Component/table/table.component';
import { RulesComponent } from '../../Rules Components/Rule Component/rules.component';
import { RuleEditComponent } from '../../Rules Components/Rule Edit Component/rules-edit.component';

export const routes: Routes = [
    {path: '', component:RulesComponent},
    {path: 'details/:id',component:RuleEditComponent}
];
