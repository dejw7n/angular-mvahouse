import { Component } from "@angular/core";
import { HotelService } from "src/app/core/services/hotel.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.less"],
})
export class HomeComponent {
	hotelDetails: any;
	constructor(private hotelService: HotelService) {
		this.hotelDetails = this.hotelService.getHotelDetails();
	}

	carouselSlides = [
		{
			imgSrc: "assets/images/mvahouse/interior/1.jpg",
			imgAlt: "MVA House Interior",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/2.jpg",
			imgAlt: "MVA House Interior",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/3.jpg",
			imgAlt: "MVA House Interior",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/4.jpg",
			imgAlt: "MVA House Interior",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/5.jpg",
			imgAlt: "MVA House Interior",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/6.jpg",
			imgAlt: "MVA House Interior",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/7.jpg",
			imgAlt: "MVA House Interior",
		},
	];
}
