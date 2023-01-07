import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ChangeLanguageComponent } from "./components/change-language/change-language.component";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";

@NgModule({
	declarations: [HeaderComponent, ChangeLanguageComponent],
	imports: [CommonModule, FormsModule, DropdownModule],
	exports: [HeaderComponent, ChangeLanguageComponent],
})
export class SharedModule {}
