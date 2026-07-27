# Social Media Card Activity
In this activity, you will create a social media card that will display the Twitter feed for Rio Salado College.

## Activity Objectives
1. Create a social media widget to display a Twitter timeline.
2. Obtain the embed code for a timeline.
3. Style the elements with CSS.

## Twitter Timeline Code
To complete this activity, you will need to obtain the embed code for a Twitter timeline. You will use the Rio Salado profile.
1. Navigate to [Twitter's publishing page](https://publish.twitter.com/#).
2. Paste in the following URL into the *What would you like to embed?* field and press *Enter*: `https://twitter.com/RioSaladoOnline`
3. Click on the *Embedded Timeline* option.
4. Click on the *Copy Code* button.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Use the `Save As` command to save a new file.
   1. Save the file to the `adv-styling` folder with the name: `social-media-card.html`.
3. Within the header:
   1. Change the heading text to the following: `Twitter Card`
4. Within the main section:
   1. Remove the `dl` element.
   2. Create an `aside` element with the following class: `social-card twitter`
   3. Paste the Twitter Timeline code you obtained previously into the `aside` element.
5. Save and apply a commit to the file.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements.

1. Open the `main.css` file from the `css` folder.
2. Create a custom property called `twitter-blue` and use the value of `rgb(29, 155, 240)`.
3. Style the `social-media` class element as follows:
   1. Apply a width of 300px.
   2. Apply a height of 400px.
   3. Change the `overflow-y` property to `scroll`. *This will hide any content that is beyond 400px in height and add a scrollbar to the element so users can scroll to the hidden content.*
   4. Add a thin border width.
   5. Add a solid border style.
   6. Add a border radius to style the two left corners with `.5em`, leaving the two right corners as right angles. (*This is done to account for the scrollbar, which will stick out beyond the*)
   7. Add a padding of `.5em`.
   8. Add a top and bottom margin of `1em` and a left and right margin of `auto`.
   9. Apply a box shadow that is positioned to the right `3px`, to the bottom `3px`, a blur radius of `5px`, and a transparent gray color.
4. Style the `twitter` class as follows:
   1. Apply the twitter blue color to the border.
5. Save and apply a commit to the file.

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.