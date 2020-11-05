# Omelia
Our HackTX 2020 project - a speech to spreadsheet command productivity tool - link to devpost submission (https://devpost.com/software/omelia)

# Inspiration
There are approximately 19.2 million that have a disability, which impacts their ability to type on a keyboard or use a mouse. These individuals have trouble using productivity tools like Google Sheets. Additionally, kids that just learning to use spreadsheet software might find it daunting to navigate around all the potential options. For these reasons, we built Omeilia to help bridge this gap. In Greek, Omelia means speaking and we felt that a lot could be done with just one's voice.

# What it does
Our application allows you to directly talk to your spreadsheet in plain English to execute commands to manipulate data. For example, a user can simply say "What's up Omelia, can you please insert a 4 in cell B7?" and more complex commands like "please sort the entire table by column 2", "calculate the average of column F and store the result in cell C5", and more! We wanted the experience to be as organic as possible, so we used glove embeddings, cosine similarity, and stopword detection to make Omelia understand human speech.

# How we built it
Chrome extension: HTML, JS, CSS Backend: Flask to make an API endpoint in Python Google Cloud Platform: Google Sheets API, WebSpeech API Natural Language Processing: Using both cosine similarity and stopword detection

# Challenges we ran into
One of the main challenges we faced was getting our words to be correctly recognized by the Web Speech API. We also had a tough time increasing our accuracy when it came to classifying the text, since there were many different edge cases to be accounted for.

# Accomplishments that we're proud of
We were proud of being able to set up the chrome extension and base for speech to text translation within the first few hours, and then creating our own algorithm for text processing from scratch. We were also able to create several functions that performed various different operations using the Google Sheets API to make changes to the current sheet.

# What we learned
We learned a lot about how to build a google chrome extension from ground up and how we could add additional user functionalities to a Google sheet that the user was currently on. Together with that, we familiarized ourselves with text processing, lemmatization and cosine similarity, mapping the text to specific instances of commands, and then executing those commands by correctly formatting the data, calculating the results and making API calls.

# What's next for Omelia
We plan to improve the accuracy of our model to better handle commands that we have accounted for, as well as add functionalities for more complex commands. We particularly hope to be able to allow users to create graphs or charts based on their data. Together with that, we would like to create a desktop app with such functionalities for better integration.
