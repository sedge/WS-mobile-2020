# Wellspent mobile assessment

Thank you for applying! This assessment will help us understand how you reason, how you communicate and your ability to translate requirements into working code.

## Guidelines

1. *This assessment should take no longer than 3 hours*. We'd like to respect your time, so submit whatever you can accomplish within this timeframe.
2. *Submissions will only be accepted as zipped source code, or a github repository*. Please include everything in a single zip file, and email it to kieran@wellspent.co when you are done the assessment.
3. *Incomplete submissions are fine*. Though the assessment is designed to be completable within the timeframe, it is also intended to be challenging.
4. *Where there is ambiguity in the requirements, make a decision that focuses on speedy delivery of working software*.
5. *Be prepared to justify your decisions*. If we decide to bring you in for a technical interview, we will expect you to explain aspects of your implementation and thought process.

## Requirements

*Summary*: You are developing the first iteration of two major feature for Wellspent - Reflection and the Feed screen. You will need to create a new React-Native project and implement basic functionality, such as:

1. Navigation with [React-Nativagion](https://reactnavigation.org/)
2. State management with [Redux](https://redux.js.org/)
3. Centralized request handling, including [network quality detection](https://github.com/react-native-community/react-native-netinfo)

*Evaluation*: Please include [gifs](https://www.cockos.com/licecap/) of your solution in case we experience issues building your application. We have provided a basic web server in this repo that will provide basic GET and PUT endpoints for the feature.

* Story: As a Wellspent user with unreflected transactions,
    * I should be able to quickly reflect on my unreflected transactions as positive, negative or neutral, either by swiping or pressing a button
    * I should see a summary of my reflections after reflecting on all pending transactions
    * Implementation notes: This component should be on a "Reflection" screen accessible through nav bar
* Story: As a Wellspent user with reflected transactions,
    * I should be able to see a visualization of my reflected spending, positive, negative and neutral
    * Implementation notes: This component should be on a "Feed" screen accessible through nav bar

* Bonus story: As a Wellspent user who has reflected on transactions from multiple categories,
    * I should be able to see a visualization of my spending across all categories, filterable by positive, negative or neutral
    * Implementation notes: This component should be a part of the Feed screen

## Starting the mock server

### Requirements

1. Nodejs v12 LTS

### Operating the server

Note that this server performs no validation, and does not persist data to disk. To reset corrupted data, stop the server and start it again.

1. NPM install
2. NPM start

**GET /reflections** - returns reflections (generated in memory)

**PUT /reflections/:reflectionId** - updates a reflection with the passed information and returns the reflection. Payload should be in JSON format, with any values provided overwriting what is on the server.

e.g.
```
GET /reflections
  Response: {
    transactions: [
            {
                "id": 0,
                "merchant_name": "Tim Hortons",
                "merchant_id": 0,
                "category_name": "Restaurants",
                "category_id": 0,
                "amount": 2.99,
                "reflected_as": null,
                "date_of_transaction": "2020-01-14T03:13:31.788Z"
            }
        ]
    }
PUT /reflections/0
  Payload: { reflected_as: 'NEUTRAL' }
  Response: {
        "id": 0,
        "merchant_name": "Tim Hortons",
        "merchant_id": 0,
        "category_name": "Restaurants",
        "category_id": 0,
        "amount": 2.99,
        "reflected_as": 'NEUTRAL',
        "date_of_transaction": "2020-01-14T03:13:31.788Z"
    }
```

## Design mockups

For mockups, see the `mockups` directory of the repo. It contains:

1. Reflection Screen (ignore any functionality not specified in the story).


## Suggestions

1. Focus on quality of architecture over precise styling.




