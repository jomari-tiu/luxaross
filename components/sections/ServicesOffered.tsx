import Text from "../Text";
import PageWrapper from "../PageWrapper";
import classNames from "classnames";
import {
  MdFlightTakeoff,
  MdBusiness,
  MdCelebration,
  MdSchedule,
} from "react-icons/md";

const SERVICES = [
  {
    icon: <MdFlightTakeoff className="text-6xl text-accent" />,
    title: "Airport Transfers",
    features: [
      "Domestic and international terminals",
      "Flight monitoring - I track your arrival times",
      "Meet and greet service available",
      "Luggage assistance provided",
      "Early morning and late-night availability",
    ],
  },
  {
    icon: <MdBusiness className="text-6xl text-accent" />,
    title: "Executive Transportation",
    features: [
      "Corporate meetings and events",
      "Business dinners and conferences",
      "Multi-stop itineraries",
      "Waiting time included for meetings",
      "Professional discretion for sensitive business matters",
    ],
  },
  {
    icon: <MdCelebration className="text-6xl text-accent" />,
    title: "Special Occasions",
    features: [
      "Private events and celebrations",
      "Date nights and anniversaries",
      "Medical appointments",
      "Shopping excursions",
      "Personal errands and appointments",
    ],
  },
  {
    icon: <MdSchedule className="text-6xl text-accent" />,
    title: "Hourly Services",
    features: [
      "Flexible scheduling for extended needs",
      "Multiple destinations in one trip",
      "Wait time included at each stop",
      "Customized itineraries based on your requirements",
    ],
  },
];

export default function ServicesOffered() {
  return (
    <PageWrapper id="services-offered" size="narrow" withYSpacing>
      <div className="text-center mb-8">
        <Text size="heading" variant="primary" color="accent">
          Services Offered
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className={classNames(
              "p-8 rounded-lg text-center",
              i % 2 === 0 ? "bg-subtle-light" : "bg-subtle-darker"
            )}
          >
            <div className="mb-2">{service.icon}</div>

            <Text
              size="subheading"
              variant="primary"
              color="white"
              className="mb-2 text-start"
            >
              {service.title}
            </Text>

            <ul className="space-y-2 text-left">
              {service.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-1">•</span>
                  <Text size="body" variant="secondary" color="subtle">
                    {feature}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
