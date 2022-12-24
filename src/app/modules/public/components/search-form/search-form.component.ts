import { Component } from "@angular/core";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
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

	ngOnInit() {
		datesPickerJs.init();
	}
}
