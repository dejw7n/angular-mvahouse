import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./pages/book/book.component";
import { HomeComponent } from "./pages/home/home.component";
import { RoomComponent } from "./pages/room/room.component";
import { SearchResultsComponent } from "./pages/search-results/search-results.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "searchresults", component: SearchResultsComponent },
	{ path: "room", component: RoomComponent },
	{ path: "book", component: BookComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublicRoutingModule {}
