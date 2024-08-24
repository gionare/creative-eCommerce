declare module "react-image-zooom" {
  import * as React from "react";

  interface ImageZoomProps {
    src: string;
    alt?: string;
    zoom?: number;
    zoomScale?: number;
    className?: string;
  }

  const ImageZoom: React.FC<ImageZoomProps>;
  export default ImageZoom;
}
