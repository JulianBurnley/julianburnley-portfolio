# Import and Support Activity
In this activity, you will utilize the import and support CSS rules to import an online font and create fallback mechanisms to support browsers that do not support variable fonts.

## Activity Objectives
1. Import an online font from Google Fonts.
2. Create font face rules to define the fonts to be used.
3. Create a support rule to check if the browser supports variable fonts.
4. Style the elements with CSS.

## Select a Font
Follow these steps to select an online font to use.
1. Navigate to the [Google Fonts](https://fonts.google.com/) website.
2. Check the `Show only variable fonts` option at the top.
3. Find the `Roboto Slab` serif font.
4. Click on the font to open it.
5. Click on the `+ Select this style` option next to the `Light 300`, `Regular 400`, and `Bold 700` options.
   > Note: A side panel should appear after you select the first option titled `Selected families` showing your selected fonts. If it does not appear, click on the `Show your selected families` button in the upper right corner to open it. The button has three squares and a plus sign in the lower right corner of the icon. 
6. Under the `Use on the web` heading in the `Selected families` panel:
   1. Click on the `@import` option.
   2. Copy the code provided.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Use the `Save As` command to save a new file.
   1. Save the file to the `css-rules` folder with the name: `import-fallback.html`.
3. Within the head:
   1. Add the code you copied from Google Fonts above the link to the external stylesheet. *This will ensure the fonts are loaded before the stylesheet is.*
4. Within the header:
   1. Change the heading text to the following: `Importing Fonts and Fallback Support`
5. Within the main section:
   1. Remove the `dl` element.
   2. Create an unordered list with an `id` of `font-import`.
   3. Create 2 list items using the three font families you are using: `Roboto Slab` and `Roboto Slab Variable`.
6. Save and apply a commit to the file.

## Update Index and Navigation
1. Open the `index.html` file within the root of the repo.
2. Within the `nav` element:
   1. Update the `href` attributes to point to the `HTML` files you created for each activity and the `index.html` file for the `home` link.
3. Within the main section:
   1. Finish the sentences of the `dd` elements to list one thing you learned in each activity.
4. Save and apply a commit to the file.
5. Copy the updated `nav` element and paste it into each `HTML` page you created so the navigation menu works on every page within the repo.
6. Save and apply commits to each file after updating the navigation.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements.

1. Open the `main.css` file from the `css` folder.
2. Style the list as follows:
   1. Apply the font family of `Roboto Slab` and `serif` fallback.
   2. Apply a font weight of `400`.
3. Create a support rule as follows:
   1. Check that the browser supports the `font-variation-settings` property with a `normal` value.
   2. Style the list as follows:
      1. Apply the font family of `Roboto Slab Variable` and a fallback of `Roboto Slab` and `serif`.
      2. Apply a font weight of `700`.
4. Save and apply a commit to the file.

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.