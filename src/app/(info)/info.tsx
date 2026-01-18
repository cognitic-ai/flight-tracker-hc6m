import * as AC from '@bacons/apple-colors';
import { ScrollView, View, Text } from "react-native";

export default function InfoRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        backgroundColor: AC.systemGroupedBackground as string,
      }}
    >
      <View style={{ padding: 16, gap: 20 }}>
        <View
          style={{
            backgroundColor: AC.secondarySystemGroupedBackground as string,
            borderRadius: 16,
            borderCurve: 'continuous',
            padding: 20,
            gap: 12,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: '700', color: AC.label as string }}>
            Flight Tracker
          </Text>
          <Text style={{ fontSize: 16, color: AC.secondaryLabel as string, lineHeight: 24 }}>
            Track flights in real-time with detailed information about departures, arrivals, gates, and flight status.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: AC.secondarySystemGroupedBackground as string,
            borderRadius: 16,
            borderCurve: 'continuous',
            padding: 20,
            gap: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: '600', color: AC.label as string }}>
            Flight Status Legend
          </Text>

          <View style={{ gap: 12 }}>
            <StatusItem color={AC.systemGreen as string} label="On Time" description="Flight is on schedule" />
            <StatusItem color={AC.systemBlue as string} label="Boarding" description="Passengers are boarding" />
            <StatusItem color={AC.systemPurple as string} label="Departed" description="Flight has departed" />
            <StatusItem color={AC.systemGray as string} label="Arrived" description="Flight has arrived" />
            <StatusItem color={AC.systemOrange as string} label="Delayed" description="Flight is delayed" />
            <StatusItem color={AC.systemRed as string} label="Cancelled" description="Flight is cancelled" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: AC.secondarySystemGroupedBackground as string,
            borderRadius: 16,
            borderCurve: 'continuous',
            padding: 20,
            gap: 12,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: '600', color: AC.label as string }}>
            Features
          </Text>
          <Text style={{ fontSize: 15, color: AC.secondaryLabel as string, lineHeight: 22 }}>
            • Search flights by number, airline, or destination{'\n'}
            • Real-time status updates{'\n'}
            • Gate and terminal information{'\n'}
            • Aircraft details{'\n'}
            • Automatic dark mode support
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function StatusItem({ color, label, description }: { color: string; label: string; description: string }) {
  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: color,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: '500', color: AC.label as string }}>
          {label}
        </Text>
        <Text style={{ fontSize: 13, color: AC.secondaryLabel as string }}>
          {description}
        </Text>
      </View>
    </View>
  );
}
