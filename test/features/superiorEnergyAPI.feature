Feature: Superior Energy - API 

Scenario: Superior Energy - API - Generate invoice pdf through API response and validate
    Given I have logged in as "UserGroup"
    When I search with document type "Invoices"
    When I search with account number "617194"
    Then Result contain customer number "617194"
    When I launch externalClientAPI
    Then assert downloaded file "binarydata.dat" in path "chromeDownloads"
