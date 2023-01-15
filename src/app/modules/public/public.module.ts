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
import { ToggleButtonModule } from "primeng/togglebutton";
import { OverlayModule } from "primeng/overlay";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { FormsModule } from "@angular/forms";
import { SearchResultsComponent } from "./pages/search-results/search-results.component";
import { SliderModule } from "primeng/slider";
import { RoomComponent } from "./pages/room/room.component";

@NgModule({
	declarations: [PublicComponent, HomeComponent, HeaderComponent, SearchFormComponent, SearchResultsComponent, RoomComponent],
	imports: [PublicRoutingModule, CoreModule, SharedModule, SliderModule, FormsModule, NzCarouselModule, OverlayModule, ToggleButtonModule, NzButtonModule, FontAwesomeModule, CommonModule],
})
export class PublicModule {}
