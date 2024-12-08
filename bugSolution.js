To fix this issue, ensure that your Tailwind CSS stylesheet is loaded before the framework's CSS file.  You can adjust the order in your HTML's `<head>` section, or configure your build process to prioritize Tailwind's CSS inclusion. Here's an example of how to adjust the order in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/tailwind.css">  <!-- Tailwind CSS first -->
  <link rel="stylesheet" href="path/to/framework.css"> <!-- Framework CSS second -->
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```

In build processes, like those used with webpack or Vite, adjust the order in your configuration files to ensure that Tailwind CSS is imported/processed before the framework's CSS.