import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { NameValidatorDirective } from '../common/directives/name-validator.directive';
import { AsyncEqualDirective } from '../common/directives/async-equal.directive';
import { SwitcherComponent } from './switcher/switcher.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // TODO Why not material ?
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderComponent
      }
    ])
  ],
  providers: [SearchService],
  declarations: [
    OrderComponent,
    NameValidatorDirective, AsyncEqualDirective, SwitcherComponent
  ]
})
export class OrderModule {}
