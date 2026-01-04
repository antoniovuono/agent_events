import { randomUUID } from 'node:crypto';

type EventsProps = {
  id?: string;
  title: string;
  description: string;
  startsDate: Date;
};

let events: EventsProps[] = [];

export function createEventInMemory(event: EventsProps) {
  const newEvent = {
    id: randomUUID(),
    title: event.title,
    description: event.description,
    startsDate: event.startsDate,
  };

  events.push(newEvent);

  return newEvent;
}

export function fetchEventsInMemory() {
  return events;
}
