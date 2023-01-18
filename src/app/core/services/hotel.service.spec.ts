import { TestBed } from "@angular/core/testing";

import { HotelService } from "./hotelDetails.service";

describe("HotelService", () => {
	let service: HotelService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(HotelService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
