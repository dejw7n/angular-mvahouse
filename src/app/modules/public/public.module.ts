import { PublicRoutingModule } from "./public-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
	declarations: [PublicComponent, HomeComponent],
	imports: [PublicRoutingModule, CommonModule],
})
export class PublicModule {}
