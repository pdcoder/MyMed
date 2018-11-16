import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule, MatMenuModule, MatIconModule,
  MatFormFieldModule
} from "@angular/material";

@NgModule({
  exports: [
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,

  ]
})
export class AngularMaterialModule {}
