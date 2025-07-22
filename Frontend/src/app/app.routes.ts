import { Routes } from '@angular/router';
import{Activity} from './components/activity/activity'
import { Workout } from './components/workout/workout';
import { Goal } from './components/goal/goal';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {path:"activity",component:Activity},
    {path: "workout",component: Workout},
    {path:"goal",component:Goal},
     {path:"dashboard",component:Dashboard},
];
