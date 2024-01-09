
# Water Jug Challenge

Water Bucket App is an application designed to address and solve the popular problem of "Water Jug Riddles". These puzzles involve the use of water jugs with specific capacities to measure desired quantities of liquid. The app offers an interactive interface for users to explore and solve various puzzles related to efficient use of water jugs.




## Algorithm Used

The algorithm used is a breadth-first search (BFS) approach. Start with an initial state (both containers empty) and explore all the possible actions that can be taken from that state. The algorithm considers filling or emptying the containers, and transferring water between them. A queue is used to keep track of states pending exploration.

The algorithm continues exploring until the solution is found (one of the capacities matches the desired quantity) or until there are no more states to explore. If a solution is found, the steps necessary to reach it are saved. If no solution is found, it is marked as resolved with an empty solution.


## Run Locally

Clone the project

```bash
  git clone https://github.com/oscarjmunoz/challenge_water_bucket.git
```

Go to the project directory

```bash
  cd challenge_water_bucket
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Demo

https://oscarjmunoz.github.io/challenge_water_bucket/


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Feedback

If you have any feedback, please reach out to us at oscarmunoz03@gmail.com

