import Text from "../Text";

import {
  MdPhone,
  MdEmail,
  MdSchedule,
  MdSupportAgent,
  MdCheckCircle,
} from "react-icons/md";
import PageWrapper from "../PageWrapper";

const CONTACT_INFO = [
  {
    icon: <MdPhone className="text-lg text-accent" />,
    label: "Phone",
    value: "6502387459",
  },
  {
    icon: <MdEmail className="text-lg text-accent" />,
    label: "Email",
    value: "Arbd.fx21@gmail.com",
  },
];

const BUSINESS_HOURS = [
  "Monday - Sunday: Available by appointment",
  "24/7 Emergency Service: Available for established clients",
  "Response Time: Within 2 hours during business hours",
];

const FOLLOW_UP = [
  "Initial consultation available to discuss your specific needs",
  "Service customization based on your preferences",
  "Regular client check-ins to ensure continued satisfaction",
];

export default function Contact() {
  return (
    <PageWrapper id="contact" withYSpacing>
      <div className="mb-8">
        <Text size="heading" variant="primary" color="accent" className="mb-4">
          Contact Information
        </Text>
        <Text size="subheading" variant="primary" color="white">
          Ready to Experience Premium Private Transportation?
        </Text>
      </div>

      <div className="flex flex-wrap gap-8">
        <div className="space-y-4">
          {CONTACT_INFO.map((info, i) => (
            <div key={i} className="flex items-center gap-4">
              {info.icon}
              <div>
                <Text
                  size="caption"
                  variant="secondary"
                  color="accent"
                  weight="bold"
                >
                  {info.label}
                </Text>
                <Text size="body" variant="secondary" color="white">
                  {info.value}
                </Text>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours */}

        <div>
          <div className="flex items-center gap-4 mb-2">
            <MdSchedule className="text-3xl text-accent" />
            <Text size="subheading" variant="primary" color="white">
              Business Hours
            </Text>
          </div>

          <ul>
            {BUSINESS_HOURS.map((hour, i) => (
              <li key={i} className="flex items-center gap-3">
                <MdCheckCircle className="text-accent text-lg mt-1 shrink-0" />
                <Text size="body" variant="secondary" color="subtle">
                  {hour}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Up */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <MdSupportAgent className="text-4xl text-accent" />
            <Text size="subheading" variant="primary" color="white">
              Follow Up
            </Text>
          </div>

          <ul>
            {FOLLOW_UP.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <MdCheckCircle className="text-accent text-lg mt-1 shrink-0" />
                <Text size="body" variant="secondary" color="subtle">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
