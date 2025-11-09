import Text from "../Text";
import PageWrapper from "../PageWrapper";
import classNames from "classnames";
import { MdFormatQuote } from "react-icons/md";

const TESTIMONIALS = [
  {
    quote:
      "Adrian is the epitome of professionalism. Punctual, discrete, and his vehicle is always immaculate. I wouldn't trust anyone else with my transportation needs.",
    author: "[Client Name]",
    title: "Executive",
  },
  {
    quote:
      "After years of unreliable drivers, finding Adrian was a game-changer. He understands the importance of privacy and delivers exceptional service every time.",
    author: "[Client Name]",
    title: "Private Individual",
  },
];

export default function Testimonials() {
  return (
    <PageWrapper size="narrow" withYSpacing>
      <div className="text-center mb-4">
        <Text size="heading" variant="primary" color="accent">
          Testimonials
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <div key={i} className={classNames("relative")}>
            <MdFormatQuote className="text-6xl text-accent opacity-20 absolute top-0 left-0" />

            <div className="relative z-10 pt-8">
              <Text
                size="body"
                variant="secondary"
                color="subtle"
                className="italic mb-6 leading-relaxed"
              >
                &quot;{testimonial.quote}&quot;
              </Text>

              <div className="text-right">
                <Text size="body" variant="primary" color="white" weight="bold">
                  {testimonial.author}
                </Text>
                <Text size="caption" variant="secondary" color="accent">
                  {testimonial.title}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
