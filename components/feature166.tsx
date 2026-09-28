import { cn } from "cn";
import React from "react";

interface Feature {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

interface Feature166Props {
  heading: string | React.ReactNode;
  description: string;
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
  feature4: Feature;
  className?: string;
}

type Props = Partial<Feature166Props>;

const defaultProps: Feature166Props = {
  heading: "Blocks built with Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  feature1: {
    title: "UI/UX Design",
    description:
      "Creating intuitive user experiences with modern interface design principles and user-centered methodologies.",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "UI/UX Design",
    },
  },
  feature2: {
    title: "Responsive Development",
    description:
      "Building websites that look and function perfectly across all devices and screen sizes.",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      alt: "Responsive Development",
    },
  },
  feature3: {
    title: "Brand Integration",
    description:
      "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      alt: "Brand Integration",
    },
  },
  feature4: {
    title: "Performance Optimization",
    description:
      "Ensuring fast loading times and smooth performance through optimized code and assets.",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      alt: "Performance Optimization",
    },
  },
};

const Feature166 = (props: Props) => {
  const {
    heading,
    description,
    feature1,
    feature2,
    feature3,
    feature4,
    className,
  } = { ...defaultProps, ...props };

  return (
    <section className={cn("py-16 m-auto", className)}>
      <div className="container m-auto">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h2 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground text-center text-lg font-medium md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-b-0 lg:border-r">
                <h3 className="text-xl font-semibold">{feature1.title}</h3>
                <p className="text-muted-foreground">{feature1.description}</p>
                <img
                  src={feature1.image.src}
                  alt={feature1.image.alt}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h3 className="text-xl font-semibold">{feature2.title}</h3>
                <p className="text-muted-foreground">{feature2.description}</p>
                <img
                  src={feature2.image.src}
                  alt={feature2.image.alt}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-b-0 lg:border-r">
                <h3 className="text-xl font-semibold">{feature3.title}</h3>
                <p className="text-muted-foreground">{feature3.description}</p>
                <img
                  src={feature3.image.src}
                  alt={feature3.image.alt}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h3 className="text-xl font-semibold">{feature4.title}</h3>
                <p className="text-muted-foreground">{feature4.description}</p>
                <img
                  src={feature4.image.src}
                  alt={feature4.image.alt}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature166 };
