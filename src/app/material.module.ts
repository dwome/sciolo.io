import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatGridListModule, MatTabsModule} from "@angular/material";

@NgModule({
imports:[MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatGridListModule, MatTabsModule],
  exports:[MatButtonModule,  MatToolbarModule, MatInputModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatGridListModule, MatTabsModule],
})
export class MaterialModule{}
