  
const quizData = {
  name: "",
  goals: [],
  barriers: [],
  eatingHabits: {},
};
  const goalOptions = [
  "To be healthier Overall",
  "Get to a healthy weight",
  "Maintain a healthy weight",
  "Increase my energy",
  "Feel Better about myself",
  "Reduce stress",
  "Help get my family on track with healthy eating",
  "Healthy Weight Lose"
];

const barrierOptions = [
  "Lack of Time",
  "No Support System",
  "Lack of Knowledge",
  "High Cravings",
  "Lack of Motivation",
  "Family Habits",
  "Unclear Goals",
  "Limited Access"
];
const foodGroups = [
  {
      name: "Fruits",
    questionHTML: `
      <h2 class="main-heading">Now let’s look into what you’re currently eating</h2>
      <h2 class="heading">How often do you eat from the Fruit Group?</h2>
      <div class="facts"><p><span style="color: #ff8c79;">Did you know? </span>The Fruit group include as any fruit and 100% fruit juice</p>
      </div>
      <div id="fruits-options" class="food-group-options">
        <div class="food-option" onclick="toggleSelection(this, true, '#fruits-options .food-option')">
          <img src="/assets/images/fruit group icon-quiz.png" alt="Fruits" />
          <div class="food-label">Never / Rarely</div>
          <div class="food-frequency">0–2 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#fruits-options .food-option')">
          <img src="/assets/images/fruit group icon-quiz.png" alt="Fruits" />
          <div class="food-label">Occasionally</div>
          <div class="food-frequency">3–4 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#fruits-options .food-option')">
          <img src="/assets/images/fruit group icon-quiz.png" alt="Fruits" />
          <div class="food-label">Often / Always</div>
          <div class="food-frequency">5–7 days per week</div>
        </div>
      </div>
    `
  },
  {
      name: "Vegetables",
    questionHTML: `
      <h2 class="heading">How often do you eat from the vegetable Group?</h2>
              <div class="facts"><p><span style="color: #ff8c79;">Did you know? </span>The Fruit group include as any fruit and 100% fruit juice</p>
      </div>
      <div id="vegetables-options" class="food-group-options">
        <div class="food-option" onclick="toggleSelection(this, true, '#vegetables-options .food-option')">
          <img src="/assets/images/vegetable icon quiz.png" alt="Vegetables" />
          <div class="food-label">Never / Rarely</div>
          <div class="food-frequency">0–2 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#vegetables-options .food-option')">
          <img src="/assets/images/vegetable icon quiz.png" alt="Vegetables" />
          <div class="food-label">Occasionally</div>
          <div class="food-frequency">3–4 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#vegetables-options .food-option')">
          <img src="/assets/images/vegetable icon quiz.png" alt="Vegetables" />
          <div class="food-label">Often / Always</div>
          <div class="food-frequency">5–7 days per week</div>
        </div>
      </div>
    `
  },
  {
      name: "Grains",
    questionHTML: `
      <h2 class="heading">How often do you eat from the grain Group?</h2>
              <div class="facts"><p><span style="color: #ff8c79;">Did you know? </span>The Fruit group include as any fruit and 100% fruit juice</p>
      </div>
      <div id="grains-options" class="food-group-options">
        <div class="food-option" onclick="toggleSelection(this, true, '#grains-options .food-option')">
          <img src="/assets/images/grain icon quiz.png" alt="Grains" />
          <div class="food-label">Never / Rarely</div>
          <div class="food-frequency">0–2 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#grains-options .food-option')">
          <img src="/assets/images/grain icon quiz.png" alt="Grains" />
          <div class="food-label">Occasionally</div>
          <div class="food-frequency">3–4 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#grains-options .food-option')">
          <img src="/assets/images/grain icon quiz.png" alt="Grains" />
          <div class="food-label">Often / Always</div>
          <div class="food-frequency">5–7 days per week</div>
        </div>
      </div>
    `
  },
  {
      name: "Protein",
    questionHTML: `
      <h2 class="heading">How often do you eat from the protein Group?</h2>
              <div class="facts"><p><span style="color: #ff8c79;">Did you know? </span>The Fruit group include as any fruit and 100% fruit juice</p>
      </div>
      <div id="protein-options" class="food-group-options">
        <div class="food-option" onclick="toggleSelection(this, true, '#protein-options .food-option')">
          <img src="/assets/images/protein icon quiz.png" alt="Protein" />
          <div class="food-label">Never / Rarely</div>
          <div class="food-frequency">0–2 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#protein-options .food-option')">
          <img src="/assets/images/protein icon quiz.png" alt="Protein" />
          <div class="food-label">Occasionally</div>
          <div class="food-frequency">3–4 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#protein-options .food-option')">
          <img src="/assets/images/protein icon quiz.png" alt="Protein" />
          <div class="food-label">Often / Always</div>
          <div class="food-frequency">5–7 days per week</div>
        </div>
      </div>
    `
  },
  { 
      name: "Dairy",
    questionHTML: `
      <h2 class="heading">How often do you eat from the dairy Group?</h2>
              <div class="facts"><p><span style="color: #ff8c79;">Did you know? </span>The Fruit group include as any fruit and 100% fruit juice</p>
      </div>
      <div id="dairy-options" class="food-group-options">
        <div class="food-option" onclick="toggleSelection(this, true, '#dairy-options .food-option')">
          <img src="/assets/images/diary icon-quiz.png" alt="Dairy" />
          <div class="food-label">Never / Rarely</div>
          <div class="food-frequency">0–2 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#dairy-options .food-option')">
          <img src="/assets/images/diary icon-quiz.png" alt="Dairy" />
          <div class="food-label">Occasionally</div>
          <div class="food-frequency">3–4 days per week</div>
        </div>
        <div class="food-option" onclick="toggleSelection(this, true, '#dairy-options .food-option')">
          <img src="/assets/images/diary icon-quiz.png" alt="Dairy" />
          <div class="food-label">Often / Always</div>
          <div class="food-frequency">5–7 days per week</div>
        </div>
      </div>
    `
  }
];

function goToStep(id) {
  document.querySelectorAll(".quiz-step").forEach((step) => {
    step.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}


function goToPreviousStep(id) {
  goToStep(id);
}

function saveNameAndContinue() {
  const nameInput = document.getElementById("user-name");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  // Name should only contain letters, spaces, hyphens or apostrophes
  const nameRegex = /^[A-Za-z\s'-]{2,}$/;

  if (!nameRegex.test(name)) {
    alert("Please enter a valid Name!.");
    return;
  }

  quizData.name = name;
  goToStep("goals-step");
}

function toggleSelection(el, allowOnlyOne = false, groupSelector = null) {
  if (allowOnlyOne && groupSelector) {
    document.querySelectorAll(groupSelector).forEach((opt) => opt.classList.remove("selected"));
  }
  el.classList.toggle("selected");
}

function saveGoalsAndContinue() {
  const selected = document.querySelectorAll("#goal-options .option.selected");
  quizData.goals = Array.from(selected).map((el) => el.textContent);
  goToStep("barriers-step");
}

function saveBarriersAndContinue() {
  const selected = document.querySelectorAll("#barrier-options .option.selected");
  quizData.barriers = Array.from(selected).map((el) => el.textContent);

  document.getElementById("eating-habits-section").style.display = "block";

  goToStep("step-0");
}


function saveEatingHabit(groupName, optionContainerId, nextStepId) {
  const selected = document.querySelector(`#${optionContainerId} .food-option.selected`);
  if (!selected) {
    alert("Please select one option");
    return;
  }

  const label = selected.querySelector(".food-label").textContent;
  quizData.eatingHabits[groupName] = label;

  // Check if it's the last step before result and calculate
  if (nextStepId === "result-step") {
    calculateEatingHabitResult(); // This will animate the gauge
  }

  goToStep(nextStepId);
}


function calculateEatingHabitResult() {
  const answers = Object.values(quizData.eatingHabits);
  let totalScore = 0;

  answers.forEach((value) => {
    const lower = value.toLowerCase();
    if (lower.includes("rarely")) totalScore += 1;
    else if (lower.includes("occasionally")) totalScore += 2;
    else if (lower.includes("often")) totalScore += 3;
  });

  const maxScore = Object.keys(quizData.eatingHabits).length * 3;
  const percentage = (totalScore / maxScore) * 100;

  // Animate gauge
  const gaugeFill = document.getElementById("gauge-fill");
  const pointer = document.getElementById("gauge-pointer");

  const arcLength = 565;
  const dashLength = (percentage / 100) * arcLength;
  gaugeFill.setAttribute("stroke-dasharray", `${dashLength} ${arcLength}`);

  const angle = (percentage / 100) * 180;
  const radius = 90;
  const centerX = 100;
  const centerY = 100;
  const radians = (angle - 90) * (Math.PI / 180);
  const pointerX = centerX + radius * Math.cos(radians);
  const pointerY = centerY + radius * Math.sin(radians);
  pointer.setAttribute("cx", pointerX);
  pointer.setAttribute("cy", pointerY);
}


function generateEatingHabitSteps() {
const container = document.getElementById("eating-habits-section");

foodGroups.forEach((group, index) => {
  const stepDiv = document.createElement("div");
  stepDiv.className = "quiz-step";
  stepDiv.id = `step-${index}`;
  stepDiv.style.display = index === 0 ? "block" : "none";

  const nextStepId =
    index < foodGroups.length - 1 ? `step-${index + 1}` : "result-step";
  const prevStepId = index > 0 ? `step-${index - 1}` : "barriers-step";

  stepDiv.innerHTML = `
    ${
      index > 0
        ? `<button class="previous-button" onclick="goToPreviousStep('${prevStepId}')">
        <span>&larr;</span> Previous Page
      </button>`
        : ""
    }

    ${group.questionHTML}

    <button onclick="saveEatingHabit('${group.name}', '${group.name.toLowerCase()}-options', '${nextStepId}')">
      Continue
    </button>
  `;

  container.appendChild(stepDiv);
});

//  Append result step
const resultStep = document.createElement("div");
resultStep.className = "quiz-step";
resultStep.id = "result-step";
resultStep.style.display = "none";
resultStep.innerHTML = `
  <button class="previous-button" onclick="goToPreviousStep('step-${foodGroups.length - 1}')">
    <span>&larr;</span> Previous Page
  </button>

  <div class="result-container">
    <h2>Here is your Result!</h2>
    <div class="gauge-container">
      <svg viewBox="0 0 200 100" class="gauge">
        <path d="M10,100 A90,90 0 0,1 190,100" fill="none" stroke="#e0e0e0" stroke-width="20"/>
        <path id="gauge-fill" d="M10,100 A90,90 0 0,1 190,100" fill="none" stroke="#2E7D32" stroke-width="20" stroke-dasharray="0 565"/>
        <circle id="gauge-pointer" r="8" fill="#2E7D32" cx="100" cy="100" />
      </svg>
      <div class="labels">
        <span class="beginner">Beginner</span>
        <span class="rookie">Rookie</span>
        <span class="pro">Pro</span>
        <span class="star">All Star</span>
        <span class="farmer">Half of Farmer</span>
      </div>
    </div>
    <div class="result-content">
    <h2>Hey Eat Healthy+ User! Check out your<br>
    quiz RESULTS and personalised resources
    </div>
    <button class="result-pdf"> DOWNLOAD RESULTS(PDF) </button>
  </div>
`;
container.appendChild(resultStep);
}

function populateOptions() {
  const goalContainer = document.getElementById("goal-options");
  goalOptions.forEach((goal) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = goal;
    div.onclick = () => div.classList.toggle("selected");
    goalContainer.appendChild(div);
  });

  const barrierContainer = document.getElementById("barrier-options");
  barrierOptions.forEach((barrier) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = barrier;
    div.onclick = () => div.classList.toggle("selected");
    barrierContainer.appendChild(div);
  });
}

window.onload = function () {
  populateOptions();
  generateEatingHabitSteps();
};

