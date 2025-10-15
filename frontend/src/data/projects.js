// Static project data - your awesome anime-themed projects!
export const projects = [
  {
    _id: '1',
    title: 'Dark Gothic Portfolio',
    description: 'A dark-themed gothic portfolio website with stunning visual effects and animations. Features a mysterious and elegant design perfect for creative professionals.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Gothic Design'],
    link: '/dark-gothic/index.html',
    imageURL: null,
    featured: true,
    underConstruction: true,
    order: 1,
    createdAt: '2024-01-15T00:00:00.000Z'
  },
  {
    _id: '2',
    title: 'Demon Slayer Theme',
    description: 'An anime-inspired website themed around Demon Slayer with beautiful character artwork and interactive elements. Perfect showcase of anime web design.',
    tags: ['HTML', 'CSS', 'Anime', 'Responsive'],
    link: '/demon-slayer/index.html',
    imageURL: null,
    featured: true,
    underConstruction: false,
    order: 2,
    createdAt: '2024-01-10T00:00:00.000Z'
  },
  {
    _id: '3',
    title: 'One Piece Adventure',
    description: 'A vibrant One Piece themed website featuring the Straw Hat crew with dynamic animations and immersive storytelling elements.',
    tags: ['HTML', 'CSS', 'One Piece', 'Animation'],
    link: '/one-piece/index.html',
    imageURL: null,
    featured: true,
    underConstruction: false,
    order: 3,
    createdAt: '2024-01-05T00:00:00.000Z'
  }
];

// You can also add categories if needed
export const projectCategories = [
  'All',
  'Web Development',
  'Anime Themes',
  'Interactive',
  'React Projects'
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Helper function to get projects by tag
export const getProjectsByTag = (tag) => {
  return projects.filter(project => 
    project.tags.some(projectTag => 
      projectTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};
