import * as AC from '@bacons/apple-colors';
import { ScrollView, View, Text } from "react-native";
import { useState, useMemo } from "react";
import FlightCard from "../../components/flight-card";
import { mockFlights } from "../../data/mock-flights";
import useSearch from "../../hooks/use-search";

export default function IndexRoute() {
  const search = useSearch({
    placeholder: 'Search flights...',
  });

  const filteredFlights = useMemo(() => {
    if (!search) return mockFlights;

    const searchLower = search.toLowerCase();
    return mockFlights.filter(flight =>
      flight.flightNumber.toLowerCase().includes(searchLower) ||
      flight.airline.toLowerCase().includes(searchLower) ||
      flight.origin.toLowerCase().includes(searchLower) ||
      flight.destination.toLowerCase().includes(searchLower) ||
      flight.originCode.toLowerCase().includes(searchLower) ||
      flight.destinationCode.toLowerCase().includes(searchLower)
    );
  }, [search]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        backgroundColor: AC.systemGroupedBackground as string,
      }}
    >
      <View style={{ padding: 16, gap: 16 }}>
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        ) : (
          <View style={{ padding: 32, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: AC.secondaryLabel as string }}>
              No flights found
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
