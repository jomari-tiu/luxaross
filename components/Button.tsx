import Link from "next/link";
import classNames from "classnames";

const BUTTON_CLASSES =
  "border border-accent px-4 py-2 tracking-wider font-bold cursor-pointer transition-all duration-300";
const BUTTON_COLOR = {
  black: " text-accent bg-black hover:bg-accent hover:text-black",
  accent: " text-black bg-accent hover:bg-black hover:text-accent",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  color?: "black" | "accent";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  href,
  children,
  color = "black",
  ...props
}: ButtonProps) {
  return (
    <>
      {href ? (
        <Link href={href || "#"}>
          <button
            {...props}
            className={classNames(BUTTON_CLASSES, BUTTON_COLOR[color])}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          {...props}
          className={classNames(BUTTON_CLASSES, BUTTON_COLOR[color])}
        >
          {children}
        </button>
      )}
    </>
  );
}
