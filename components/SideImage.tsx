import classNames from "classnames";
import Image from "next/image";
import PageWrapper from "./PageWrapper";

type SideImageProps = {
  src: string;
  alt: string;
  imagePosition: "left" | "right";
  content: React.ReactNode;
  id?: string;
};

export default function SideImage({
  src,
  alt,
  imagePosition,
  content,
  id,
}: SideImageProps) {
  return (
    <PageWrapper
      size="wide"
      id={id}
      className={classNames(
        imagePosition === "left" ? "lg:pr-[5%]" : "lg:pl-[5%]"
      )}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[5%]">
        {imagePosition === "right" ? (
          <div className="lg:w-1/2 w-[90%] space-y-4 py-10">{content}</div>
        ) : null}
        <div className={classNames(" w-full lg:w-1/2 lg:h-auto h-48")}>
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        {imagePosition === "left" ? (
          <div className="lg:w-1/2 w-[90%] space-y-4 py-10">{content}</div>
        ) : null}
      </div>
    </PageWrapper>
  );
}
