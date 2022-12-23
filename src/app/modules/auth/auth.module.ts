import { AuthRoutingModule } from "./auth-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
	declarations: [AuthComponent, LoginComponent],
	imports: [AuthRoutingModule, CommonModule],
})
export class AuthModule {}
