interface StaticImageProps {
  alt: string
  className?: string
  [key: string]: any
}

export default function StaticImage({ alt, className, ...props }: StaticImageProps) {
  return <img src="/1.svg" alt={alt} className={className} {...props} />
}
