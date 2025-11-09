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
