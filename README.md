# Calibron 12 Puzzle

## Background
I got this puzzle as a 2025 Christmas gift from my Mom. When I attmpted to solve it I quickly realized that
solving this puzzle would require finding a configuration out of 
```
24 * 22 * 20 * ... * 2
= 2 ^ 12 * 12!
= 1,961,990,553,600         
```
possible configurations.
Assuming that I can place one configuration in about 30 seconds going through all possible configurations would
me around 1,865,191.71 years (unless I got super lucky and found the correct configuration within couple of tries).
This inspired me to create a backtracking DFS solver to solve this puzzle for me 🙂.

## What does this repo contain
This repo contains a Calibron 12 solver using a backtracking DFS to find the solution to the Calibron 12 puzzle.
It also contains a vibe coded front end UI to show an animation of the DFS shortened steps.
The animation cut's of deep failed branch before continuing with the correct branch.