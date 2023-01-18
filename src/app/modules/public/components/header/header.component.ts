import { Component, TemplateRef, ViewChild } from "@angular/core";
import { DrawerService, IDrawerOpenResult } from "ng-devui/drawer";
import { HotelService } from "src/app/core/services/hotel.service";

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

	results!: IDrawerOpenResult;

	@ViewChild("drawerContent", { static: true }) drawerContent!: TemplateRef<any>;

	hotelDetails: any;
	constructor(private hotelService: HotelService, private drawerService: DrawerService) {
		this.hotelDetails = this.hotelService.getHotelDetails();
	}

	openDrawer() {
		this.results = this.drawerService.open({
			contentTemplate: this.drawerContent,
			width: "50%",
			zIndex: 1000,
			isCover: true,
			fullScreen: true,
			backdropCloseable: true,
			escKeyCloseable: true,
			position: "left",
			onClose: () => {
				console.log("on drawer closed");
			},
			data: {
				text: "hello",
				name: "tom1",
			},
		});
	}

	close() {
		this.results.drawerInstance.hide();
	}
}
