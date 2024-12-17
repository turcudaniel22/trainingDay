// Function to get a random event
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// Function to calculate training days for an event
const getTrainingDays = (event) => {
  let days = 0; // Initialize as a number
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }
  return days; // Return the calculated days
};

// Function to log the event for a specific person
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Function to log the training days for a specific person
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Participants and results
const participants = [
  { name: "Alice", event: getRandEvent() },
  { name: "Warren", event: getRandEvent() },
];

// Logging results for each participant
participants.forEach((participant) => {
  const { name, event } = participant;
  const days = getTrainingDays(event);
  logEvent(name, event);
  logTime(name, days);
});
