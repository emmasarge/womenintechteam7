
# [pedicoders](https://pedi-coders.herokuapp.com/)

We are a female group of coders, Emma, Laura, Iryna, Bekki and Deborah -   team 7 in the women in technology hackathon, who are taking 
part in the Code Institute Hackathon in May 2021.  We used a trello board [trello](https://trello.com/b/8ghwtoih/team-seven-hackathon) 
to keep track of all the tasks we had to do to make this app and we used github collaboratively, creating a repo which we all contributed to.


This is an app for empowering female coders.  Women coders are under-represented in the world of coding.  For example only 1.5% of 
persons involved in open source projects are female and the proportion of female software engineers currently stands at around 20%.  
Additionally the number of females taking courses in computer science at university has been declining since 1990.  There are many 
reasons why girls are put off coding at school and at home, sometimes it is seen as a hard subject- one that requires hours of study 
and practice, and sometimes girls are faced with a classroom full of boys when they take a coding class or join a coding group.  So 
an app like this is needed to give girls and women a power of unity and togetherness. It brings coding closer to women's interests
allowing to combine fun and studies. By creating and attending events like pedicode (pedicure and coding session), coffee & code,
playdate & code, all women no matter what their current situation or background is get a chance to grow together.


## Wireframes

In order to have some basic structure in place and to be on the same page, we created [wireframes](/images/CODEQUEEN.pdf) 
and were working from these when creating our app.

   
## UX

### User stories

1.  User wants to see a single page application which they can scroll through to find information about coding events.
1.  User wants a list of meetup groups which they can attend to find out more about coding.
1.  User would like to see a calendar of events for the current month.
1.  User would like to see images of past events and women coding.
1.  User can register and log into the site.
1.  Registered user can create an event.
1.  User can contact website's owner in needed through contact form.


## Design features

* The navbar must appear on every page so that the user can easily navigate between pages.

* The navbar has the title of of the website, "Peidcoders" on the left hand side.  If a user clicks on this they are taken to the Home page.

* The home page shows the following items in the navbar:  "Pedicoders", "Home", "Register", "Log in", "Meetups", "Contact".

* Navbar shows the following items in the navbar for logged in users:  "Pedicoders", "Home", "Meet-ups", "Add event", "Logout", "Contact".

* A logged out user can see all the events and find out information about coding for women.

* Once the contact page is filled in by a user an email is directed to a specified email address.

* User can see a list of coding meetups and calendar events.

* User can search for events by name, meetup type or topic (e.g programming language)

* Images are displayed in two carousels for all users to see on the home page. The images will cycle automatically but arrow buttons are included to 
  allow users to go forward and back themselves.

#### Fonts

* All headings throughout the app are designed with the serif font 'Prata'.

* The main body text and navbar text are designed with the sans-serif font 'Diadect Gothic'.

#### Colors

* Site must be responsive and display well on different size screens.



## Technologies Used

* [HTML](https://www.w3schools.com/html/) or Hypertext markup language. HTML is used to create the structure of web pages. 
It consists of tags which tell the browser how to set out text and images on the page. Hypertext is the method by which you move 
around on the web, markups are the tags which set out the structure of the webpage, thus HTML is a language for web creation with 
its own structure and syntax. The data in the tags is read by the web browser enabling you to create any web page you like. In 
this project my templates are all written in HTML. There is a template for adding, deleting, editing and adding recipes as well 
as one for viewing information about each island. The base template sets out the way in which the website should look and information 
from this is used in each of the other templates.

* [CSS](https://www.w3schools.com/Css/) stands for Cascading Style sheets which is a type of style language which sets out how the webpage 
should be styled. It allows the user to style the webpage in a particular way, making the UX richer and more meaningful for the user.

* [Bootstrap] (https://getbootstrap.com/docs/4.0/getting-started/introduction/) is a CSS framework used for responsive websites. This was used 
  to create the responsive navbar and the image carousels.

* [jquery](https://jquery.com/) is used to simplify DOM manipulation. Jquery is a javascript library that is used to provide interactivity 
on websites. The $ sign signals to the browser that jquery is being used.

* [Python](https://www.python.org/psf-landing/) is a high level programming language used for apps in many frameworks such as flask, 
pyramid and django. Python supports many programming paradigms and is object orientated and has a comprehensive set of libraries. Python 
is managed by a non profit organsation the Python software foundation.  The version of Python I used in my app is 3.7.

* [Flask](https://flask.palletsprojects.com/en/1.1.x/) is a micro framework used to build web applications.  Flask has a small and easily 
extendable core which gives the developer control over which databases and other third party resources to use when developing an app.

* We used [Mongodb](https://www.mongodb.com/cloud/atlas) for the models in the database, although sqlite3 is available in flask. This was 
because our app is deployed to heroku and heroku is an ephemeral file system so my data would disappear each time I logged into heroku! 
MongoDB is a document-based database system that provides the user with the facility to create, read, update and delete documents data.

* [Heroku](https://www.heroku.com/) is a cloud platform that allows a developer to build, deliver, scale and monitor apps. Heroku makes 
the experience of deploying an app relatively straightforward.

* We used [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) to work on my code. Chrome dev tools are 
a set of tools designed to give the developer tools to amend code in a testing environment in order to enhance the UX and functionality 
experience. I was also able to test the responsiveness of my app using these tools.

* We used [vscode](https://code.visualstudio.com/) and gitpod [gitpod](https://www.gitpod.io/) as our coding editors.  Lots of extensions 
were available to check the syntax of the code.

* APIs used were [fullcalendar js](https://fullcalendar.io/) for the calendar and the [meetup](https://www.meetup.com/meetup_api/) api 
for details of coding meetups.

## Databases used

<<<<<<< HEAD
=======
[SQLite3](https://www.sqlite.org/index.html) is a database provided by flask and is the default database for flask projects but was 
not used in this project.
[Mongodb](https://www.mongodb.com/cloud/atlas) is an open source nosql database. Flask does not determine a type of database to be used 
but mongodb is a persistent database so data saved to the database is saved for users to access in the app as appropriate.
>>>>>>> 334e301396148a7b1cec7b81808f161ae0bb2031

[Mongodb](https://www.mongodb.com/cloud/atlas) is an open source nosql database.Flask does not determine a type of database to be used but mongodb is a persistent database so data saved to the database is saved for users to access in the app as appropriate.  In atlas mongodb, each project has a collection and within each collection are several clusters, with each cluster being a database for use by an app.

The Pedicoders website used two clusters/databases. The first model was used to hold details of events.  This had the following field:  name, description, meetuptype, city, address, date, time, topic.  The second model held users details:  username and user password.
In flask, data models are the database collections which store data about the objects in the database.  The Pedicoders website used 
four models. The first model was used to hold details of events. This had the following field:  name, description, meetup_type, city, 
address, date, time, topic, and added_by. The second model held users details: username and user password. The other two collections
were created for storing event types and topics for easier display and better user experience.


## Testing

Testing was carried out by human beings.

* Manual Testing

We tested each part of our user story to check it worked as expected.


* The navbar must appear on every page so that the user can easily navigate between pages.  Tested and works as expected.

* The navbar has the title of of the website, "Peidcoders" on the left hand side.  If a user clicks on this they are taken to the Papers page. Tested and works as expected.

* The home page shows the following items in the navbar:  "Pedicoders", "Home", "Register", "Log in", "Meetups", "Contact".  Tested and works as expected.

* The home page shows the following items in the navbar for logged in users:  "Pedicoders", "Home", "Meet-ups", "Add event", "Logout", "Contact".  Tested and works as expected.

* A logged out user can see all the events and find out information about coding for women.  Tested and works as expected.

* Once the contact page is filled in by a user an email is directed to a specified email address. Tested and works as expected.

* Meetups and calendar events shown to user.  Tested and works as expected.

* User can register and log into the site. Tested and works as expected.

* Registered user can create an event. Tested and works as expected.

* User can search for events by name, meetup type or topic. Tested and works as expected.

* The app responds when screen size is reduced. 


## Deployment

The following section describes the process we undertook to deploy this project to Heroku.

1. We logged in to Heroku, using 'heroku login' command. Input Heroku login details.
2. We then created a new Heroku app, using heroku ```apps:create appname command```.
3. We pushed our project to github and enabled automatic link to heroku.  This took some time to set up as we had to make sure that my environmental variables were correct.
4. We then logged into Heroku and selected newly created app.
5. We entered all  environment variables into the heroku panel including: secret key, public key - both of these were from stripe, the host name and the port.
6. We set my debug to False in my settings.py file in the mathsplusrevision app.   
7. We then had to put all the environmental settings in the heroku config vars for the project as shown below.

* DATABASE_URL       xxxxxxxxxx
* IP                 xxxxx
* PORT               xxxxx
* SECRET_KEY         xxxxxxxxx


We then checked that the app was now deployed via Heroku

## Breakdown of steps involved in creating the app

We all worked in different ways but overall the process used by collaborators was as follows:

1.  One collaborator set up the flask environment and associated files for use by other collaborators and also created a trello board.  Details of the tasks carried out by each person are on the trello board [trello](https://trello.com/b/8ghwtoih/team-seven-hackathon).  Each collaborator worked on their own parts of the task as shown on the cards, and when each task was done the cards were moved to the "done" part of the trello board.

1. One collaborator created a new github repo and initialised a local repo for the project.
2. An env file was created to hold passwords for the atlas  database   This file was put in .gitignore.
3. Each collaborator had to install the relevant files in order to be able to run flask in their local environment.
4. Each collaborator created a local branch to work on and created pull requests which were then merged into the project once they had been checked by other members of the team.


All collaborators then did the following:
1. Created a virtual environment and made a .gitignore file.  I then installed django.
2. Put all the virtual environment files and database files into .gitignore so that they would not be pushed to github.

Deploying the app to heroku:
2.  Before pushing to heroku a requirements.txt file had to be created. This provided heroku with details of the versions of technologies used for this project. 
2.  Two collaborators working together pushed the app to heroku successfully.

4. We created a virtual environment and made a .gitignore file. I then installed django.
5. We put all the virtual environment files and database files into .gitignore so that they would not be pushed to github.
6. One collaborator created a new github repo and initialised a local repo for the project.
7. We created env files to hold all passwords for the atlas database. This file was put in .gitignore.
8. Before pushing to heroku a requirements.txt file had to be created. This provided heroku with details of the versions of technologies used for this project. 
9. Each collaborator had to install the relevant files in order to be able to run flask in their local environment.
10. Each collaborator created a local branch to work on and created pull requests which were then merged into the project once they had been checked by other members of the team.
 
  
## Future improvements

 1. Get the calendjs api to read event onjects from the database.  A method needed to be written to do this but unfortunately there was not enough time to do this so events were hardcoded into the calendar.
 2. Allow  a user to search for relevant meetups.
 3. Add a blog on female coders.
 4. Allow users to add events to the calendar, which would need to be moderated first so a moderator admin area would also need to be created as well.
 

## Credits

### Media  

* business.jpg

* cheer.jpg

* computer.jpg
  Photo by CoWomen on Unsplash
  https://unsplash.com/photos/hG1MJ6alVfU
  
* landscape-1.jpg
  Photo by mentatdgt from Pexels
  https://www.pexels.com/photo/two-women-looking-and-pointing-at-macbook-laptop-1569076/
  
* landscape-2.jpg
   Photo by Helena Lopes on Unsplash
   https://unsplash.com/photos/C2WC2ZerF3s
   
* landscape-3.jpg
  Photo by Askar Abayev from Pexels
  https://www.pexels.com/photo/photo-of-daughter-embraces-her-mother-6190669/
  
* landscape-5.jpg
  Photo by August de Richelieu from Pexels
  https://www.pexels.com/photo/mother-helping-her-daughter-use-a-laptop-4260325/
 
* meet-up.jpg

* mom.jpg

* shoes.jpg
  Photo by CoWomen from Pexels
  https://www.pexels.com/photo/person-wearing-pair-of-white-girls-rule-text-printed-socks-2041397/
  
* study.jpg

* womxn.jpg

### Borrowed Code 
Time input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time
Function for fixing Bootstrap navbar active class was taken [here](https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working)

