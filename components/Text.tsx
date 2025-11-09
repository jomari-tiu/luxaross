import classNames from "classnames";

const SIZE = {
  body: "text-md",
  heading: "text-4xl md:text-5xl lg:text-7xl",
  subheading: "text-2xl",
  caption: "text-sm",
} as const;

const COLOR = {
  white: "text-white",
  black: "text-black",
  accent: "text-accent",
  subtle: "text-subtle",
} as const;

const VARIANT = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
} as const;

const WEIGHT = {
  normal: "font-normal",
  bold: "font-bold",
} as const;

const TRACKING = {
  tight: "tracking-tight",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
} as const;

type TextProps = {
  children: React.ReactNode;
  size?: keyof typeof SIZE;
  variant?: keyof typeof VARIANT;
  weight?: keyof typeof WEIGHT;
  color?: keyof typeof COLOR;
  tracking?: keyof typeof TRACKING;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Text({
  children,
  size = "body",
  variant = "primary",
  weight = "normal",
  color = "white",
  tracking = "wide",
  ...props
}: TextProps) {
  return (
    <div
      {...props}
      className={classNames(
        SIZE[size],
        VARIANT[variant],
        WEIGHT[weight],
        COLOR[color],
        TRACKING[tracking],
        props.className
      )}
    >
      {children}
    </div>
  );
}
