import * as AC from '@bacons/apple-colors';
import { View, Text, StyleSheet } from 'react-native';
import { Flight, FlightStatus } from '../types/flight';

interface FlightCardProps {
  flight: Flight;
}

function getStatusColor(status: FlightStatus): string {
  switch (status) {
    case 'on-time':
      return AC.systemGreen as string;
    case 'delayed':
      return AC.systemOrange as string;
    case 'boarding':
      return AC.systemBlue as string;
    case 'departed':
      return AC.systemPurple as string;
    case 'arrived':
      return AC.systemGray as string;
    case 'cancelled':
      return AC.systemRed as string;
  }
}

function getStatusText(status: FlightStatus): string {
  switch (status) {
    case 'on-time':
      return 'On Time';
    case 'delayed':
      return 'Delayed';
    case 'boarding':
      return 'Boarding';
    case 'departed':
      return 'Departed';
    case 'arrived':
      return 'Arrived';
    case 'cancelled':
      return 'Cancelled';
  }
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export default function FlightCard({ flight }: FlightCardProps) {
  const statusColor = getStatusColor(flight.status);
  const isDelayed = flight.status === 'delayed';

  return (
    <View
      style={{
        backgroundColor: AC.secondarySystemGroupedBackground as string,
        borderRadius: 16,
        borderCurve: 'continuous',
        padding: 16,
        gap: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ gap: 4 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: AC.label as string }}>
            {flight.flightNumber}
          </Text>
          <Text style={{ fontSize: 14, color: AC.secondaryLabel as string }}>
            {flight.airline}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 12,
            borderCurve: 'continuous',
            backgroundColor: statusColor + '20',
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: '600', color: statusColor }}>
            {getStatusText(flight.status)}
          </Text>
        </View>
      </View>

      {/* Route */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={{ flex: 1, gap: 4 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: AC.label as string }}>
            {flight.originCode}
          </Text>
          <Text style={{ fontSize: 13, color: AC.secondaryLabel as string }}>
            {flight.origin}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '500', color: AC.label as string }}>
            {formatTime(isDelayed ? flight.estimatedDeparture : flight.scheduledDeparture)}
          </Text>
          {isDelayed && (
            <Text style={{ fontSize: 12, color: AC.tertiaryLabel as string, textDecorationLine: 'line-through' }}>
              {formatTime(flight.scheduledDeparture)}
            </Text>
          )}
        </View>

        {/* Plane Icon */}
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Text style={{ fontSize: 24, color: AC.systemBlue as string }}>✈️</Text>
          <View style={{ height: 1, width: 40, backgroundColor: AC.separator as string }} />
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end', gap: 4 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: AC.label as string }}>
            {flight.destinationCode}
          </Text>
          <Text style={{ fontSize: 13, color: AC.secondaryLabel as string, textAlign: 'right' }}>
            {flight.destination}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '500', color: AC.label as string }}>
            {formatTime(isDelayed ? flight.estimatedArrival : flight.scheduledArrival)}
          </Text>
          {isDelayed && (
            <Text style={{ fontSize: 12, color: AC.tertiaryLabel as string, textDecorationLine: 'line-through' }}>
              {formatTime(flight.scheduledArrival)}
            </Text>
          )}
        </View>
      </View>

      {/* Flight Details */}
      {(flight.gate || flight.terminal || flight.aircraft) && (
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            paddingTop: 12,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: AC.separator as string,
          }}
        >
          {flight.gate && (
            <View style={{ gap: 2 }}>
              <Text style={{ fontSize: 11, color: AC.tertiaryLabel as string }}>GATE</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: AC.label as string }}>
                {flight.gate}
              </Text>
            </View>
          )}
          {flight.terminal && (
            <View style={{ gap: 2 }}>
              <Text style={{ fontSize: 11, color: AC.tertiaryLabel as string }}>TERMINAL</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: AC.label as string }}>
                {flight.terminal}
              </Text>
            </View>
          )}
          {flight.aircraft && (
            <View style={{ flex: 1, gap: 2 }}>
              <Text style={{ fontSize: 11, color: AC.tertiaryLabel as string }}>AIRCRAFT</Text>
              <Text style={{ fontSize: 14, fontWeight: '500', color: AC.secondaryLabel as string }}>
                {flight.aircraft}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
