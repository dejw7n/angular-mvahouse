import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-shared-button-book",
	templateUrl: "./shared-button-book.component.html",
	styleUrls: ["./shared-button-book.component.less"],
})
export class SharedButtonBookComponent {
	@Input() styleClass: string = "";
	@Output() clickEvent = new EventEmitter<void>();

	onClick() {
		this.clickEvent.emit();
	}
}
