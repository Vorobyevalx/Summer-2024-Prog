// Boxing Application

// User class
class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }
  
  // Authentication class
  class Authentication {
    constructor() {
      this.users = [];
    }
  
    registerUser(name, email, password) {
      const newUser = new User(name, email, password);
      this.users.push(newUser);
      console.log(`User ${name} registered successfully.`);
    }
  
    loginUser(email, password) {
      const user = this.users.find(user => user.email === email && user.password === password);
      if (user) {
        console.log(`User ${user.name} logged in successfully.`);
      } else {
        console.log("Invalid email or password.");
      }
    }
  }
               
  // Workout class
  class Workout {
    constructor(name, description, duration) {
      this.name = name;
      this.description = description;
      this.duration = duration;
    }
  }
  
  // Boxing Application class
  class BoxingApplication {
    constructor() {
      this.authentication = new Authentication();
      this.workouts = [];
    }
  
    createWorkout(name, description, duration) {
      const newWorkout = new Workout(name, description, duration);
      this.workouts.push(newWorkout);
      console.log(`Workout ${name} created successfully.`);
    }
  
    displayWorkouts() {
      console.log("Available Workouts:");
      this.workouts.forEach(workout => {
        console.log(`- ${workout.name}: ${workout.description} (${workout.duration} minutes)`);
      });
    }
  }

  // Create an instance of the BoxingApplication
  const app = new BoxingApplication();
  
  // Register a new user
  app.authentication.registerUser("John Doe", "john@example.com", "password123");
  
  // Login the user
  app.authentication.loginUser("john@example.com", "password123");
  
  // Create a workout
  app.createWorkout("Beginner Boxing", "Basic boxing techniques for beginners", 30);
  
  // Display available workouts
  app.displayWorkouts();
  
  // Get the HTML elements
const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const workoutList = document.getElementById('workoutList');

// Event listener for user registration
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  app.authentication.registerUser(name, email, password);
  registrationForm.reset();
});

// Event listener for user login
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmailInput').value;
  const password = document.getElementById('loginPasswordInput').value;
  app.authentication.loginUser(email, password);
  loginForm.reset();
});

// Function to display workouts
function displayWorkouts() {
  workoutList.innerHTML = '';
  app.workouts.forEach(workout => {
    const listItem = document.createElement('li');
    listItem.textContent = `${workout.name}: ${workout.description} (${workout.duration} minutes)`;
    workoutList.appendChild(listItem);
  });
}

// Initial display of workouts
displayWorkouts();






// Event listener for user registration
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    app.authentication.registerUser(name, email, password);
    registrationForm.reset();
    
    // Redirect to a new page after successful registration
    window.location.href = 'dashboard.html';
  });








