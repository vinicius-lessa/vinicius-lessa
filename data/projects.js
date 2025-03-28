export default function projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with Vue.js and Node.js",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Express"],
      imageUrl: "/images/ecommerce-project.jpg",
      githubUrl: "https://github.com/username/ecommerce-project",
      liveUrl: "https://ecommerce-project.com",
      completed: "2023",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather application using OpenWeather API",
      technologies: ["JavaScript", "REST API", "HTML", "CSS"],
      imageUrl: "/images/weather-app.jpg",
      githubUrl: "https://github.com/username/weather-dashboard",
      liveUrl: "https://weather-dashboard.com",
      completed: "2023",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A Vue.js application for managing daily tasks and projects",
      technologies: ["Vue.js", "Vuex", "Firebase"],
      imageUrl: "/images/task-manager.jpg",
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://task-manager-app.com",
      completed: "2022",
    },
  ];

  return projects;
}