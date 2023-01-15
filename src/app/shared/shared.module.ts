import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ChangeLanguageComponent } from "./components/change-language/change-language.component";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { NzButtonModule } from "ng-zorro-antd/button";
import { SharedButtonBookComponent } from "./components/shared-button-book/shared-button-book.component";

@NgModule({
	declarations: [HeaderComponent, ChangeLanguageComponent, SharedButtonBookComponent],
	imports: [CommonModule, FormsModule, DropdownModule, NzButtonModule],
	exports: [HeaderComponent, ChangeLanguageComponent, SharedButtonBookComponent],
})
export class SharedModule {}
