import { Routes } from '@angular/router';
import { RulesComponent } from './components/rules/ruleEngine/rules.component';
import { RuleEditComponent } from './components/rules/ruleEngineEdit/rules-edit.component';

export const routes: Routes = [
    {path: '', component:RulesComponent},
    {path: 'details/:id',component:RuleEditComponent},
    
];
