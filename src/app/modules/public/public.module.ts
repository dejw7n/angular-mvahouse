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
import { CarouselModule } from "primeng/carousel";
import { BookComponent } from "./pages/book/book.component";
import { DrawerModule } from "ng-devui/drawer";
import { NzImageModule } from "ng-zorro-antd/image";
import { FooterComponent } from './components/footer/footer.component';
import { RoomCardComponent } from './components/room-card/room-card.component';

@NgModule({
	declarations: [PublicComponent, HomeComponent, HeaderComponent, SearchFormComponent, SearchResultsComponent, RoomComponent, BookComponent, FooterComponent, RoomCardComponent],
	imports: [NzImageModule, PublicRoutingModule, CoreModule, DrawerModule, SharedModule, CarouselModule, SliderModule, FormsModule, NzCarouselModule, OverlayModule, ToggleButtonModule, NzButtonModule, FontAwesomeModule, CommonModule],
})
export class PublicModule {}
