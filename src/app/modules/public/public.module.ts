import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "./../../shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";

@NgModule({
	declarations: [PublicComponent, HomeComponent, HeaderComponent, SearchFormComponent],
	imports: [PublicRoutingModule, SharedModule, FontAwesomeModule, CommonModule],
})
export class PublicModule {}
