import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatGridListModule} from "@angular/material";

@NgModule({
imports:[MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatGridListModule],
  exports:[MatButtonModule,  MatToolbarModule, MatInputModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatGridListModule],
})
export class MaterialModule{}
