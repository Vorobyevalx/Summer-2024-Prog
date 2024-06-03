// User class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.weeklyProgress = 0;
    this.weeklyGoal = 5;
    this.totalProgress = 0;
  }
}

// Authentication class
class Authentication {
  constructor() {
    this.users = [];
  }

  registerUser(name, email, password) {
    // Check if the email is already registered
    const existingUser = this.users.find(user => user.email === email);
    if (existingUser) {
      console.log(`User with email ${email} already exists.`);
      return false;
    }

    const newUser = new User(name, email, password);
    this.users.push(newUser);
    console.log(`User ${name} registered successfully.`);
    return true;
  }

  loginUser(email, password) {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      console.log(`User ${user.name} logged in successfully.`);
      return user;
    } else {
      console.log("Invalid email or password.");
      return null;
    }
  }
}

// Boxing Application class
class BoxingApplication {
  constructor() {
    this.authentication = new Authentication();
    this.workouts = [];
    this.currentUser = null;
  }


  createWorkout(name, description, duration) {
    const newWorkout = new Workout(name, description, duration);
    this.workouts.push(newWorkout);
    console.log(`Workout ${name} created successfully.`);
  }

  displayWorkouts() {
    const workoutList = document.getElementById('workoutList');
    workoutList.innerHTML = '';

    this.workouts.forEach(workout => {
      const listItem = document.createElement('li');
      listItem.textContent = `${workout.name}: ${workout.description} (${workout.duration} minutes)`;
      workoutList.appendChild(listItem);
    });
  }
}

// Create an instance of the BoxingApplication
const app = new BoxingApplication();

// Get the HTML elements
const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');

// Event listener for user registration
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  const registrationSuccess = app.authentication.registerUser(name, email, password);
  if (registrationSuccess) {
    registrationForm.reset();
    window.location.href = 'dashboard.html';
  } else {
    alert('Registration failed. Please try again.');
  }
});

// Event listener for user login
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmailInput').value;
  const password = document.getElementById('loginPasswordInput').value;

  const loginSuccess = app.authentication.loginUser(email, password);
  if (loginSuccess) {
    loginForm.reset();
    window.location.href = 'dashboard.html';
  } else {
    alert('Login failed. Please check your email and password.');
  }
});

// Initial display of workouts
app.displayWorkouts();