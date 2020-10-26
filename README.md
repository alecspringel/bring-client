## BRING Recycling Client

This project is part of the 2020 Hack For A Cause, where teams implement solutions for local non profits in 72 hours.

BRING Reycling is a 501(c)(3) non-profit in Eugene, OR responsible for collecting and redistributing recyclable/reusable donations ranging from building materials, furniture, appliances, hardware, and so much more.

The purpose of the BRING Recycling Client is to allow potential donors to upload images of their donations before bringing them to the facility. Admins can review the photos and contact the donor using prerecorded or custom responses.

## Features  
### User Form
Submissions are made from the public form. Here, donors can enter their contact information and photos of their items with descriptions.  

![](media/form.gif)

### Admin Portal
Admins can sign in using the link in the footer. From here, admins can view a feed of all pending donations, and can begin responding to individual requests.  

![](media/admin-portal.gif)
![](media/response-description.gif)

### Responses
Each option contains a set of predefined responses, as well as a "custom" option which allows the admin to enter their own response to the submission.

![](media/response-message.gif)

### Notifications
Admins will be notified by email and Slack when new donations come in. Upon responding, the donor will also be contacted by their preferred contact method(s) with the message the admin selected.  


## Developing
bring-client is built with React.  

#### Install
```
npm install
```
#### Run
```
npm run start
```
#### Build
```
npm run build
```

## Contributors

<table>
  <tr>
    <td align="center"><a href="http://www.alecspringel.com"><img src="https://avatars2.githubusercontent.com/u/58418733?s=460&u=2c376b48a639dd67bf354de5ae504fc249a434c4&v=4" width="100px;" alt=""/><br /><sub><b>Alec Springel</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/sarahkitten"><img src="https://avatars1.githubusercontent.com/u/59421998?s=460&u=f5d75ab922f82e9e014ff7d79939a6073e46ab5d&v=4" width="100px;" alt=""/><br /><sub><b>Sarah Kitten</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/sampeters747"><img src="https://avatars1.githubusercontent.com/u/34805699?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Sam Peters</b></sub></a><br /></td>
</table>
