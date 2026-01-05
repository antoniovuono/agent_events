import { createEventInMemory } from '../../repositories/events-in-memory';

interface CreateEventServiceRequest {
  title: string;
  description: string;
  startsDate: Date;
  city: string;
  place: string;
  eventLatitude: number;
  eventLongitude: number;
}

// Todo: utilizar do prisma
interface Events {
  id: string;
  title: string;
  description: string;
  startsDate: Date;
  city: string;
  place: string;
  eventLatitude: number;
  eventLongitude: number;
}

interface CreateEventServiceResponse {
  // Todo: Trocar pelo do prisma
  event: Events;
}

export async function createEventService({
  title,
  description,
  startsDate,
  city,
  place,
  eventLatitude,
  eventLongitude,
}: CreateEventServiceRequest): Promise<CreateEventServiceResponse> {
  const event = createEventInMemory({
    title,
    description,
    startsDate,
    city,
    place,
    eventLatitude,
    eventLongitude,
  });

  return { event };
}
