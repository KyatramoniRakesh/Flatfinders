import React from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <>
          {!isLoaded && <Skeleton className={className} />}
          <img
            src={src}
            alt={alt}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onLoad={() => setIsLoaded(true)}
            onClick={onClick}
            loading="lazy"
          />
        </>
      ) : (
        <Skeleton className={className} />
      )}
    </div>
  );
};

export default ImageWithLoader;