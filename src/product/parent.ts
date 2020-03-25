import {Component} from'@angular/core';

@Component({
    selector:'parent',
    template:`<h1>{{appName}}</h1>
            <h3>{{welcomeMsg}}</h3> 
            <my-app></my-app>
            <two></two>`    
})
export class ParentComponent{

 appName:string='Searchers';
 welcomeMsg='welcome to search anything you need';

}