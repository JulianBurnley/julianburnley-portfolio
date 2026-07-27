# Selector Activity
In this activity, you will utilize advanced selector types to target elements on the page to apply property styles.

## Activity Objectives
1. Create a reset declaration block.
2. Target a table row based upon its relationship within the table.
3. Style the elements with CSS.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Use the `Save As` command to save a new file.
   1. Save the file to the `css-selectors` folder with the name: `selectors.html`.
3. Within the header:
   1. Change the heading text to the following: `Advanced CSS Selectors`
4. Within the main section:
   1. Remove the `dl` element.
   2. Create a level 2 heading with the following text: `Types of Selectors`
   3. Create a 3 column, 9 row table with a head and body using the table below to fill in the content.
      1. For the `Description` column, add your own description that explains the type and how it is used to target content on the web page.
      2. For the `Example` column, be sure to use the `code` element.
5. Save and apply a commit to the file.

>### Selector Table
>Type | Description | Example
>---- | ----------- | ------:
>Element | | p
>Class | | .class 
>Id | | #id
>Universal | | *
>Pseudo-class | | :hover
>Pseudo-element | | ::before
>Combinators | | .parent > .child
>Attribute | | [href$=".pdf"]

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements.

1. Open the `main.css` file from the `css` folder.
2. Update the author and section information within the comment block at the top.
3. Create a browser reset declaration block (this is a technique to remove any default stylings that browsers may apply to elements so they do not get in the way of your own design and layout process):
   1. Create a universal selector.
   2. Set the margins and padding to `0`.
   3. Set the `box-sizing` property to `border-box`.
   4. Add a comment above the selector with the following text: `Browser reset`
   > TIP: Be sure this declaration block is placed before any existing declaration blocks or it will override the other styles, which is not desired. You'll learn more about this when you study the cascade module within the lesson.
4. Style the table element as follows:
   > TIP: You will need to use some of the advanced selector types that you learned about in the lesson to achieve the desired results.
   1. Apply the following to the table head row:
      1. A dark background color of your choosing.
      2. A light text color of your choosing.
      3. A thick bottom border.
   3. Apply the following to the table body rows:
      1. A thin bottom border to each table row with a style and color of your choosing.
      2. Change the background color of every other row to a light color of your choosing (i.e., so every row is in an alternate color).
      3. Align the text to the right in the last `td` element of each row.
      4. Apply a thick bottom border to the last row.
5. Style the `code` element as follows:
   1. Apply the following font family: `Consolas, "Lucida Console", monospace`
   2. Apply a text color of your choosing.
6. Style the footer as follows:
   1. Change the `display` of the `span` elements to `block`.
   2. Add a left margin of `8px` to the `span` elements.
   3. Target the `strong` element, but `not` the `strong` elements in the `span` elements and apply the following;
      1. Change the `display` to `block`.
      2. Add an `8px` bottom padding.
7. Save and apply a commit to the file.

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.