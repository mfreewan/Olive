import { Routes } from '@angular/router';
import { RulesComponent } from './Components/Rules Components/Rule Component/rules.component';
import { RuleEditComponent } from './Components/Rules Components/Rule Edit Component/rules-edit.component';

export const routes: Routes = [
    {path: '', component:RulesComponent},
    {path: 'details/:id',component:RuleEditComponent},
    
];
