import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `<StackLayout><sharedComponent></sharedComponent><page-router-outlet></page-router-outlet></StackLayout>`,
})
export class AppComponent {}
