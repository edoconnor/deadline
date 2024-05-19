![Deadline Screenshot](/src/assets/screenshot.png)

# Angular Deadline Tracker Component

This Angular component serves as a deadline tracker, displaying the remaining time until a specific deadline and providing functionality to modify the deadline.

## Overview

This component consists of three main parts:

1. **Deadline Service (`deadline.service.ts`):** This service handles communication with the backend API to fetch the current deadline and update it when necessary.

2. **Main Component (`main.component.ts`, `main.component.html`, `main.component.css`):** The main component is responsible for displaying the remaining time until the deadline and initiating the deadline modification process. It utilizes the Deadline Service to fetch and update the deadline, and it continuously updates the displayed time using RxJS observables.

3. **Deadline Modal Component (`deadline-modal.component.ts`, `deadline-modal.component.html`, `deadline-modal.component.css`):** This component provides a modal interface for users to input a new deadline. It allows users to select a date and time for the new deadline and saves the changes when confirmed.

## Features

- Display of remaining time until the deadline in real-time.
- Modal interface for changing the deadline.
- Seamless integration with Angular Material for a modern and intuitive user experience.
- Error handling for failed API requests or invalid user inputs.

## Usage

1. **Displaying the Deadline:**
   - Upon loading the application, the main component fetches the current deadline from the backend API using the Deadline Service.
   - The remaining time until the deadline is displayed in the UI, updating dynamically every second.

2. **Changing the Deadline:**
   - Clicking the "Change Deadline" button opens a modal window.
   - Within the modal, users can select a new date and time for the deadline.
   - Upon confirming the changes, the main component sends a request to the backend API to update the deadline.
   - The UI is updated to reflect the new deadline.

## Getting Started

To integrate this component into your Angular project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install`.
3. Start the development server with `ng serve`.
4. Visit the application in your web browser to view the deadline tracker component in action.

## Dependencies

This component relies on the following dependencies:

- Angular: A platform for building client-side applications using TypeScript.
- Angular Material: A UI component library for Angular applications, providing pre-built UI components.
- RxJS: A library for reactive programming using observables, used for handling asynchronous operations.

## Support and Feedback

If you encounter any issues, have questions, or would like to provide feedback on this component, please [open an issue](https://github.com/your/repository/issues) on the GitHub repository.

We appreciate your contributions to improving this component and making it more user-friendly for our team members!

