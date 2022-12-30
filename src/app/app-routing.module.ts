import { NgModule } from "@angular/core";
import { NoPreloading, RouterModule, Routes } from "@angular/router";
import { PublicComponent } from "./modules/public/public.component";

const routes: Routes = [
	{
		path: "",
		component: PublicComponent,
		loadChildren: () => import("./modules/public/public.module").then((m) => m.PublicModule),
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
