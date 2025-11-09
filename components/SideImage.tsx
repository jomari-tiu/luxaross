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
      className={classNames(imagePosition === "left" ? "pr-[5%]" : "pl-[5%]")}
    >
      <div className="flex items-center justify-between gap-[5%]">
        {imagePosition === "right" ? (
          <div className="w-1/2 space-y-4">{content}</div>
        ) : null}
        <div className={classNames("w-1/2")}>
          <Image src={src} alt={alt} width={1000} height={1000} />
        </div>
        {imagePosition === "left" ? (
          <div className="w-1/2 space-y-4">{content}</div>
        ) : null}
      </div>
    </PageWrapper>
  );
}
