import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
	currentPosition: number = 0;
	lastScrollDirection: string = "up";
	lastScrollY: number = 0;
	scrolledBefore: Boolean = false;

	constructor(@Inject(DOCUMENT) private _document: Document) {
		this._document.addEventListener("scroll", this.onContentScrolled);
	}

	ngOnDestroy() {
		this._document.removeEventListener("scroll", this.onContentScrolled);
	}

	onContentScrolled = (e: any) => {
		let scroll = window.pageYOffset;
		if (!this.scrolledBefore) {
			this.scrolledBefore = true;
			this.currentPosition = scroll;
			this.lastScrollY = scroll;
		}
		if (Math.abs(this.lastScrollY - this.currentPosition) >= 5) {
			let scrollDirection = "";
			if (scroll > this.currentPosition) {
				scrollDirection = "down";
			} else {
				scrollDirection = "up";
			}
			this.lastScrollY = scroll;
			if (this.lastScrollDirection !== scrollDirection) {
				this.lastScrollDirection = scrollDirection;
				this.scrollDirectionChanged();
			}
		}
		this.currentPosition = scroll;
	};

	showHeader() {
		this._document.getElementById("header")!.style.top = "0";
	}
	hideHeader() {
		this._document.getElementById("header")!.style.top = "-100px";
	}

	scrollDirectionChanged() {
		if (this.lastScrollDirection === "down") {
			this.hideHeader();
		} else {
			this.showHeader();
		}
	}
}
