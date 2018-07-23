# The Daily Pennsylvanian Projects

## Getting Started

Save each project in its own folder with an `index.html` file to show up at `https://projects.thedp.com/folder-name`. We standardized this by year and month, so make sure that you're creating pages in the correct folders for when they'll be published. (For example, the Year in Review should go in `[year]/12/year-in-review`).

## Development Checklist
This must all be done before your page can be considered complete! Check with the Director of Web Development if you have any questions about these steps or if you need any help completing them.

### Metadata
  1. Viewport: make sure all pages contain this so they will scale on mobile
  ```HTML
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
  2. Title: the page title should almost always indicate that this is a DP page
  ```HTML
  <title>Page Title | The Daily Pennsylvanian</title>
  ```
  3. Facebook Open Graph information: make sure this is all included, and [test it](https://developers.facebook.com/tools/debug/) to be sure that it looks like you expect!
  ```HTML
  <meta property="og:title" content="[same as page title]">
  <meta property="og:image" content="[this should generally be a link from our CMS]">
  <meta property="og:description" content="[description]">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://projects.thedp.com/[year]/[month]/[project-name]">
  ```
  4. Twitter card information: make sure this is all included, and [test it](https://cards-dev.twitter.com/validator) to be sure that it looks like you expect!
  ```HTML
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[same as page title]">
  <meta name="twitter:image" content="[this should generally be a link from our CMS]">
  <meta name="twitter:description" content="[description, less than 200 characters]">
  <meta name="twitter:url" content="https://projects.thedp.com/[year]/[month]/[project-name]">
  <meta name="twitter:site" content="@dailypenn">
  ```

### HTML
  1. Make sure the Google Analytics script is at the very top of the `<body>`.
  ```HTML
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-707447-4"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-707447-4');
  </script>
  ```
  2. Check with the Director of Web Development if this page should have ads. In most cases, the answer is yes. You will need their help to get the ad code to embed from Google Tag Manager.
  3. Make sure all links are set to `target="_blank"`.

### CSS
  1. Is the page mobile-friendly? Test it out both using your browser of choice (Chrome's tends to be most friendly for developer tools) and on multiple real phones. There should be no horizontal scrolling, and everything should be readable and clickable, even on older and/or smaller phones.
  2. Check with multiple browsers (Chrome, Safari, Firefox, etc.) to make sure everything behaves as you would expect.
  3. Make sure all of your imports use HTTPS! Since our projects site is on HTTPS, some browsers won't load any resources if their URL simply uses HTTP.

### JavaScript
  1. Make your page as lightweight as possible. Only use libraries if you definitely need them, and don't leave any unused `<script src>` calls in.
  2. Make sure all of your imports use HTTPS!

### Images
  1. If you need logos for any of our brands, they can be found in the [dailypenn-logos repo](https://github.com/dailypenn/dailypenn-logos).
  2. If possible, use images that have already been uploaded to our CMS, and simply reference them with the links.
  3. If you need to add extra images, make an `img` folder in your project folder.
  4. Make sure to optimize your images. [ImageOptim](https://imageoptim.com) is a good way to do this.
  5. Make sure to set the `alt` property for all `<img>` tags! This should briefly visually describe the image.
  6. Make sure any image sources you reference use HTTPS!

### Projects Main Page
  1. All project pages should be linked on our [main projects page](https://projects.thedp.com). To do this, edit the `projects.json` file at the root of this repo.
  2. Projects are organized in reverse chronological order, so add the new page to the top of the `"featured"` section. Make sure to fill out every section properly, and to credit all the developers and designers involved.
  3. If you're at all confused or unsure of how this works or should be done, let the Director of Web Development know, and they will be happy to help out!
