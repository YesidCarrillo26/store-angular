import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  fromChild(event: string) {
    console.log('Event from child', event);

  }
}
