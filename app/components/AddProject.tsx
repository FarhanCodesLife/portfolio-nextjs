'use client'
import { useState } from 'react';

const AddProject = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    githubLink: '',
    liveLink: '',
    technologies: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your API call or state management logic here
    console.log('Project data:', project);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Add New Project</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Project Title</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">GitHub Link</label>
            <input
              type="url"
              name="githubLink"
              value={project.githubLink}
              onChange={handleChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Live Link</label>
            <input
              type="url"
              name="liveLink"
              value={project.liveLink}
              onChange={handleChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Technologies (comma-separated)</label>
            <input
              type="text"
              name="technologies"
              value={project.technologies}
              onChange={handleChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject; 