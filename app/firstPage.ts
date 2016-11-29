import {Component} from '@angular/core';
@Component({
	template: `<StackLayout><Label text="First page" [nsRouterLink]="['/secondPage']"></Label></StackLayout>`
})

export class FirstPage {}