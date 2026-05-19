# Week 1 Example 1: Images and Shapes

## What This Example Demonstrates

This example shows a simple p5.js sketch embedded in an HTML page together with a separate controller image.

- `index.html` loads the CSS and p5.js library, then runs `sketch.js`.
- The controller image is displayed using a standard HTML `<img>` element.
- `sketch.js` creates a `400x400` canvas and draws a black background.
- The sketch uses `rectMode(CENTER)`, `noStroke()`, `background()`, `fill()`, and `rect()` to draw stacked rectangular shapes.
- The result is a static block-style arrangement rendered below the HTML image.

## Setup and Interaction Instructions

To view the project, open `index.html` in a browser. No interaction is required because the sketch is static.

If you prefer to use a local server, you can run this from the project folder:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Files

- `index.html` — page structure, stylesheet link, image element, and p5 script includes
- `style.css` — page styling, black background, centered controller image
- `sketch.js` — p5.js sketch that draws the block shapes on a black canvas

## Assets

| File | Source |
|------|--------|
| `images/controller.png` | Controller image asset |

## References

- p5.js documentation: https://p5js.org/reference/
