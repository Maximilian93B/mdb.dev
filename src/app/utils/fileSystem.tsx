// Mock data for terminal component file system 

const fileSystem = {
    home: {
      type: 'directory',
      children: {
        projects: {
          type: 'directory',
          children: {
            project1: { type: 'file', content: 'Description of project 1' },
            project2: { type: 'file', content: 'Description of project 2' },
          },
        },
        skills: { type: 'file', content: 'JavaScript, TypeScript, React, Next.js, GraphQL, Node.js' },
      },
    },
  };
  