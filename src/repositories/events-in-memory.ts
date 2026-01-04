import { randomUUID } from 'node:crypto';

type EventsProps = {
  id?: string;
  title: string;
  description: string;
  startsDate: Date;
  city: string;
  place: string;
  eventLatitude: number;
  eventLongitude: number;
};

let events: EventsProps[] = [];

export function createEventInMemory(event: EventsProps) {
  const newEvent = {
    id: randomUUID(),
    title: event.title,
    description: event.description,
    startsDate: event.startsDate,
    city: event.city,
    place: event.place,
    eventLatitude: event.eventLatitude,
    eventLongitude: event.eventLongitude,
  };

  events.push(newEvent);

  return newEvent;
}

export function fetchEventsInMemory() {
  return events;
}
