import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFlipbookComponent } from './test-flipbook/test-flipbook.component';

const routes: Routes = [
{path: "flipbook", component: TestFlipbookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
