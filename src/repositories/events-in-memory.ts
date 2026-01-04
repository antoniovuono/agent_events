import { randomUUID } from 'node:crypto';

type EventsProps = {
  id?: string;
  title: string;
  description: string;
  starts_date: Date;
};

let events: EventsProps[] = [];

export function createEventInMemory(event: EventsProps) {
  const newEvent = {
    id: randomUUID(),
    title: event.title,
    description: event.description,
    starts_date: event.starts_date,
  };

  events.push(newEvent);

  return newEvent;
}

export function fetchEventsInMemory() {
  return events;
}
