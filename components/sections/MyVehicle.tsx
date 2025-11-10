import Text from "../Text";
import { SideInterior } from "@/public/assets/images";
import SideImage from "../SideImage";
import classNames from "classnames";
import { SiMyspace } from "react-icons/si";
import {
  MdOutlineAir,
  MdOutlineCleanHands,
  MdOutlineSafetyDivider,
} from "react-icons/md";
import { MdOutlineLuggage } from "react-icons/md";
import { FaCar } from "react-icons/fa";

const SPECS = [
  {
    icon: <SiMyspace className="text-5xl text-accent" />,
    text: "Spacious and comfortable interior for up to 4 passengers",
  },
  {
    icon: <MdOutlineSafetyDivider className="text-5xl text-accent" />,
    text: "Advanced safety features for your peace of mind",
  },
  {
    icon: <FaCar className="text-5xl text-accent" />,
    text: "Smooth, quiet ride for a refined travel experience",
  },
  {
    icon: <MdOutlineLuggage className="text-5xl text-accent" />,
    text: "Ample luggage space for airport transfers and extended trips",
  },
  {
    icon: <MdOutlineAir className="text-5xl text-accent" />,
    text: "Climate control for optimal comfort in any weather",
  },
  {
    icon: <MdOutlineCleanHands className="text-5xl text-accent" />,
    text: "Professional presentation — always immaculate inside and out",
    highlight: true,
  },
];

export default function MyVehicle() {
  return (
    <SideImage
      src={SideInterior.src}
      alt="Front Interior"
      imagePosition="right"
      content={
        <>
          <div className=" mb-8">
            <Text
              size="subheading"
              variant="primary"
              color="subtle"
              className="text-center"
            >
              I DRIVE A
            </Text>
            <Text
              size="heading"
              variant="primary"
              color="accent"
              className="text-center"
            >
              Black Honda
            </Text>
            <Text
              size="heading"
              variant="primary"
              color="accent"
              className="text-center"
            >
              CR-V EX-L
            </Text>
          </div>
          <ul className=" flex flex-wrap gap-2 w-full justify-center">
            {SPECS.map((item, i) => (
              <li
                key={i}
                className={classNames(
                  "flex gap-2 w-48 h-48 p-2 items-center text-center flex-col justify-center",
                  i % 2 === 0 ? "bg-[#3d3d3d]" : "bg-subtle-darker"
                )}
              >
                {item.icon}
                <Text size="body" variant="secondary" color="subtle">
                  {item.text}
                </Text>
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}
