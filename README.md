# Ball_is_Life

## Ball is life project, where we grab information from a 3rd party API and create our own React application.

## Project Description 
An NBA page that displays all of the NBA teams and the players on them.

## Link to the API you plan to use
GET https://www.balldontlie.io/api/v1/players
GET https://www.balldontlie.io/api/v1/teams

## Example data response you plan to use
```json
PLAYER DATA
{
  "data":[
    {
      "id":237,
      "first_name":"LeBron",
      "last_name":"James",
      "position":"F",
      "height_feet": 6,
      "height_inches": 8,
      "weight_pounds": 250,
      "team":{
        "id":14,
        "abbreviation":"LAL",
        "city":"Los Angeles",
        "conference":"West",
        "division":"Pacific",
        "full_name":"Los Angeles Lakers",
        "name":"Lakers"
      }
    }
    ...
 ],
 "meta": {
    "total_pages": 50,
    "current_page": 1,
    "next_page": 2,
    "per_page": 25,
    "total_count": 9999
  }
}
TEAM DATA
{
  "data": [
    {
      "id":14,
      "abbreviation":"LAL",
      "city":"Los Angeles",
      "conference":"West",
      "division":"Pacific",
      "full_name":"Los Angeles Lakers",
      "name":"Lakers"
    },
    ...
  ],
  "meta": {
    "total_pages": 1,
    "current_page": 1,
    "next_page": null,
    "per_page": 30,
    "total_count": 30
  }
}

## Visual of your component hierarchy

![B03C8A41-DD6B-4A22-97E8-4AD6D9F0CC41_1_201_a](https://user-images.githubusercontent.com/97857514/168511441-3d1fef03-3289-449a-96d2-174cf6882502.jpeg)



## Wire Frames

![70B00F87-2CEB-4D2F-B432-565EFCA88040_1_201_a](https://user-images.githubusercontent.com/97857514/168511398-fd612056-8d5c-411f-b357-26154acc3497.jpeg)

![D0BFFD22-889D-4BC7-9338-CEB1B8EA7AA4_1_201_a](https://user-images.githubusercontent.com/97857514/168511562-fd9cd509-e03d-41b2-bbc9-1f8f638dd9d6.jpeg)



## User Stories
The homepage will load all of the teams with an option under each team name to select a link named roster. When the user clicks roster the page will display every player on that team. They will be able to see the player's position, jersey number, and stats. The navigation bar will include a home button, a search field (search for players by name), a create player button, an edit player button, and a remove player button.

### MVP Goals
- Working 3rd Party API linked
- Full CRUD
- MongoDB

### Stretch Goals (if applicable)
- Player has an individual page rendered where all the information on the player will be displayed
- Roster page will be customized to the specific team. The team colors will be used to format the page and the team logo will be displayed