import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ProjectCardProps {
  svgImage: string;
  title: string;
  description: string;
  hoverTriggerImg: string;
  hoverTriggerWidth: number; // Width for the hover trigger image
  hoverTriggerHeight: number; // Height for the hover trigger image
}

const ProjectCards: React.FC<ProjectCardProps> = ({ 
  svgImage, 
  title, 
  description, 
  hoverTriggerImg, 
  hoverTriggerWidth, 
  hoverTriggerHeight 
}) => {
  return (
    <div className="project-card">
      <HoverCard>
        <HoverCardTrigger>
          <img 
            src={hoverTriggerImg} 
            alt="Hover Trigger" 
            width={hoverTriggerWidth} 
            height={hoverTriggerHeight} 
            style={{ width: '100%', height: 'auto' }}
          />
        </HoverCardTrigger>
        <HoverCardContent>
          <img src={svgImage} alt={title} style={{ width: '100%', height: 'auto' }}/>
          <h2>{title}</h2>
          <p>{description}</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default ProjectCards;

