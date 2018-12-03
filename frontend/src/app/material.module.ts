import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule, MatMenuModule, MatIconModule,
  MatFormFieldModule,
  MatIcon,
  MatBadgeModule,
  MatGridListModule,
  MatStepperModule,
  MatExpansionModule
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
    MatBadgeModule,
    MatFormFieldModule,
    MatGridListModule,
    MatStepperModule,
    MatExpansionModule

  ]
})
export class AngularMaterialModule {}
