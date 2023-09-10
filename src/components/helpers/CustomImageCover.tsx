import Image from "next/image";
import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const CustomImageCover: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  const [imageSrc, setImageSrc] = React.useState(src);

  React.useEffect(() => {
    const checkImage = async (src: string) => {
      try {
        const response = await fetch(src, { method: "HEAD" });
        console.log("Image", response.body);
        if (!response.ok) {
          setImageSrc(
            "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          );
        }
      } catch (error) {
        setImageSrc(
          "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        );
      }
    };

    checkImage(src);
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export { CustomImageCover };
