import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ preventDuplicates: true, autoDismiss: false })
  ],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
