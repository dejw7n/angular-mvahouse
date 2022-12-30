import { Component } from "@angular/core";
import { NzButtonSize } from "ng-zorro-antd/button";

@Component({
	selector: "app-public-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.less"],
})
export class HeaderComponent {
	size: NzButtonSize = "large";

	navLinks: any = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About us",
			href: "/",
		},
		{
			label: "Contact us",
			href: "/",
		},
	];
}
