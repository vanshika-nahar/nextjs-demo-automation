Feature: Home Page

  @smoke
  Scenario: User can open the home page
    Given the user opens the application
    Then the home page title should be visible

  @regression
  Scenario: User can navigate from home page to the onboarding form
    Given the user opens the application
    When the user clicks the onboard company link
    Then the onboarding form page should be displayed