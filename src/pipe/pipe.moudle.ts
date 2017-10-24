import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CheckPipe} from "./check.pipe"

@NgModule({
    declarations: [
        CheckPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CheckPipe
    ]
})
export class PipesModule { }