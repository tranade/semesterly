# Documentation Quiz

Please visit the [docs](https://semesterly-v2.readthedocs.io/en/latest/index.html) and
answer the following questions.

1. What is the command I run to get the courses from Fall 2021?
python manage.py ingest jhu --years 2021 --terms Fall

2. How do I then load those courses into my database?
python manage.py digest jhu

3. How do I get a terminal running in my docker container?
Right click on a particular container and select ‘Attach Shell’

4. Where do I store data such as passwords or secrets that I don’t want to commit?
You can add it in semesterly/sensitive.py in a similar format to the way secrets are stored in semesterly/dev_credentials.py

5. What branch do I create a new branch off of when developing?
You should use the develop branch and create a branch off of it

6. If I want to start on a feature called myfeature, what should the branch name be?
The branch name should be feature/myfeature

7. What is the preferred format for commit messages?
The preferred format is ‘Topic: Message’ and you should write the message as if you are instructing someone on what to do

8. What linters do we run against our code?
pycodestyle/Black for backend and ESLint/Prettier for frontend

9. What is a FeatureFlowView?
A FeatureFlowView is a way to easily pass data from the backend to the frontend for data that is required for the initial frontend feature to be loaded

When you are done answering the questions, create a PR for a discussion of your answers.
