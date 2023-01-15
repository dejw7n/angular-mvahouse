import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-shared-button-book",
	templateUrl: "./shared-button-book.component.html",
	styleUrls: ["./shared-button-book.component.less"],
})
export class SharedButtonBookComponent {
	@Output() clickEvent = new EventEmitter<void>();
}
