import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-change-language",
	templateUrl: "./change-language.component.html",
	styleUrls: ["./change-language.component.less"],
})
export class ChangeLanguageComponent {
	languages: any = [
		{ name: "English", code: "US" },
		{ name: "Czech", code: "CZ" },
		{ name: "Deutsch", code: "DE" },
		{ name: "Arabic", code: "AE" },
	];

	constructor(private router: Router) {}

	private _selectedLanguage: any = this.languages[0];
	public get selectedLanguage(): any {
		return this._selectedLanguage;
	}
	public set selectedLanguage(v: any) {
		this._selectedLanguage = v;
		this.router.navigate(["/" + v.code.toLowerCase()]);
	}
}
