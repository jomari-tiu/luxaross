import Text from "../Text";
import PageWrapper from "../PageWrapper";
import Button from "../Button";
import { BoxLogo } from "@/public/assets/images";
import Image from "next/image";

export default function ProfessionalCommitment() {
  return (
    <PageWrapper size="narrowest" withYSpacing>
      <div className="text-center space-y-2">
        <div className="flex justify-center mb-2">
          <Image src={BoxLogo} alt="Box Logo" width={200} height={200} />
        </div>

        <Text size="heading" variant="primary" color="accent">
          Professional Commitment
        </Text>

        <div className=" space-y-2">
          <Text
            size="body"
            variant="secondary"
            color="subtle"
            className="text-center italic leading-relaxed"
          >
            Whether it&apos;s an airport transfer, executive meeting, or private
            occasion, I deliver a refined, reliable, and confidential driving
            service designed around your comfort and standards.
          </Text>

          <Text
            size="body"
            variant="secondary"
            color="subtle"
            className="text-center italic leading-relaxed"
          >
            With me as your driver, you can expect discretion, elegance, and a
            flawless journey — from start to finish.
          </Text>
        </div>

        <div>
          <Text
            size="subheading"
            variant="primary"
            color="white"
            weight="bold"
            className="mb-4"
          >
            LuxaRoss - Your Trusted Private Driver
          </Text>
          <Text
            size="body"
            variant="secondary"
            color="accent"
            className="italic mb-8"
          >
            Experience the difference that true professionalism makes.
          </Text>

          <div className="flex justify-center gap-6">
            <Button color="accent" href="#contact">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
