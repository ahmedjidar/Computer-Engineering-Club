import React from "react";
import { useNavigate } from "react-router-dom";
import '../../../../assets/styles/domaine.css'

const DomainCard = ({ domain, color, description, onClick }) => (
  <div className={`cardStyle ${color}`} onClick={onClick}>
    <div className="tools">
      <div className="circle">
        <span className="red box"></span>
      </div>
      <div className="circle">
        <span className="yellow box"></span>
      </div>
      <div className="circle">
        <span className="green box"></span>
      </div>
    </div>
    <div className="card__content">
      <h2 className="domaineTitle">{domain}</h2>
      <p>{description}</p>
    </div>
  </div>
);

function Roadmaps() {
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const cardData = [
    {
      domainename: 'programming',
      domain: 'Programming Languages',
      color: 'card-primary',
      description: 'Mastering various programming languages for software development.',
    },
    {
      domainename: 'webdev',
      domain: 'Web Development',
      color: 'card-success',
      description: 'Building both front-end and back-end components for web applications.',
    },
    {
      domainename: 'mobile',
      domain: 'Mobile Development',
      color: 'card-info',
      description: 'Creating applications for mobile platforms like iOS and Android.',
    },
    {
      domainename: 'data',
      domain: 'Database Management',
      color: 'card-warning',
      description: 'Working with relational and NoSQL databases to store and retrieve data.',
    },
    {
      domainename: 'cloud',
      domain: 'Cloud Computing',
      color: 'card-danger',
      description: 'Utilizing cloud platforms to deploy and scale applications.',
    },
    {
      domainename: 'devops',
      domain: 'DevOps',
      color: 'card-secondary',
      description: 'Implementing CI/CD, version control, and managing infrastructure as code.',
    },
    {
      domainename: 'archi',
      domain: 'Software Architecture',
      color: 'card-dark',
      description: 'Designing scalable and maintainable software systems using architectural patterns.',
    },
    {
      domainename: 'algo',
      domain: 'Algorithms',
      color: 'card-primary-dark',
      description: 'Efficient problem-solving using algorithms and data structures.',
    },
    // Add more domains as needed
  ];

  return (
    <div className='containerDomaines'>
      {cardData.map((data, index) => (
        <DomainCard
          key={index}
          domain={data.domain}
          color={data.color}
          description={data.description}
          onClick={() => navigate(`/user/roadmaps/${data.domainename}`)}
        />
      ))}
    </div>
  );
}

export default Roadmaps;
