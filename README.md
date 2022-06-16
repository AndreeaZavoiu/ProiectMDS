# ProiectMDS

## Demo


## User Stories

- As a player, I want to mention my company’s ID or name in the login/signup section, so that I can participate in their activities.  
- As a player, I need to be added in a team by the organizer.  
- As a player, I want to see what activities they prepared for us (treasure hunt, quiz).  
- As a player, I want to see the time we have left for that activity, so that I can complete the task in time.  
- As a player, I want to see the score of our team, so that I know what my chances are to win.  

- As an organizer (company), I want a separate sign up/ log in section, so that I don’t mix up with the regular user accounts.
- As an organizer (company), I want an easy way to add my employees in teams (by email or username) for the games, so that the teams are ready before the games.

- As an admin, I want to create activities (title, details, score, time).
- As an admin, I want to delete the players / companies.

- As a dev, I want to learn Django in a month so that we finish the project in 2 months.
- As a dev, I want to finish the frontend in 2 months.


## Backlog creation

## Design/Arhitectura/UML

User case UML   
<img width="773" alt="UML-user case" src="https://user-images.githubusercontent.com/73405732/174133895-de6fc459-02e7-4955-9691-79f3b4d4b5b0.PNG">

## Bug Reporting
Product: Frontend  
Version: Final  
Component: Profile Button  
Priority: P2 (Fix as soon as possible)  
Severity: Trivial (Some UI enhancements)  
Status: Now fixed  
Assign To: Bianca/Andreea  
Description: The profile button in the header (person icon) is not redirecting the user to the profile page when clicked. Instead, it does nothing.  
Coding error: the method on click is not implemented and attached to the button  
Steps: On any page, when clicking the person icon in the header to access the profile page with the details of the user, the button does nothing. It should redirect the user to its profile page. Fixed by implementing the method profil() to navigateByUrl and linked in button (click) attribute.  
![image](https://user-images.githubusercontent.com/79314110/174129109-b08d9904-da4d-4ed7-bbcc-6b155b3c0f6a.png)  

