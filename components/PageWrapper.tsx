"use client";

import React from "react";
import classNames from "classnames";

type PageWrapperProps = {
  children: React.ReactNode;
  size?: keyof typeof SIZE;
  background?: keyof typeof BACKGROUND;
  withYSpacing?: boolean;
  backgroundImage?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const SIZE = {
  default: "w-[90%] mx-auto",
  wide: "w-full mx-auto",
  narrow: "w-[70%] mx-auto",
  narrowest: "w-[50%] mx-auto",
} as const;

const BACKGROUND = {
  default: "bg-foreground",
  darker: "bg-subtle-darker",
  light: "bg-subtle-light",
} as const;

export default function PageWrapper({
  children,
  size = "default",
  background = "default",
  withYSpacing = false,
  backgroundImage = "",
  id,
  ...props
}: PageWrapperProps) {
  return (
    <section
      className={classNames(
        "w-full flex items-center justify-center relative",
        BACKGROUND[background],
        withYSpacing && "py-20"
      )}
      id={id}
    >
      {backgroundImage && (
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80" />
        </div>
      )}
      <main
        {...props}
        className={classNames("relative z-10", SIZE[size], props.className)}
      >
        {children}
      </main>
    </section>
  );
}
