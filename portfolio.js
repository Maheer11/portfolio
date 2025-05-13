import React from 'react';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with React and styled-components.',
        link: 'https://yourportfolio.com',
        image: 'https://via.placeholder.com/300x200?text=Portfolio+Website'
    },
    {
        title: 'E-commerce App',
        description: 'A full-stack e-commerce application using Node.js and MongoDB.',
        link: 'https://ecommerceapp.com',
        image: 'https://via.placeholder.com/300x200?text=E-commerce+App'
    },
    {
        title: 'Blog Platform',
        description: 'A modern blog platform with Markdown support and user authentication.',
        link: 'https://blogplatform.com',
        image: 'https://via.placeholder.com/300x200?text=Blog+Platform'
    }
];

const ProjectDisplay = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {projects.map((project, idx) => (
            <div key={idx} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                width: '300px',
                padding: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '4px' }} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        ))}
    </div>
);

export default ProjectDisplay;