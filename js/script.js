const projects = [
    {
    title: "AUTONOMOUS NAVIGATION",
    img: "images/page3_img3.jpeg",
    description: " This project focuses on developing a fully autonomous mobile robot using the TortoiseBot platform. The objective is to enable the robot to explore an unknown environment, create a real-time map using SLAM (Simultaneous Localization and Mapping), and navigate eficiently to user defined goals using path planning algorithms within the ROS (Robot Operating System) framework."
  },
  {
    title: "Hexapod Robot",
    img: "images/page9_img3.jpeg",
    description: "This project focuses on designing and testing the control and locomotion system of a hexapod robot. The robot utilizes an RC-based communication system to execute smooth walking and obstacle-climbing maneuvers. Various gait patterns are implemented for efficient movement and enhanced stability on uneven terrain. The ultimate goal is to develop a terrain adaptive hexapod suitable for real-world applications and research in robotics and mobility."
  },
  {
    title: "Ball Balancing Bot",
    img: "images/page6_img3.jpeg",
    description: "In this project, we will build a robotic system that can balance a ball on a flat platform using two servo motors and a Raspberry Pi. A camera mounted above the platform will track the ball’s position in real time using computer vision, and a PID control algorithm will adjust the platform angle to keep the ball centered."
  },
  {
    title: "Mechanical Turk",
    img: "images/page12_img3.jpeg",
    description: "The Mechanical Turk was historically a machine that appeared to play chess autonomously, but in reality, it had a chess master hidden underneath, secretly controlling its movements. We, of course, won’t be hiding a chess master under a table ,rather we will be building a robot that actually plays chess."
  },
  
  {
    title: "StepXplorer",
    img: "images/page15_img3.jpeg",
    description: "In this project, we will build a stair climbing bot. It can detect and climb stairs on its own using ultrasonic sensors.The robot will also have a strong and stable platform to carry things while moving. It will stay balanced even when going over rough or uneven surfaces."
  }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `
    <img src="${project.img}" alt="${project.title}">
    <h4>${project.title}</h4>
    <p>${project.description}</p>
  `;
  container.appendChild(div);
});
