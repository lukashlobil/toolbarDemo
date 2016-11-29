// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {SharedComponent} from './sharedComponent';
import {NativeScriptRouterModule, RouterExtensions} from 'nativescript-angular';
import {routes} from './app.routes';
import {FirstPage} from './firstPage';
import {SecondPage} from './secondPage';

@NgModule({
    declarations: [AppComponent, SharedComponent, FirstPage, SecondPage],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [
        RouterExtensions
    ]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);