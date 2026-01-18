export type FlightStatus = 'on-time' | 'delayed' | 'boarding' | 'departed' | 'arrived' | 'cancelled';

export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  originCode: string;
  destinationCode: string;
  scheduledDeparture: Date;
  estimatedDeparture: Date;
  scheduledArrival: Date;
  estimatedArrival: Date;
  status: FlightStatus;
  gate?: string;
  terminal?: string;
  aircraft?: string;
}
