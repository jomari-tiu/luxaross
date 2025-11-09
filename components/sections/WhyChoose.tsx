import Text from "../Text";

import {
  MdSchool,
  MdAccessTime,
  MdSecurity,
  MdEventSeat,
} from "react-icons/md";
import PageWrapper from "../PageWrapper";

const REASONS = [
  {
    icon: <MdSchool className="text-5xl text-accent" />,
    title: "Experience & Expertise",
    points: [
      "10+ years of professional driving experience",
      "Extensive knowledge of local routes and traffic patterns",
      "Defensive driving certified for maximum safety",
      "Background checked and fully insured",
    ],
  },
  {
    icon: <MdAccessTime className="text-5xl text-accent" />,
    title: "Reliability & Punctuality",
    points: [
      "Always on time - I arrive 5-10 minutes early",
      "Real-time traffic monitoring for optimal routing",
      "Backup plans for unexpected delays",
      "24/7 availability for your scheduling needs",
    ],
  },
  {
    icon: <MdSecurity className="text-5xl text-accent" />,
    title: "Privacy & Discretion",
    points: [
      "Confidentiality guaranteed - What happens in the vehicle stays private",
      "Professional boundaries maintained at all times",
      "Secure communication for sensitive arrangements",
      "Trusted by executives and private individuals",
    ],
  },
  {
    icon: <MdEventSeat className="text-5xl text-accent" />,
    title: "Comfort & Convenience",
    points: [
      "Door-to-door service - No parking hassles",
      "Complimentary bottled water available",
      "Phone chargers and USB ports available",
      "Flexible payment options accepted",
    ],
  },
];

export default function WhyChoose() {
  return (
    <PageWrapper size="narrowest" withYSpacing>
      <div className="mb-8">
        <Text size="heading" variant="primary" color="accent">
          Why Choose LuxaRoss?
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REASONS.map((reason, i) => (
          <div key={i}>
            <div className="flex items-center gap-4 mb-2">
              {reason.icon}
              <Text size="subheading" variant="primary" color="white">
                {reason.title}
              </Text>
            </div>

            <ul>
              {reason.points.map((point, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-1">•</span>
                  <Text size="body" variant="secondary" color="subtle">
                    {point}
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
