import { Component, input, output, signal } from '@angular/core';
import type { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();

  complete = output();

  isExpanded = signal(false);

  onExpandedToggle() {
    this.isExpanded.update((x) => !x);
  }

  onCompleted() {
    this.complete.emit();
  }
}
