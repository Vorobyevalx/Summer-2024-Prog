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