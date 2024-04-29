Feature: Login functionality

    Scenario Outline: Verify login functionality with invalid credentials
        Given User on the SauceDemo login page
        When User enter username "<username>" and password "<password>"
        And User click the login button
        Then User should see an error message saying "<errorMessage>"

        Examples:
            | username        | password   | errorMessage                                                              |
            | standard_user   | secret_sau | Epic sadface: Username and password do not match any user in this service |
            | locked_out_user | secret_sau | Epic sadface: Username and password do not match any user in this service |
            | problem_user    | secret_sau | Epic sadface: Username and password do not match any user in this service |
