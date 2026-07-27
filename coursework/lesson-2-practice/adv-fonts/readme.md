# Font-Face Activity
In this activity, you will download and utilize a custom variable font to style a web page.

## Activity Objectives
1. Download a font from Google Fonts to use.
2. Apply the font family and variants to elements on the page.
3. Style the elements with CSS.

## Download a Font
Follow these steps to download a font to use.
1. Navigate to the [Google Fonts](https://fonts.google.com/) website.
2. Check the `Show only variable fonts` option at the top.
3. Find the `Roboto Slab` font.
4. Click on the font to open it.
5. Click on the `Download family` button.
6. Save the `ZIP` file to the `adv-fonts` folder within the `lsn2-PracticeActivities` repo.
7. Extract the contents of the zip file into a sub-folder called `fonts`.
8. Browse the files within the new folder to see the files within. 
   1. Also read the `TXT` files (especially the `README.txt` file) for information from the creator of the font.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Use the `Save As` command to save a new file.
   1. Save the file to the `adv-fonts` folder with the name: `font-face.html`.
3. Within the header:
   1. Change the heading text to the following: `Custom Fonts`
4. Within the main section:
   1. Remove the `dl` element.
   2. Add a level 2 heading with the text: `Heading 2`
   3. Add 2 paragraph elements with placeholder text.
   4. Add a level 3 heading with the text: `Heading 3`
   5. Add 2 paragraph elements with placeholder text.
5. Save and apply a commit to the file.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements. Keep in mind the cascade, specificity, and inheritance as you apply properties to the various elements.

1. Open the `main.css` file from the `css` folder.
2. Create a font-face rule with the following properties:
   1. Define the font family to be `Roboto Slab Variable`
   2. Define the source URL to be the variable font `ttf` file with a format of `truetype`.
3. Style the level 2 heading element as follows:
   1. Define the font family with the new font face. 
      1. Add a fallback of `sans-serif`.
   2. Apply a font weight of `800`.
   3. Apply a color of your choosing.
4. Style the level 3 heading element as follows:
   1. Define the font family with the new font face.
      1. Add a fallback of `sans-serif`.
   2. Apply a `100` font weight.
   3. Apply a color of your choosing.
5. Save and apply a commit to the file.

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.