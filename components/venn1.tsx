import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
      className={cn("relative shrink-0", className)}
      style={{
        width: size,
        height: size,
      }}
      role="img"
      aria-label={`Venn diagram: ${sets.map((s) => s.label).join(", ")}`}
    >
      {sets.map((set, index) => {
        const position = positions[index];

        // Horizontal movement:
        // - 2 circles: uses the existing overlap prop
        // - 3 circles: top two circles use horizontalOverlap
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

        // Vertical movement:
        // - Only the bottom circle moves for 3 circles
        const translateY =
          sets.length === 3 && index === 2
            ? overlap * 0.15
            : 0;

        const colorClass = set.color
          ? undefined
          : defaultColors[index];

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
              width: circleSize,
              height: circleSize,
              left: position.x - circleSize / 2,
              top: position.y - circleSize / 2,
              transform: `translate(${translateX}px, ${translateY}px)`,
              color: set.textColor,
            }}
          >
            {/* Transparent background only */}
            <div
              className={cn(
                "absolute inset-0 rounded-full opacity-55",
                colorClass
              )}
              style={{
                backgroundColor: set.color,
              }}
            />

            {/* Fully opaque text */}
            <span className="relative z-10 drop-shadow-sm text-lg">
              {set.label}
            </span>
          </div>
        );
      })}

      {centerLabel && (
        <div
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2",
            "-translate-x-1/2 -translate-y-8",
            "text-center text-sm font-semibold",
            "bg-card p-4 rounded-sm"
          )}
          style={{
            color: centerTextColor,
          }}
        >
          {centerLabel}
        </div>
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
    <section className={cn("w-full py-16", className)}>
      <div className="container m-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex justify-center">
            <VennDiagram
              sets={sets}
              size={size}
              overlap={overlap}
              horizontalOverlap={horizontalOverlap}
              centerLabel={centerLabel}
              centerTextColor={centerTextColor}
            />
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mb-6 text-balance text-4xl font-semibold tracking-tight lg:text-5xl">
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
