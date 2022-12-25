import { Component } from "@angular/core";
import { faCalendar, faMinusSquare, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

declare var datesPickerJs: any;

@Component({
	selector: "app-search-form",
	templateUrl: "./search-form.component.html",
	styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent {
	faHandPointer = faHandPointer;
	faCalendar = faCalendar;
	faPlusSquare = faPlusSquare;
	faMinusSquare = faMinusSquare;

	form: any = {
		checkIn: "",
		checkOut: "",
		adults: 2,
		childrens: 0,
		requirements: {
			groundFloor: false,
			balcony: false,
			twoBathrooms: false,
			viewOfPark: false,
		},
	};

	overlayStepperVisible: boolean = false;
	toggleStepper() {
		this.overlayStepperVisible = !this.overlayStepperVisible;
	}
	overlayRequirementsVisible: boolean = false;
	toggleRequirements() {
		this.overlayRequirementsVisible = !this.overlayRequirementsVisible;
	}

	ngOnInit() {
		datesPickerJs.init();
	}

	changeAdults(value: number) {
		if (this.form.adults + value >= 1) {
			this.form.adults += value;
		}
	}
	changeChildrens(value: number) {
		if (this.form.childrens + value >= 0) {
			this.form.childrens += value;
		}
	}
}