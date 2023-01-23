Feature: Patients

@1
Scenario: As a user I should be able to search a patient by name
Given I open "Patients" page
When I type the name
Then the patient entry should be displayed

@2
Scenario Outline: As a user I should be able to add a new patient
Given I open "Patients" page
When I click on the add new patient button from list header
When I type "<name>" in the "name" field
When I type "<phone>" in the "phone" field
When I type "<email>" in the "email" field
When I click on the save button
Then the new patient entry should be displayed

Examples:
|name|phone|email|
|Pios1|(333) 333-3333|pios1@pios.com|
|Pios2|(444) 444-4444|pios2@pios.com|
