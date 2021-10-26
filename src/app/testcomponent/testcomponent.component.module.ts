import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TestcomponentComponent } from "./testcomponent.component";

@NgModule({
    declarations: [TestcomponentComponent],
    exports: [TestcomponentComponent],
    imports: [ReactiveFormsModule]
  })
  export class TestcomponentComponentModule {}