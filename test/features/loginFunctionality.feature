Feature: Login Password Functionality

  Scenario: Incorrect Password
    Given I have logged in with incorrect password "IncorrectPassword"
    Then I have no access to the site
    

  Scenario: Login site with correct credential
    Given I have logged in as "UserGroup"
    Then I have access to the site
    Then Signout application

  Scenario: Change Password
    Given I have logged in as "UserGroup"
    When Navigate to Profile tab 
    Then I change new password as "ChangePassword"
    Then Signout application
