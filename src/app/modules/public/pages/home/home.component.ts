import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.less"],
})
export class HomeComponent {
	introduceCarouselSlides = [
		{
			imgSrc: "assets/images/mvahouse/interior/1.jpg",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/2.jpg",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/3.jpg",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/4.jpg",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/5.jpg",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/6.jpg",
		},
		{
			imgSrc: "assets/images/mvahouse/interior/7.jpg",
		},
	];
}
