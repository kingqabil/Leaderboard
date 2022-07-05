![](https://img.shields.io/badge/Microverse-blueviolet)

# Leaderboard
## Discription
In this activity I will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. I should develop a first working version of the app following a wire frame, but without styling - just focus on functionality. In following activities, I will consume the Leaderboard API using JavaScript async and await and add some styling.
> _note: you can only access this link if you're a Micronault (Microverse Student)_

## Live Demo 👀

- [Click To See The Live Demo](https://resilient-unicorn-1b69a3.netlify.app/)


## Interaction with the Leaderboard API

- Each new game is created with the POST method using
  ```bash
      {
          "name": "My cool new game"
      }
    ```
 This request returns a result that holds the unique ID for that game:

  ```bash
    {
      "result": "Game with ID: Zl4d7IVkemOTTVg2fUdz added."
    }
  ```
>  This gameID is saved in the localStorage automatically


  The two allowed actions are posting and getting of the scores
- The POST request creates a new Leaderboard score for the given game sending user and score as parameters like this:
  #### Endpoint
  ```bash
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/
  ```

  body parameters
  ```bash
  {
	  "user": "John Doe",
	  "score": 42
  }
  ```
  and it returns

  ```bash
  {
	  "result": "Leaderboard score created correctly."
  }
  ```
- The GET request returns data in JSON format like this:
    #### Endpoint
  ```bash
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/
  ```
  It returns
  ```bash
  {
    "result": [
        {
            "user": "John Doe",
            "score": 42
        },
        {
            "user": "Peter Parker",
            "score": 35
        },
        {
            "user": "Wonder Woman",
            "score": 50
        }
    ]
  }
  ```

  
## Built With 🔨

- Major languages: HTML, CSS, JS
- Frameworks: none
- Technologies used: Git, webpack, API

## Getting started
1. Clone the project
2. Installing the packages
3. On the cmd run `npm run build`
4. Run `npm start`

### Prerequisites

- IDE to edit and run the code (I used Visual Studio Code 🔥).

### Usage

- For anyone who wants to practice HTML5, CSS, and Bootstrap responsive design.
- How to apply responsive design using flexbox and GRID.
- How to use only one breakpoint to make a responsive website.

## Author

👤 **SadiQ HabiL**

- GitHub: [@kingqabil](https://github.com/kingqabil)
- Twitter: [@kingqabil](https://twitter.com/kingqabil)
- LinkedIn: [@kingqabil](https://linkedin.com/in/kingqabil)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/kingqabil/Leaderboard/issues).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

- Hat tip to anyone who's code was used 🔰
- Inspiration 💘
- Microverse program ⚡
