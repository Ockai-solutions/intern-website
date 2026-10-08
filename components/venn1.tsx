import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from 'next/link'

type VennSet = {
  label: string;
  className?: string;
  color?: string;
  textColor?: string;
};

interface ButtonConfig {
  text: string;
  url: string;
  icon?: React.ReactNode;
}

interface Buttons {
  primary?: ButtonConfig;
  secondary?: ButtonConfig;
}

interface FeatureSingleFocusProps {
  heading: string;
  description: React.ReactNode;
  buttons?: Buttons;
  className?: string;

  // Venn diagram props
  sets: VennSet[];
  size?: number;
  overlap?: number;
  horizontalOverlap?: number;
  centerLabel?: string;
  centerTextColor?: string;
}

type Props = Partial<FeatureSingleFocusProps>;

const defaultProps: FeatureSingleFocusProps = {
  heading: "Feature blocks ready to ship with shadcn/ui",
  description:
    "Shadcnblocks ships production-ready React sections built with Tailwind CSS and shadcn/ui. Pick a block, preview it with your theme, then paste it in or install with the shadcn CLI.",
  buttons: {
    secondary: {
      text: "View feature",
      url: "https://www.shadcnblocks.com",
    },
  },
  sets: [
    {
      label: "Design",
      color: "hsl(var(--primary))",
      textColor: "hsl(var(--primary-foreground))",
    },
    {
      label: "Development",
      color: "hsl(var(--secondary))",
      textColor: "hsl(var(--secondary-foreground))",
    },
    {
      label: "Strategy",
      color: "hsl(var(--accent))",
      textColor: "hsl(var(--accent-foreground))",
    },
  ],
  size: 280,
  overlap: 35,
  horizontalOverlap: 35,
};

const defaultColors = [
  "bg-primary",
  "bg-secondary",
  "bg-accent",
];

function VennDiagram({
  sets,
  size = 280,
  overlap = 35,
  horizontalOverlap = 35,
  className,
  centerLabel,
  centerTextColor,
}: {
  sets: VennSet[];
  size?: number;
  overlap?: number;
  horizontalOverlap?: number;
  className?: string;
  centerLabel?: string;
  centerTextColor?: string;
}) {
  if (sets.length < 2 || sets.length > 3) {
    throw new Error("VennDiagram requires 2 or 3 sets.");
  }

  const circleSize = size * 0.58;

  const positions =
    sets.length === 2
      ? [
        { x: size * 0.28, y: size * 0.5 },
        { x: size * 0.52, y: size * 0.5 },
      ]
      : [
        { x: size * 0.35, y: size * 0.35 },
        { x: size * 0.65, y: size * 0.35 },
        { x: size * 0.5, y: size * 0.62 },
      ];

  return (
    <div
      className={cn(
        "relative shrink-0",
        "w-full max-w-[280px] aspect-square",
        className
      )}
      style={{
        /*
         * Keep the original `size` as the maximum size,
         * but let CSS determine the actual responsive width.
         */
        maxWidth: size,
      }}
      role="img"
      aria-label={`Venn diagram: ${sets.map((s) => s.label).join(", ")}`}
    >
      {sets.map((set, index) => {
        const position = positions[index];

        const translateX =
          sets.length === 2
            ? index === 0
              ? -overlap
              : overlap
            : index === 0
              ? -horizontalOverlap
              : index === 1
                ? horizontalOverlap
                : 0;

        const translateY =
          sets.length === 3 && index === 2
            ? overlap * 0.15
            : 0;

        const colorClass = set.color
          ? undefined
          : defaultColors[index];

        /*
         * Everything inside the diagram is positioned using
         * percentages of the original `size`.
         *
         * This allows the entire diagram to scale with its
         * responsive container.
         */
        const left = `${((position.x - circleSize / 2) / size) * 100}%`;
        const top = `${((position.y - circleSize / 2) / size) * 100}%`;

        const circleWidth = `${(circleSize / size) * 100}%`;

        return (
          <div
            key={`${set.label}-${index}`}
            className={cn(
              "absolute flex items-center justify-center",
              "rounded-full border-2 border-background/50",
              "text-sm font-medium",
              set.className
            )}
            style={{
              width: circleWidth,
              aspectRatio: "1",
              left,
              top,

              /*
               * Scale the overlap along with the diagram.
               */
              transform: `translate(
                ${translateX / size * 100}%,
                ${translateY / size * 100}%
              )`,

              color: set.textColor,
            }}
          >
            <div
              className={cn(
                "absolute inset-0 rounded-full opacity-55",
                colorClass
              )}
              style={{
                backgroundColor: set.color,
              }}
            />

            <span className="relative z-10 px-2 text-center text-base font-medium drop-shadow-sm sm:text-lg">
              {set.label}
            </span>
          </div>
        );
      })}

      {centerLabel && (
        <Link href="/leistungen">
          <div
            className={cn(
              "absolute left-1/2 top-1/2",
              "-translate-x-1/2 -translate-y-1/2",
              "max-w-[35%] text-center text-sm font-semibold",
              "rounded-sm bg-card p-2 sm:p-4"
            )}
            style={{
              color: centerTextColor,
            }}
          >
            {centerLabel}
          </div>
        </Link>
      )}
    </div>
  );
}

const VennDiagramFeature = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    className,
    sets,
    size,
    overlap,
    horizontalOverlap,
    centerLabel,
    centerTextColor,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn(
        "w-full overflow-hidden py-16",
        className
      )}
    >
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Diagram */}
          <div className="flex min-w-0 w-full justify-center">
            <VennDiagram
              sets={sets}
              size={size}
              overlap={overlap}
              horizontalOverlap={horizontalOverlap}
              centerLabel={centerLabel}
              centerTextColor={centerTextColor}
              className="max-w-full"
            />
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mb-6 max-w-full text-balance text-4xl font-semibold tracking-tight lg:text-5xl">
              {heading}
            </h2>

            {description && (
              <div className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
                {description}
              </div>
            )}

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button
                  render={
                    <a
                      href={buttons.primary.url}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  {buttons.primary.icon}
                  {buttons.primary.text}
                </Button>
              )}

              {buttons?.secondary && (
                <Button
                  variant="outline"
                  render={
                    <a
                      href={buttons.secondary.url}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  {buttons.secondary.icon}
                  {buttons.secondary.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { VennDiagramFeature };