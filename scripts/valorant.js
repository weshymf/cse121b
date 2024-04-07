document.addEventListener("DOMContentLoaded", function() {
    const url = "https://valorant-api.com/v1/agents";
    const agentImagesPath = "images/"; // Assuming images are in the same folder as your HTML file
    const agentsList = document.getElementById("agents-list");
  
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.data.forEach(agent => {
                const agentElement = document.createElement("div");
                agentElement.classList.add("agent");
  
                const agentName = agent.displayName;
                const agentImage = document.createElement("img");
                agentImage.src = `${agentImagesPath}${agentName}.png`;
                agentImage.alt = agentName;
                agentElement.appendChild(agentImage);
  
                const agentInfo = document.createElement("div");
                agentInfo.classList.add("agent-info");
  
                const agentNameElement = document.createElement("h3");
                agentNameElement.textContent = agentName;
                agentInfo.appendChild(agentNameElement);
  
                const agentRoleElement = document.createElement("p");
                agentRoleElement.textContent = "Role: " + agent.role.displayName;
                agentInfo.appendChild(agentRoleElement);
  
                const agentDescriptionElement = document.createElement("p");
                agentDescriptionElement.textContent = "Description: " + agent.description;
                agentInfo.appendChild(agentDescriptionElement);
  
                agentElement.appendChild(agentInfo);
                agentsList.appendChild(agentElement);
            });
        })
        .catch(error => {
            console.error("Error fetching agent data:", error);
        });
});
