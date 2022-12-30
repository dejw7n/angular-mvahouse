import { SharedModule } from "./../../shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";
import { ToggleButtonModule } from "primeng/togglebutton";
import { FormsModule } from "@angular/forms";
import { OverlayModule } from "primeng/overlay";
import { NzButtonModule } from "ng-zorro-antd/button";

@NgModule({
	declarations: [PublicComponent, HomeComponent, HeaderComponent, SearchFormComponent, HeroBannerComponent],
	imports: [PublicRoutingModule, SharedModule, OverlayPanelModule, FormsModule, OverlayModule, ToggleButtonModule, NzButtonModule, FontAwesomeModule, CommonModule],
})
export class PublicModule {}
