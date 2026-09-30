Feature: User Management

  Scenario: Successfully create a user with valid details
    Given the user is on the Add User page
    When the user enters "Rahul Sharma" in the user name field
    And the user enters "rahul@example.com" in the user email field
    And the user enters "9876543210" in the user phone number field
    And the user selects "contractor" as the user role
    And the user clicks the user submit button
    Then the user should be created successfully

  Scenario: Submit button remains disabled when mandatory fields are empty
    Given the user is on the Add User page
    Then the user submit button should be disabled