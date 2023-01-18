import { Component, Input } from "@angular/core";
import { faCalendar, faMinusSquare, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";
import { NzButtonSize } from "ng-zorro-antd/button";

declare var datesPickerJs: any;

@Component({
	selector: "app-search-form",
	templateUrl: "./search-form.component.html",
	styleUrls: ["./search-form.component.less"],
})
export class SearchFormComponent {
	@Input() btnText: string = "BOOK NOW";
	@Input() btnStyleClass: string = "";

	size: NzButtonSize = "large";

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
	formRequirementsCount: number = 0;
	checkRequirements() {
		this.formRequirementsCount = 0;
		for (var key in this.form.requirements) {
			if (this.form.requirements[key]) {
				this.formRequirementsCount++;
			}
		}
	}
	handleRequirementChange(e: any) {
		this.checkRequirements();
	}

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
