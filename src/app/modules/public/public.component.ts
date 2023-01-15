import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-public",
	templateUrl: "./public.component.html",
	styleUrls: ["./public.component.less"],
})
export class PublicComponent {
	constructor(public router: Router) {}
}
