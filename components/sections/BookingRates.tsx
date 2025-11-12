import Text from "../Text";
import { SideInterior } from "@/public/assets/images";
import Button from "../Button";
import PageWrapper from "../PageWrapper";

const BOOKING_FEATURES = [
  "Advance reservations recommended (24-48 hours preferred)",
  "Same-day service available based on availability",
  "Recurring appointments can be scheduled",
  "Group bookings and corporate accounts welcome",
];

const RATE_FEATURES = [
  "Transparent pricing - No hidden fees",
  "Competitive rates for premium service",
  "Corporate discounts available",
  "Special occasion packages offered",
  "Gratuity appreciated but never required",
];

const PRICING_PACKAGES = [
  {
    duration: "4 Hours (Half-Day Service)",
    description: "Ideal for short trips, appointments, or errands",
    price: "$220-$300",
  },
  {
    duration: "8 Hours (Full-Day Service)",
    description: "Perfect for business trips or full-day use",
    price: "$450-$600",
  },
  {
    duration: "12 Hours (Extended Day)",
    description: "Includes multiple destinations, waiting time",
    price: "$700-$1000",
  },
  {
    duration: "24 Hours (Full-Day + Night)",
    description: "For long-distance or full personal chauffeur service",
    price: "$1200-$1500",
  },
];

const ADD_ONS = [
  {
    name: "Airport Pickup / Drop-off",
    price: "+$60–$100",
  },
  {
    name: "Extra Hour",
    price: "+$60–$90 per hour",
  },
  {
    name: "Luxury Package (Suit, Water)",
    price: "+$70",
  },
];

export default function BookingRates() {
  return (
    <PageWrapper
      id="booking-rates"
      size="narrowest"
      withYSpacing
      background="light"
      backgroundImage={SideInterior.src}
    >
      <div className="mb-8 text-center">
        <Text size="heading" variant="primary" color="accent">
          Booking & Rates
        </Text>
      </div>

      <div className=" flex flex-col items-center gap-8">
        <div>
          <Text
            size="subheading"
            weight="bold"
            variant="primary"
            color="white"
            className="text-center mb-4"
          >
            How to Book
          </Text>
          <ul>
            {BOOKING_FEATURES.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent text-lg mt-1">•</span>
                <Text size="body" variant="secondary" color="subtle">
                  {feature}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Text
            size="subheading"
            variant="primary"
            weight="bold"
            color="white"
            className="text-center mb-4"
          >
            Rate Structure
          </Text>

          <ul>
            {RATE_FEATURES.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent text-lg mt-1">•</span>
                <Text size="body" variant="secondary" color="subtle">
                  {feature}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <Text
            size="subheading"
            variant="primary"
            weight="bold"
            color="white"
            className="text-center mb-6"
          >
            Service Packages
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {PRICING_PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className="bg-black/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
              >
                <Text
                  size="subheading"
                  variant="primary"
                  color="accent"
                  weight="bold"
                  className="mb-2"
                >
                  {pkg.duration}
                </Text>
                <Text
                  size="body"
                  variant="secondary"
                  color="subtle"
                  className="mb-4"
                >
                  {pkg.description}
                </Text>
                <Text
                  size="subheading"
                  variant="primary"
                  color="white"
                  weight="bold"
                >
                  {pkg.price}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto">
          <Text
            size="subheading"
            variant="primary"
            weight="bold"
            color="white"
            className="text-center mb-6"
          >
            Add-Ons (Optional)
          </Text>

          <div className="bg-black/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
            <ul className="space-y-4">
              {ADD_ONS.map((addon, i) => (
                <li key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-accent text-lg">•</span>
                    <Text size="body" variant="secondary" color="subtle">
                      {addon.name}
                    </Text>
                  </div>
                  <Text
                    size="body"
                    variant="primary"
                    color="accent"
                    weight="bold"
                  >
                    {addon.price}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Text
            size="body"
            variant="secondary"
            color="subtle"
            className="italic mb-4"
          >
            Contact for detailed pricing and availability
          </Text>
          <Button color="accent" href="#contact">
            Get Quote
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
