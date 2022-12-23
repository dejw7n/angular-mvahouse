import { AdminComponent } from "./modules/admin/admin.component";
import { NgModule } from "@angular/core";
import { NoPreloading, RouterModule, Routes } from "@angular/router";
import { PublicComponent } from "./modules/public/public.component";
import { AuthComponent } from "./modules/auth/auth.component";

const routes: Routes = [
	{
		path: "",
		component: PublicComponent,
		loadChildren: () => import("./modules/public/public.module").then((m) => m.PublicModule),
	},
	{
		path: "auth",
		component: AuthComponent,
		loadChildren: () => import("./modules/auth/auth.module").then((m) => m.AuthModule),
	},
	{
		path: "admin",
		component: AdminComponent,
		loadChildren: () => import("./modules/admin/admin.module").then((m) => m.AdminModule),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: NoPreloading,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
