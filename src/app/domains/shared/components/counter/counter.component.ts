import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC OPERATIONS IN CONSTRUCTOR
    // BEFORE RENDERING
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during rendering
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
  }

  ngAfterViewInit() {
    // after rendering
    // hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // before destroying
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('change duration')
    // async
  }
}
