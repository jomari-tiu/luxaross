import Text from "../Text";
import classNames from "classnames";
import {
  MdMusicOff,
  MdSpeakerNotesOff,
  MdAccessTime,
  MdLockOutline,
  MdLocalCarWash,
  MdBusinessCenter,
} from "react-icons/md";
import PageWrapper from "../PageWrapper";
import { FrontInterior } from "@/public/assets/images";

const STANDARDS = [
  {
    icon: <MdMusicOff className="text-4xl text-accent" />,
    title: "No music unless requested",
    description: "Your preferences always come first",
  },
  {
    icon: <MdSpeakerNotesOff className="text-4xl text-accent" />,
    title: "No unnecessary conversation",
    description:
      "I only respond to your questions, maintaining a professional atmosphere",
  },
  {
    icon: <MdAccessTime className="text-4xl text-accent" />,
    title: "Always punctual and professionally presented",
    description: "Reliability you can count on",
  },
  {
    icon: <MdLockOutline className="text-4xl text-accent" />,
    title: "Complete discretion",
    description: "Your privacy and confidentiality are paramount",
  },
  {
    icon: <MdLocalCarWash className="text-4xl text-accent" />,
    title: "Immaculate vehicle",
    description: "Freshly cleaned and detailed before every service",
  },
  {
    icon: <MdBusinessCenter className="text-4xl text-accent" />,
    title: "Professional attire",
    description: "Always dressed appropriately for your occasion",
  },
];

export default function ServiceStandards() {
  return (
    <PageWrapper
      size="narrowest"
      withYSpacing
      background="light"
      backgroundImage={FrontInterior.src}
    >
      <div className="mb-8 text-center">
        <Text size="heading" variant="primary" color="accent">
          Service Standards
        </Text>
        <Text size="body" variant="secondary" color="subtle" className="mt-4">
          My commitment is simple — to ensure you arrive safely, comfortably,
          and on time, every single trip.
        </Text>
      </div>

      <div className="space-y-6">
        <Text
          size="subheading"
          variant="primary"
          color="accent"
          className="mb-2"
          weight="bold"
        >
          The LuxaRoss Experience
        </Text>

        <div className="grid grid-cols-1 gap-4">
          {STANDARDS.map((standard, i) => (
            <div
              key={i}
              className={classNames(
                "flex items-start gap-4 p-4",
                i % 2 === 0 ? "bg-subtle-light/85" : "bg-subtle-darker/85"
              )}
            >
              <div className="shrink-0 mt-1">{standard.icon}</div>
              <div>
                <Text size="body" variant="primary" color="white" weight="bold">
                  {standard.title}
                </Text>
                <Text
                  size="caption"
                  variant="secondary"
                  color="subtle"
                  className="mt-1"
                >
                  {standard.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
