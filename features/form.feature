Feature: Company Onboarding Form

  @smoke
  Scenario: User can fill the company onboarding form
    Given the user opens the onboarding form
    When the user enters company name "Example Corp"
    And the user enters diminutive name "EC"
    And the user enters CIN "U12345ABC"
    And the user enters PAN "ABCDE1234F"
    And the user enters address "123 Main Street"
    And the user enters date "2026-09-28"
    And the user submits the onboarding form
    Then the onboarding form should remain on the form page

  @validation
  Scenario: User cannot submit the onboarding form without required fields
    Given the user opens the onboarding form
    When the user submits the onboarding form
    Then the onboarding form should remain on the form page
