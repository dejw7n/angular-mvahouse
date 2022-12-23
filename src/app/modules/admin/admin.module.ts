import { AdminRoutingModule } from "./admin-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

@NgModule({
	declarations: [AdminComponent, DashboardComponent],
	imports: [AdminRoutingModule, CommonModule],
})
export class AdminModule {}
