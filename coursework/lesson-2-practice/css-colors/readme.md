# HSL Colors Activity
In this activity, you will create color schemes for an alert message using HSL colors.

## Activity Objectives
1. Create 3 color schemes for different types of alert message boxes.
2. Style the elements with CSS.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Use the `Save As` command to save a new file.
   1. Save the file to the `colors` folder with the name: `alert-messages.html`.
3. Within the header:
   1. Change the heading text to the following: `HSL Colors`
4. Within the main section:
   1. Remove the `dl` element.
   2. Create a `div` element and apply a `class` with a value of `alert warning` (this is apply two different classes to the element so you can target them differently) and add the following:
      1. A level 2 heading with the following text: `Warning`
      2. A paragraph filled with a sentence of placeholder text.
   3. Copy the `div` element and paste it twice to create 2 more alert boxes.
      1. The second alert box will be for an `error` message, so adjust the heading and class accordingly.
      2. The third alert box will be for an `information` message, so adjust the heading and class accordingly.
5. Save and apply a commit to the file.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements.

1. Open the `main.css` file from the `css` folder.
2. Create the following within the `:root` declaration block.
   1. Create 9 new custom properties with HSL colors for the background color, border color, and text color for the warning (a yellow scheme), error (a red scheme), and information (a blue scheme) message boxes.
3. Style the `alert` class elements as follows:
   1. Add a `width` of `40` viewport width units.
   2. Add a solid border style.
   3. Add a `2px` border width.
   4. Add a margin of `.5em auto`.
   5. Add a padding of `.5em`.
   6. Move the element from the `top` by `140px`.
4. Style the alert heading as follows:
   1. Change the font-size to `1.2em`.
   2. Center align the text.
5. Style the `warning` class by applying the background color, border color, and text color.
6. Style the `error` class by applying the background color, border color, and text color.
7. Style the `information` class by applying the background color, border color, and text color.
8. Save and apply a commit to the file.

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.