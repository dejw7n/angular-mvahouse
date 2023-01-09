import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseHrefPipe } from "./pipes/base-href.pipe";

@NgModule({
	declarations: [BaseHrefPipe],
	imports: [CommonModule],
	exports: [BaseHrefPipe],
})
export class CoreModule {}
