# Meet-App
Feature 2: Show/hide an event's details
• User story: As a user, I should be able to show or hide details so I can see more or less
information about an event.
• Scenario 1: An event element is collapsed by default
▪ Given: The app is loaded.
▪ When: A list of events has been served to the user.
▪ Then: The event details are not visible to the user.
• Scenario 2: User can expand an event to see its details
▪ Given: The list of events is loaded
▪ When: The user clicks on the “Show details” button of the event.
▪ Then: The event is expanded to show details
• Scenario 3: User can collapse an event to hide its details
▪ Given: An event has been expanded to show details.
▪ When: The user clicks on the “Hide details” button of the event.
▪ Then: The details of the event are hidden.
Feature 3: Specify number of events
• User story: As a user, I should be able to specify the number of events so that I can see more or
fewer events.
• Scenario 1: When user hasn’t specified a number, 32 is the default number
▪ Given: The app is loaded.
▪ When: The user hasn’t specified the number of events.
▪ Then: A list of 32 events is served to the user.
• Scenario 2: User can change the number of events they want to see
▪ Given: A list of events has been served to the user.
▪ When: The user specifies the number of events to be loaded.
▪ Then: A list with the specified number of events is served to the user.
Feature 4: Use the app when offline
• User story: As a user, I should be able to use the data cached in local memory so that I
can use the data without access to the internet.
• Scenario 1: Show cached data when there’s no internet connection
▪ Given: There is no internet connection.
▪ When: The user browses through the data.
▪ Then: The user is served cached data of previously loaded events.
• Scenario 2: Show error when user changes the settings (city, time range)
▪ Given: There is no internet connection.
▪ When: The user changes settings.
▪ Then: The app returns an error to the user.
Feature 5: Data visualization
• User story: As a user, I should be able to see the number of events in a city, so I know
which city is more active.
• Scenario 1: Show a chart with the number of upcoming events in each city
▪ Given: The app is loaded.
▪ When: When the user clicks on a city.
▪ Then: A chart with the number of events in a city is served to the user.


4.2, use of serverless functions:

User authentication: When a user logs into the app, a serverless function can be triggered to authenticate their credentials and generate an access token. This function can be hosted on a cloud platform like AWS Lambda or Google Cloud Functions.

Real-time messaging: The Meet App could use serverless functions to handle real-time messaging between users. These functions can be triggered when a message is sent or received, and can be hosted on a cloud platform like Firebase Cloud Functions or AWS Lambda.

Notifications: When a user receives a new message or a meeting invitation, a serverless function can be triggered to send a push notification to their device. This function can be hosted on a cloud platform like AWS Lambda or Google Cloud Functions.

Media processing: The Meet App could use serverless functions to process and store media files such as images or videos. When a user uploads a file, a serverless function can be triggered to compress, resize or transcode the file, and store it in a cloud storage like Amazon S3 or Google Cloud Storage.

The use of serverless functions in CareerFoundry Meet App is beneficial because it allows the app to scale seamlessly based on the number of users without worrying about infrastructure management. As the number of users increases, the app can rely on cloud providers to automatically scale the functions based on usage, and only pay for the resources used. This helps the app to keep its operational costs low while delivering a high-quality experience to users. Additionally, using serverless functions can make development faster, as developers can focus on building features rather than managing infrastructure.
