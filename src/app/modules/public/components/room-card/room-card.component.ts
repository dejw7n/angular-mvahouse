import { Component } from "@angular/core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HotelService } from "src/app/core/services/hotel.service";

@Component({
	selector: "app-room-card",
	templateUrl: "./room-card.component.html",
	styleUrls: ["./room-card.component.less"],
})
export class RoomCardComponent {
	faMagnifyingGlass = faMagnifyingGlass;

	hotelDetails: any;
	constructor(private hotelService: HotelService) {
		this.hotelDetails = this.hotelService.getHotelDetails();
	}
}
