import React from 'react';
import './Pillars.scss';

interface PillarCardProps {
  image: string;
  title: string;
  description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ image, title, description }) => {
  return (
    <div className="pillar-card">
      <div className="pillar-card__image-wrapper">
        <img src={image} alt={title} className="pillar-card__image" />
      </div>
      <h3 className="pillar-card__title">{title}</h3>
      <p className="pillar-card__description">{description}</p>
    </div>
  );
};

const Pillars: React.FC = () => {
  const pillarsData = [
    {
      image: '/images/pillars/pillar-nutrition.svg',
      title: 'Nutrition',
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illnesses.',
    },
    {
      image: '/images/pillars/pillar-physical-activity.svg',
      title: 'Physical activity',
      description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic diseases.',
    },
    {
      image: '/images/pillars/pillar-restorative-sleep.svg',
      title: 'Restorative sleep',
      description: 'Consistent, quality sleep is essential for cognitive function and physical health.',
    },
    {
      image: '/images/pillars/pillar-stress-management.svg',
      title: 'Stress management',
      description: 'Effective stress management techniques are crucial for mental well-being and overall health.',
    },
    {
      image: '/images/pillars/pillar-social-connection.svg',
      title: 'Social connection',
      description: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
    },
    {
      image: '/images/pillars/pillar-substance-abuse.svg',
      title: 'Substance Abuse',
      description: 'Avoiding tobacco, limiting alcohol, and abstaining from harmful substances are vital for long-term health.',
    },
  ];

  return (
    <section className="pillars">
      <div className="container">
        <h2 className="pillars__subtitle">HOW IT WORKS</h2>
        <h1 className="pillars__title">Lifestyle as medicine: The six pillars</h1>
        <div className="pillars__grid">
          {pillarsData.map((pillar, index) => (
            <PillarCard
              key={index}
              image={pillar.image}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars; 