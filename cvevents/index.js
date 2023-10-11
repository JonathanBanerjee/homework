function createHTMLStructure() {
  // Create the main container
  const container = document.createElement("div");
  container.className = "flex-container";

  // Link Factory
  function createLink(href, imageSrc, imageAlt) {
    const link = document.createElement("a");
    link.href = href;
    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = imageAlt;
    image.width = 100;
    image.height = 100;
    link.appendChild(image);
    return link;
  }

  const linksDiv = document.createElement("div");
  linksDiv.className = "links";

  const linkedinLink = createLink(
    "https://www.linkedin.com/in/jonathanbanerjee",
    "linkedin.png",
    "linkedin"
  );
  const githubLink = createLink(
    "https://www.github.com/jonathanbanerjee",
    "github.png",
    "github"
  );

  linksDiv.appendChild(linkedinLink);
  linksDiv.appendChild(githubLink);

  // Adding the linksDiv to the container
  container.appendChild(linksDiv);

  // Create the profile div
  const profileDiv = document.createElement("div");
  profileDiv.className = "profile";

  const profileImage = document.createElement("img");
  profileImage.src = "jonathan.jpg";
  profileImage.alt = "Jonathan on a hike";
  profileImage.width = 200;
  profileImage.height = 200;

  profileDiv.appendChild(profileImage);

  // Add profileDiv to the container
  container.appendChild(profileDiv);

  // Create the header div
  const headerDiv = document.createElement("div");
  headerDiv.className = "header";

  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Jonathan Banerjee";
  const h2 = document.createElement("h2");
  h2.textContent = "DevOps & Software Engineer";

  const p1 = document.createElement("p");
  p1.textContent = "📞 +44 (0) 74411 255 765";
  const p2 = document.createElement("p");
  p2.innerHTML =
    '📧 <a href="mailto:jonathan.h.banerjee@gmail.com">jonathan.h.banerjee@gmail.com</a>';
  const p3 = document.createElement("p");
  p3.textContent = "📍London";

  header.appendChild(h1);
  header.appendChild(h2);
  header.appendChild(p1);
  header.appendChild(p2);
  header.appendChild(p3);

  headerDiv.appendChild(header);

  // Add headerDiv to the container
  container.appendChild(headerDiv);

  // Create the container div
  const mainContainerDiv = document.createElement("div");
  mainContainerDiv.className = "container";

  // Card Factory
  function createCard(title, content) {
    const card = document.createElement("div");
    card.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.innerHTML = content;

    card.appendChild(h3);
    card.appendChild(p);

    return card;
  }

  // Create the skills card
  const skillsCard = createCard(
    "DevOps Engineering Skills",
    "Languages and tools: Bash, Terraform, JavaScript<br />Linux operating system: permissions, filesystem, processes, services<br />Containers: Docker, Docker Compose, container networking<br />Networking and Security: Fundamentals of cryptography, TCP/IP, SSH, HTTP/HTTPS<br />Cloud Computing: Experience with AWS: IAM, VPC, EC2 (instances, Auto Scaling Groups, Load Balancing)<br />Additional Skills: PostgreSQL; GIT; Buildkite; JIRA and Confluence; HTML, CSS, Python; Notion"
  );

  // Create the education card
  const educationCard = createCard(
    "Education",
    "The Jump Digital School<br />A 22-week programme of in-depth DevOps Engineering Training (Sep 2022 - Mar 2023)<br />The Open University<br />BSc (Hons) Computing and IT (Sep 2017 - Oct 2021)"
  );

  // Create the certifications card
  const certificationsCard = createCard(
    "Certifications",
    "British Computing Society (BCS) DevOps Foundation Level<br />Amazon Web Services (AWS) Certified CloudPractitioner<br />NDX Linux Unhatched"
  );

  // Create the info card
  const infoCard = createCard(
    "Additional Information",
    "I have the right to work in the UK<br />Immediately available for interview"
  );

  // Create the experience card
  const experienceCard = createCard(
    "Professional Experience",
    "Seedrs LTD, London Corporate IT Administrator (Mar 2022 - present)<br />Automation including CI/CD pipelines on buildkite using bash<br />Updating wordpress blogs using Docker and git<br />Slack workflow management for creating tickets on Kanban boards in Jira and AWS CloudFormation.<br />Define and deliver against IT Service Level Agreements (SLA’s)"
  );

  // Append cards to the main container
  mainContainerDiv.appendChild(skillsCard);
  mainContainerDiv.appendChild(educationCard);
  mainContainerDiv.appendChild(certificationsCard);
  mainContainerDiv.appendChild(infoCard);
  mainContainerDiv.appendChild(experienceCard);

  // Add mainContainerDiv to the container
  container.appendChild(mainContainerDiv);

  // Create the small copyright paragraph
  const small = document.createElement("small");
  small.innerHTML = "&copy; Jonathan Banerjee 2023 All rights reserved";

  // Append the small paragraph to the main container
  container.appendChild(small);

  // Mouse Hover Effect on LinkedIn and GitHub Icons

  // Selecting the LinkedIn Icon
  const linkedinIcon = document.querySelector(
    '.links a[href="https://www.linkedin.com/in/jonathanbanerjee"] img'
  );

  // Selecting the GitHub Icon
  const githubIcon = document.querySelector(
    '.links a[href="https://www.github.com/jonathanbanerjee"] img'
  );

  // On mouseover, increase the brightness of the LinkedIn icon.
  linkedinLink.addEventListener("mouseover", () => {
    linkedinLink.style.filter = "brightness(1.5)";
  });

  // When the mouse is not on the LinkedIn icon, change the brightness back down to 1.
  linkedinLink.addEventListener("mouseout", () => {
    linkedinLink.style.filter = "brightness(1)";
  });

  // On mouseover, increase the brightness of the GitHub icon.
  githubLink.addEventListener("mouseover", () => {
    githubLink.style.filter = "brightness(1.5)";
  });

  // When the mouse is not on the GitHub icon, change the brightness back down to 1.
  githubLink.addEventListener("mouseout", () => {
    githubLink.style.filter = "brightness(1)";
  });

  // Return the main container element
  return container;
}

// Get the body element and append the generated HTML structure
const body = document.body;
body.appendChild(createHTMLStructure());
