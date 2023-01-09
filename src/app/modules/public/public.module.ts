import { CoreModule } from "./../../core/core.module";
import { SharedModule } from "./../../shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";
import { ToggleButtonModule } from "primeng/togglebutton";
import { OverlayModule } from "primeng/overlay";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [PublicComponent, HomeComponent, HeaderComponent, SearchFormComponent, HeroBannerComponent],
	imports: [PublicRoutingModule, CoreModule, SharedModule, FormsModule, NzCarouselModule, OverlayModule, ToggleButtonModule, NzButtonModule, FontAwesomeModule, CommonModule],
})
export class PublicModule {}
