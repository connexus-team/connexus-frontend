import Image from "next/image";
import React, { useState } from "react";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackSrc: string;
  style?: React.CSSProperties;
};

const ImageWithFallback: React.FC<ImageProps> = (props) => {
  const { src, fallbackSrc, className, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  return (
    <Image
      {...rest}
      src={imgSrc}
      className={className}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      onLoad={() => {
        setLoading(false);
      }}
      style={{ opacity: loading ? 0.5 : 1, ...props.style }}
      loading="lazy"
    />
  );
};

export { ImageWithFallback };
