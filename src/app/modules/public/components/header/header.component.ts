import { Component } from "@angular/core";

@Component({
	selector: "app-public-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.less"],
})
export class HeaderComponent {
	navLinks: any = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About us",
			href: "/about-us",
		},
		{
			label: "Contact us",
			href: "/contact-us",
		},
	];
}
