# Event Training Logger

## Overview

This is a JavaScript program that generates random events for participants, calculates the training days required for each event, and logs the results for each participant. The three events available are Marathon, Triathlon, and Pentathlon, with each event having different training durations.

## Functionality

- 🎯 **`getRandEvent()`**: Generates a random event for a participant. The event could be a Marathon, Triathlon, or Pentathlon.
- 📅 **`getTrainingDays(event)`**: Returns the number of training days required for a given event.
- 📝 **`logEvent(name, event)`**: Logs the event associated with a participant.
- ⏱️ **`logTime(name, days)`**: Logs the training days required for the event a participant is training for.
- 🏅 **Participants**: The program has a list of participants (`Alice` and `Warren`), each with a randomly assigned event.
- The program then logs the event and the corresponding training days for each participant.

## Code Breakdown

- **`getRandEvent()`**: This function generates a random number between 0 and 2, corresponding to one of three events (Marathon, Triathlon, Pentathlon).
- **`getTrainingDays(event)`**: Given an event, this function returns the number of training days associated with that event. Marathon requires 50 days, Triathlon requires 100 days, and Pentathlon requires 200 days.
- **`logEvent()`**: This function logs the event for a given participant by printing a message in the console.
- **`logTime()`**: This function logs the training days required for the event of a given participant.
- **`participants` array**: This array holds the participants' names and their randomly generated event.

## Example Output

The program logs output for each participant, showing their event and how many days they need to train. For example:

```
Alice's event is: Marathon
Alice's time to train is: 50 days

Warren's event is: Triathlon
Warren's time to train is: 100 days
```

### How it Works:

- 🎲 `getRandEvent()` generates a random event for each participant.
- 🏋️ `getTrainingDays(event)` calculates how many days of training are required for the event.
- The results are logged to the console with participant names, their event, and training days.

## Installation

To run this code, follow the steps below:

1. **Clone or download the repository**:
   You can download the JavaScript file or clone the repository to your local machine.

2. **Open the file in your browser**:
   Open the `.js` file using the browser’s developer console or run it in any JavaScript environment like Node.js.

3. **Run the program**:
   If you’re using the browser, open the Developer Tools (usually `F12` or `Ctrl + Shift + I`), go to the "Console" tab, and paste the code. Press Enter to execute.

4. **View the results**:
   The console will display the event and training days for each participant.

## Customization

- You can add more participants by modifying the `participants` array.
- You can also modify the event list or the number of training days to suit your needs.

## Example of Modifying Participants:

```javascript
const participants = [
  { name: "Alice", event: getRandEvent() },
  { name: "Warren", event: getRandEvent() },
  { name: "John", event: getRandEvent() }, // New participant
];
```

## Dependencies

- This code runs entirely in JavaScript and doesn't require any external libraries or dependencies.

## License

This project is open source and available under the [MIT License](LICENSE).
