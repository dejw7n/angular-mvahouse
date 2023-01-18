import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class HotelService {
	hotelDetails = {
		title: "MVAHOUSE",
		address: "Vrchlického 1240/23. Teplice 415 01",
		contacts: ["+420 775 745 494", "mvahouse@seznam.cz"],
	};

	getHotelDetails() {
		return this.hotelDetails;
	}
}
