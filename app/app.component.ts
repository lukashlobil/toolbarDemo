import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `<StackLayout><sharedComponent></sharedComponent><router-outlet></router-outlet></StackLayout>`,
})
export class AppComponent {}
