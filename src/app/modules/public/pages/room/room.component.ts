import { Component } from "@angular/core";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-room",
	templateUrl: "./room.component.html",
	styleUrls: ["./room.component.less"],
})
export class RoomComponent {
	faWifi = faWifi;

	responsiveOptions: any = [];

	apartments: any = [
		{
			id: 1,
			name: "Apartment 1",
			price: 100,
		},
		{
			id: 2,
			name: "Apartment 2",
			price: 150,
		},
		{
			id: 3,
			name: "Apartment 3",
			price: 150,
		},
		{
			id: 4,
			name: "Apartment 4",
			price: 150,
		},
		{
			id: 5,
			name: "Apartment 5",
			price: 150,
		},
	];

	constructor() {
		this.responsiveOptions = [
			{
				breakpoint: "1024px",
				numVisible: 3,
				numScroll: 3,
			},
			{
				breakpoint: "768px",
				numVisible: 2,
				numScroll: 2,
			},
			{
				breakpoint: "560px",
				numVisible: 1,
				numScroll: 1,
			},
		];
	}
}
