Feature: User Profile Functionality

    Scenario: Login site with credential
        Given I have logged in as "UserGroup"
        Then Signout application

    Scenario: Update the Profile Information for First Name
        Given I have logged in as "UserGroup"
        When I navigate to Profile page
        Then I update the user profile information for First Name
        Then Signout application

    Scenario: Update the Profile Information for Last Name
        Given I have logged in as "UserGroup"
        When I navigate to Profile page
        Then I update the user profile information for Last Name
        Then Signout application

    Scenario: Update the Profile Information for Email
        Given I have logged in as "UserGroup"
        When I navigate to Profile page
        Then I update the user profile information for Email
        Then Signout application
