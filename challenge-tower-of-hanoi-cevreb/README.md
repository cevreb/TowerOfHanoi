# Kenzie Academy Challenge: Tower of Hanoi

Follow the instructions provided on `my.kenzie.academy` for this challenge. The `code.js` file is a placeholder. Feel free to rename it or add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

_(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_

# MY PLAN:  

Initialize a towers array with three arrays for the three towers

When dom content loads:
  - Call render function to display the initial state
  - Add click event listener to resetBtn, calling resetGame function
  - Add click event listener to each tower, calling the moveDisk and checkWin functions

Render function:
  For each tower:
    - Clear the HTML content of the tower
    - For each disk in the tower:
      - Create a new div element for the disk
      - Add classes and styles to the disk element for each size
      - Append the disk element to the tower

Initialize selectedDisk to null

When dom content loads (again):
  - Call render function
  - Add click event listener to resetBtn, calling resetGame function
  - Add click event listener to each tower, calling selectDisk or moveDisk based on whether a disk is already selected

SelectDisk function:
  - Get the selected tower
  - If the tower is not empty:
    - Set selectedDisk to the top disk in the tower
    - Call render function again

MoveDisk function:
  - If no disk is selected, do nothing
  - Get the destination tower
  - If the move is valid:
    - Get the source tower index
    - Move the selected disk from the source tower to the destination tower
    - Call render function again

GetDestinationTower function:
  - Given the source tower index, return the tower that is not the source tower

IsValidMove function:
  - If the destination tower is empty, the move is valid
  - Otherwise, the move is valid if the selected disk is smaller than the top disk of the destination tower

CheckWin function:
  - If the third tower has all four disks:
    - Display a "You Win!" message

ResetGame function:
  - Reset the towers to the initial state
  - Call render function

## Plan for adding drag and drop functionality: 

Drag and Drop attributes:
  - Will need to add ondragover and ondrop attributes to the tower elements to make them droppable

Modify JS file for drag and drop: 
  - Add event listenter 'dragstart' to my disks
  - Add eveny listener 'dragover' and 'drop' to the towers

Make sure each disk is draggable when it is rendered to the DOM

Create event handlers for dragging and dropping 

Create a function for allowing drops (which is the default of not allowing drops)

## Plan for adding "solve it for me" button: 

When DOM content loads:
  - Call solveGame function when the solveBtn is clicked

solveGame function:
  - Find the source tower index with disks
  - Set the destination tower index to 2
  - Get the number of disks in the source tower
  - Call hanoiRecursive function with the number of disks, source, destination, and towers
  - Render the updated state
  - Check if the game is won

hanoiRecursive function with parameters (n, source, destination, towers):
  If n is greater than 0:
    - Calculate the auxiliary tower index
    - Call hanoiRecursive with n-1, source, auxiliary, and towers
    - Move a disk from the source tower to the destination tower
    - Render the updated state
    - Call hanoiRecursive with n-1, auxiliary, destination, and towers

Add event listener:
  - Add a click event listener to the solveBtn, calling solveGame function

## RESOURCES: 

Drag and drop API: 
  - https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

Received some feedback from friend/fellow developer Jordan Robert
  

## Reflection 

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

_(Put your reflection answer here.)_

When I was planning this project, I thought back to the connect four project we had previously completed. I knew that I was going to have to interact with the DOM in order to render game board pieces and move them around. I went back and reviewed old code for multiple old projects that I knew had similar traits. I decided to go with vanilla JS to create the game because I wanted to brush up on these skills again. In the beginning, I did have a hard time figuring out how exactly I was going to select each game piece individually. After doing some research about building game boards using JS, I decided that utilizing parsInt would be a good option. I really wanted to have a reset button render on the page when the player wins, but I could not get the functionality down. I am hoping to be able to work that out during the next part of the challenge!

