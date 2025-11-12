import { RossDiaz } from "@/public/assets/images";
import Text from "../Text";
import SideImage from "../SideImage";

export default function About() {
  return (
    <SideImage
      id="about"
      src={RossDiaz.src}
      alt="About Me"
      imagePosition="left"
      content={
        <div className="space-y-4">
          <Text size="heading" variant="primary" color="accent">
            About Me
          </Text>
          <Text size="body" variant="secondary" color="subtle">
            My name is Adrian Ross Diaz, a professional private driver with over
            a decade of experience behind the wheel. Born in the Philippines and
            now proudly based in the United States since 2016, I combine
            precision, courtesy, and discretion to deliver a first-class driving
            experience for every client.
          </Text>
          <Text size="body" variant="secondary" color="subtle">
            With more than 10 years of professional driving experience, I
            understand that transportation is more than just getting from point
            A to point B—it&apos;s about creating a seamless, comfortable, and
            reliable experience that reflects your standards and respects your
            time.
          </Text>
        </div>
      }
    />
  );
}
