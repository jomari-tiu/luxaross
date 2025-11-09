import { CarSideView } from "@/public/assets/images";
import Text from "../Text";
import Button from "../Button";

export default function HeroSection() {
  return (
    <section className="w-full h-screen relative flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${CarSideView.src})` }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
      </div>
      <div className=" relative z-10 text-center text-white w-10/12 max-w-[1024px] mx-auto">
        <Text
          size="heading"
          weight="bold"
          variant="primary"
          color="accent"
          tracking="widest"
        >
          Your Premier Private Driving Experience
        </Text>
        <Text
          size="body"
          variant="secondary"
          className="mt-8"
          tracking="widest"
        >
          Precision • Courtesy • Discretion
        </Text>
        <div className="mt-8 flex items-center justify-center gap-10">
          <Button href="#booking-rates" color="accent">
            Book Now
          </Button>
          <Button href="#about">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
