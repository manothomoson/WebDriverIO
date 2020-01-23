Feature: Document Search

  Scenario: Customer number
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with account number "617194"
    Then Result contain customer number "617194"
    Then Signout application

#  Scenario: Customer number - API
#     Given I have logged in as "UserGroup"
#     When I search with document type "Invoices"
#     When I search with account number "617194"
#     Then Result contain customer number "617194"
#     When I launch externalClientAPI
    # Then Signout application


  Scenario: Search by document Type
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with date from "2/25/2018" to "5/1/2019"
    Then Result contain document type "Invoices"
    Then Signout application

Scenario: Partial name
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with name "SIM"
    Then Results contain "SIM" 
    Then Signout application


  Scenario: Date Range
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with date from "2/25/2018" to "5/1/2019"
    Then Results should be from "2/25/2018" to "5/1/2019"
    Then Signout application

Scenario: Export the data from the Search Results page - Name
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with name "SIM"
    Then Export data from Search results
    Then assert downloaded file "DocumentSearchResults.csv" in path "chromeDownloads"
    Then Signout application

Scenario: View the last Page of the Search results
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with name "SIM"
    Then View the last page of the Search result
    Then Signout application


  Scenario: Search and View pdf document
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with date from "2/25/2018" to "5/1/2019"
    When I open document from search result page
    Then View pdf document and verify
    Then Signout application

Scenario: Change result page size
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with date from "2/25/2018" to "5/1/2019"
    When I change page size to "50"
    Then Page size changes to "50"
    Then Signout application

    
  Scenario: Sort results by Member number
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with name "SIM"
    Then Results contain "SIM"
    When I sort by member number
    Then Result contain sorted member number
    Then Signout application

  
Scenario: Reports - Activity Reports
    Given I have logged in as "UserGroup"
    When I navigate to "Reports" tab
    When I select "Activity Reports" from reports tab
    When fill details and run report for activity report "ActivityReport"
    Then assert run report generated for "ActivityReport"
    Then export the run report results
    Then assert downloaded file "ActivityReport.csv" in path "chromeDownloads"
    Then Signout application

Scenario: Reports - Email Reports
    Given I have logged in as "UserGroup"
    When I navigate to "Reports" tab
    When I select "Email Report" from reports tab
    When fill details and run report for email report "EmailReport"
    Then assert enrollment report generated for "EmailReport"
    Then export the run report results
    Then assert downloaded file "EnrollmentReport.csv" in path "chromeDownloads"
    Then Signout application


# -----------------------------------------------------------------------
