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
  MatFormFieldModule,
  MatIcon,
  MatBadgeModule,
  MatGridListModule,
  MatStepperModule
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
    MatStepperModule

  ]
})
export class AngularMaterialModule {}
