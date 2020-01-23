Feature: Admin- Creating new user account

    Scenario: Create New User Account
        Given I have logged in as "UserGroup"
        When Navigate to admin tab
        Then I have create new user "CreateAdminNewUser"
        Then Signout application

    Scenario: Lock User Account
        Given I have logged in as "UserGroup"
        When Navigate to admin tab
        Then I have lock user account "LockUserAccount"
        Then Signout application

    Scenario: Unlock User Account
        Given I have logged in as "UserGroup"
        When Navigate to admin tab
        Then I have unlock user account "UnlockUserAccount"
        Then Signout application

    Scenario: Remove User Account
        Given I have logged in as "UserGroup"
        When Navigate to admin tab
        Then I have remove a user account "RemoveUserAccount"
        Then Signout application
