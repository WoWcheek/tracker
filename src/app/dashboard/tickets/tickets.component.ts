import { Component, signal } from '@angular/core';

import { NewTicketComponent } from './new-ticket/new-ticket.component';
import type { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets = signal<Ticket[]>([]);

  onAdd(ticket: { title: string; request: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: ticket.title,
      request: ticket.request,
      status: 'open',
    };
    this.tickets().push(newTicket);
  }

  onTicketCompleted(id: string) {
    this.tickets.set(
      this.tickets().map((ticket) => {
        if (ticket.id === id) return { ...ticket, status: 'closed' };
        else return ticket;
      })
    );
  }
}
