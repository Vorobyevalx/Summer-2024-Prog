// Get the HTML elements
const progressBar = document.getElementById('progressBar');
const weeklyProgressSpan = document.getElementById('weeklyProgress');
const weeklyGoalSpan = document.getElementById('weeklyGoal');
const totalProgressSpan = document.getElementById('totalProgress');
const logTrainingForm = document.getElementById('logTrainingForm');
const setGoalForm = document.getElementById('setGoalForm');
const achievementMessage = document.getElementById('achievementMessage');

// Progress tracking variables
let weeklyProgress = 0;
let weeklyGoal = 5;
let totalProgress = 0;

// Function to update the progress bar
function updateProgressBar() {
  const progressPercentage = (weeklyProgress / weeklyGoal) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

// Function to reset weekly progress
function resetWeeklyProgress() {
  weeklyProgress = 0;
  weeklyProgressSpan.textContent = weeklyProgress;
  updateProgressBar();
}

// Function to check achievements
function checkAchievements() {
  if (totalProgress >= 180) {
    weeklyGoal = 7;
    weeklyGoalSpan.textContent = weeklyGoal;
    achievementMessage.textContent = 'Congratulations! You have reached 180 hours of total training. You are now certified to begin sparring.';
  }
}

// Event listener for logging training hours
logTrainingForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const trainingHours = parseFloat(document.getElementById('trainingHours').value);
  weeklyProgress += trainingHours;
  totalProgress += trainingHours;
  weeklyProgressSpan.textContent = weeklyProgress.toFixed(1);
  totalProgressSpan.textContent = totalProgress.toFixed(1);
  updateProgressBar();
  checkAchievements();
  logTrainingForm.reset();
});

// Event listener for setting weekly goal
setGoalForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const goalHours = parseInt(document.getElementById('goalHours').value);
  weeklyGoal = goalHours;
  weeklyGoalSpan.textContent = weeklyGoal;
  updateProgressBar();
  setGoalForm.reset();
});


// Reset weekly progress at the start of a new week
// You can use a library like Moment.js to handle date calculations
// For simplicity, this example resets progress every Monday (adjust as needed)

// Function to update user profile information
function updateUserProfile() {
    const userNameSpan = document.getElementById('userName');
    const userEmailSpan = document.getElementById('userEmail');
    const totalTrainingHoursSpan = document.getElementById('totalTrainingHours');
  
    userNameSpan.textContent = app.currentUser.name;
    userEmailSpan.textContent = app.currentUser.email;
    totalTrainingHoursSpan.textContent = app.currentUser.totalProgress.toFixed(1);
  }
  
  // Event listener for user login
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmailInput').value;
    const password = document.getElementById('loginPasswordInput').value;
  
    const user = app.authentication.loginUser(email, password);
    if (user) {
      app.currentUser = user;
      loginForm.reset();
      updateUserProfile(); // Update user profile information after successful login
      window.location.href = 'dashboard.html';
    } else {
      alert('Login failed. Please check your email and password.');
    }
  });
  
  // Event listener for logging training hours
  logTrainingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const trainingHours = parseFloat(document.getElementById('trainingHours').value);
    app.currentUser.weeklyProgress += trainingHours;
    app.currentUser.totalProgress += trainingHours;
    weeklyProgressSpan.textContent = app.currentUser.weeklyProgress.toFixed(1);
    totalProgressSpan.textContent = app.currentUser.totalProgress.toFixed(1);
    updateUserProfile(); // Update user profile information after logging training hours
    updateProgressBar();
    checkAchievements();
    logTrainingForm.reset();
  });
const today = new Date();
if (today.getDay() === 1) {
  resetWeeklyProgress();
}