import { Component } from "@angular/core";
import { HotelService } from "src/app/core/services/hotel.service";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.less"],
})
export class FooterComponent {
	hotelDetails: any;
	constructor(private hotelService: HotelService) {
		this.hotelDetails = this.hotelService.getHotelDetails();
	}
	currentYear: number = new Date().getFullYear();
}
