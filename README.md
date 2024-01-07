# PhoneBook App

Your assignment involves developing a comprehensive contact application.
This application must 
* Support multiple users (every user has its own contacts)
  * A user has a full name
  * One email adress (mandatory)
  * One phone number (mandatory)
* Every contact has the following properties :
  * full name 
  * a list of phone numbers (one primary phone number that is required and the rest are optional) 
  * one mandatory email address that is unique.
* Every user should be able to 
  * add a contact, remove a contact and list all contacts
  * the app must include a search functionality by name, or phone number or email adress and return a list of contacts
* for persistence we prefer the usage of a relational database to store the data (mysql, postgres, sqlite). 
  * otherwise nosql database like mongoDB are accepted

## Task One:
Develop a working web API for the app.

- We consider the following list of users of the app: 
```json
["Alice" ,"Alice@instadeep.com", 111111],
["Bob","Bob@instadeep.com", 222222],
["Charles","Charles@instadeep.com", 333333]
```

- Implement **adding**, **removing**, **listing**, and **searching for contacts**, with the capability to return data in JSON format for every user.

- Assume that the authentication is already done and you don't need to worry about it. 

### Hints : 
- The enpoints can be like the follwing : 
verb `<base_url>/api/<user_id>`
where `<user_id>` is the the id of the predefined users above.

- For those who never worked with web API's before, create a console application.

## Task Two
As the app tops the charts globally, the management team decides to implement a notification system including SMS, and emails.

Your task is to design a notification system that sends alerts based on user preferences. 

For instance, users who prefer SMS notifications should receive updates via text when their contacts are added, removed, or updated. The same principle applies to preferences for email notifications.

### Example :
```
Alice adds a new contact that is : 
["MyContact", "Bob@instadeep.com", 213456"]

As Bob has the same email as the contact added by alice, we consider that Alice added a user of the app. 

Bob will be then notified in his prefered notification method (phone or email) that alice added him as a contact
```

### Hints
Focus on the system's capability to cater to these preferences, without going into the implementation specifics of each notification method.

**Create fake notification methods for both email and phone. it's enough.**

#### Bonus Task (Optional):

Management team decided to hire a new developer to help you with the project. 

As the sole developer you are tasked with dockerizing with docker the application and writing a `docker-compose` file to run the application and the database in a containerized environment.
the application (api) should be accessible on port `3000` and should be able to run full with a single command `docker-compose up`.

