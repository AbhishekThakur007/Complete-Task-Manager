# Answers to Technical Questions

### 1. How long did you spend on the coding test?
Ans:- I spent approximately 10-12 hours on the coding test, including time for planning, coding, debugging, and styling. Additionally, I dedicated time to implementing enhancements like the light/dark mode toggle, search and filter features, and making the application responsive and user-friendly with Tailwind CSS.

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Ans:- For this project, I used React with JavaScript, which has seen recent updates in ES2023. One of the most helpful features in the latest JavaScript version is the `Array.prototype.findLast()` and `Array.prototype.findLastIndex()` methods. These methods allow for efficient searching of elements in an array from the end.

Example usage:

``` javascript
// Find the last task marked as 'completed'
const lastCompletedTask = tasks.findLast((task) => task.completed);

console.log("Last completed task:", lastCompletedTask);

```

In this example, `findLast` helps retrieve the last completed task efficiently, which can be helpful in identifying the most recent tasks for display or logging purposes.

### 3. How would you track down a performance issue in production? Have you ever had to do this?
Ans:- To track down a performance issue in production, I would follow these steps:

1. **Monitor Performance Metrics:** Use monitoring tools like Google Analytics, New Relic, or AWS CloudWatch to identify where latency or bottlenecks occur in the application.
2. **Profile Code Execution:** Utilize Chrome DevTools to analyze the performance of various components, focusing on paint times, script execution times, and memory usage.
3. **Log Detailed Information:** Use server logs and client-side error tracking tools (e.g., Sentry) to gather detailed error logs and pinpoint issues.
4. **Optimize and Refactor:** Identify the most resource-intensive components or functions and refactor them, potentially adding memoization, lazy loading, or code-splitting to reduce load times.

Yes, I have debugged performance issues previously, particularly in cases where complex UI components caused slower load times. By profiling and lazy-loading certain elements, I was able to significantly enhance performance.

### 4. If you had more time, what additional features or improvements would you consider adding to the task management application?
Ans:- If given more time, I would consider adding the following features and improvements to the task management application:

1. **User Authentication:** Allow users to sign up, log in, and have their tasks saved across sessions.
2. **Data Persistence with a Backend Database:** Integrate a backend with a database (e.g., Firebase or MongoDB) to store tasks permanently and make them accessible from any device.
3. **Task Categories and Labels:** Enable users to add categories or tags to tasks for better organization.
4. **Recurring Tasks:** Provide an option to mark tasks as recurring, with customizable intervals (e.g., daily, weekly).
5. **Notification System:** Set up in-app notifications or email reminders for upcoming and overdue tasks.
6. **Mobile Optimization:** Enhance responsive design further, ensuring smooth functionality and appearance on mobile devices.

These features would improve usability, make the app more versatile, and allow for better task management and tracking.
