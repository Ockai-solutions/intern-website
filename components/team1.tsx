import { cn } from "cn";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
interface TeamMember {
  id: string;
  name: string | React.ReactNode;
  role: string;
  avatar: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
}

const Team1 = ({
  heading = "Team",
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    {
      id: "member-1",
      name: "Sarah Chen",
      role: "CEO & Founder",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
    {
      id: "member-2",
      name: "Marcus Rodriguez",
      role: "CTO",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    }
  ],
  className,
}: Team1Props) => {
  return (
    <section className={cn("py-16 m-auto", className)}>
      <div className="container flex flex-col items-center text-center  m-auto">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          {description}
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-2 m-auto">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-40 border md:mb-5 lg:size-48">
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{member.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{member.name}</p>
            <p className="text-center text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team1 };
