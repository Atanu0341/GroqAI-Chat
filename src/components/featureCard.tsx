import React from 'react';

// Define the props type
interface FeatureCardProps {
  icon: React.ElementType; // Allow any React component to be passed as icon
  title: string; // Title is a string
  description: string; // Description is a string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-primary" /> {/* Render the icon as a component */}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default FeatureCard;
