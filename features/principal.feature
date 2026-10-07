Feature: Principal Management

  @smoke
  Scenario: Successfully create a principal with valid details
    Given the user is on the Add Principal page
    When the user enters "Suzlon Energy Limited" in the principal name field
    And the user enters "Suzlon" in the short name field
    And the user enters "AAACS1234A" in the PAN field
    And the user enters "27AAACS1234A1Z5" in the GSTIN field
    And the user enters "Pune, Maharashtra" in the address field
    And the user enters "Rahul Sharma" in the contact person field
    And the user enters "rahul@suzlon.com" in the email field
    And the user enters "9876543210" in the phone number field
    And the user clicks the principal submit button
    Then the principal should be created successfully

  @smoke
  Scenario: Submit button remains disabled when mandatory fields are empty
    Given the user is on the Add Principal page
    Then the principal submit button should be disabled

  @regression
  Scenario: User cannot submit the form with an invalid email
    Given the user is on the Add Principal page
    When the user enters "Suzlon Energy Limited" in the principal name field
    And the user enters "Suzlon" in the short name field
    And the user enters "AAACS1234A" in the PAN field
    And the user enters "Pune, Maharashtra" in the address field
    And the user enters "Rahul Sharma" in the contact person field
    And the user enters "rahul-suzlon.com" in the email field
    And the user enters "9876543210" in the phone number field
    Then the principal submit button should be disabled
