import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import {ParentComponent} from './parent';
import { AppComponent } from "src/child/Child";
import { FormsModule } from '@angular/forms';
import { TwoWay } from "./twoway";
@NgModule({
    declarations: [
        ParentComponent,AppComponent,TwoWay
      ],
      imports: [
        BrowserModule,FormsModule
      ],
      bootstrap: [ParentComponent]
    })
export class ParentModule{

}