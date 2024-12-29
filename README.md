# Unexpected behavior of w-1/2 utility class in Tailwind CSS Flexbox
This repository demonstrates a common issue when using Tailwind CSS's fractional width classes (`w-1/2`, `w-1/3`, etc.) within flexbox containers.  The issue arises because these classes only affect the *content* width of the element, not its total width including padding or borders.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file demonstrates a corrected version.

## Problem
The provided code uses `w-1/2` within a flex container to attempt to make two divs occupy 50% of the container's width each. However, due to the way flexbox works, the divs don't fill the entire available space unless explicitly told to do so.

## Solution
The solution involves using the `flex-grow` property in conjunction with the width classes to ensure the elements expand to fill the available space in the flex container.