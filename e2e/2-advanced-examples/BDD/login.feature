
Feature: End to end login scenarios

    Bynder application

    Scenario: Bynder Login screen scenarios
    Given   I open bynder login screen
    When I login to the dashboard by using valid credentials
    And clicking on profile dropdown
    Then validating user successfully logout
    
    
    