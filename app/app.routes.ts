import {Routes} from '@angular/router';
import {SecondPage} from './secondPage';
import {FirstPage} from './firstPage';

export const routes: Routes = [
	{path: '', component: FirstPage},
	{path: 'giftslides', component: SecondPage}
	]