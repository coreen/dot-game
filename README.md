# Dot Game

Goal of exercise to complete game where dots move from top to bottom. Player tries to click on dots and receives points when successful.

+---------------------+
|  20px/sec           |
|                     |
|  -|--------------   | <= slider controlling speed dots fall
|  Speed              |
|---------------------|
|            ()       |
|                     |
|                     |
|    _                |
|   (_)               |
|                     |
|                     |
|        ()           |
|                ___  |
|               (   ) |
+---------------------+

Code quality should be equivalent to what would submit in a code review at work.

Should not use any JavaScript libraries, vanilla.

Project set up to use plain CSS, but can use preprocessor if wish.


## Game Requirements

* Game starts on page load
	* New dot appears immediately
* Dots fall at constant rate, controlled by slider at top
	* 10px/sec to 100px/sec
* Dots randomly generated in size ranging from 10px to 100px
	* Dots should never be cut off vertically
* Clicking a dot will remove it from the playing box
	* Increments by inverse number of points to size
		* (10px = 10 points, 100 px = 1 point)
	* 1000ms delay before another dot appears after click
* New dot appears 1000ms regardless if any are clicked
