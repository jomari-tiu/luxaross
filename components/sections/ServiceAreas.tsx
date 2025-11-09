import Text from "../Text";
import PageWrapper from "../PageWrapper";
import { MdLocationCity, MdMap } from "react-icons/md";

const PRIMARY_AREAS = [
  "Greater Metropolitan Area",
  "Airport corridors and surrounding regions",
  "Business districts and corporate centers",
  "Residential communities and private estates",
];

const EXTENDED_AREAS = [
  "Regional destinations within extended miles",
  "Special event locations throughout the state",
  "Custom routes based on your needs",
  "Advanced booking required for extended distances",
];

export default function ServiceAreas() {
  return (
    <PageWrapper size="narrow" withYSpacing>
      <Text size="heading" variant="primary" color="accent" className="mb-4">
        Service Areas
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <MdLocationCity className="text-5xl text-accent" />
            <Text size="subheading" variant="primary" color="white">
              Primary Service Area
            </Text>
          </div>

          <ul>
            {PRIMARY_AREAS.map((area, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1">•</span>
                <Text size="body" variant="secondary" color="subtle">
                  {area}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-4">
            <MdMap className="text-5xl text-accent" />
            <Text size="subheading" variant="primary" color="white">
              Extended Service
            </Text>
          </div>

          <ul>
            {EXTENDED_AREAS.map((area, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1">•</span>
                <Text size="body" variant="secondary" color="subtle">
                  {area}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
