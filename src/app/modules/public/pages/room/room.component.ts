import { Component } from "@angular/core";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-room",
	templateUrl: "./room.component.html",
	styleUrls: ["./room.component.less"],
})
export class RoomComponent {
	faWifi = faWifi;

	roomSpecification = [];
}
