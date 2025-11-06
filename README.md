The .gitignore generator
Stop committing .env and node_modules/.

This is a simple, front-end web application that helps developers quickly generate comprehensive .gitignore files. 
Instead of searching for individual templates, users can search for and select all the technologies, frameworks, and tools in their stack, and the app will combine the official .gitignore templates into a single, ready-to-use file.

📸 Preview :
<img width="1898" height="890" alt="image" src="https://github.com/user-attachments/assets/3b36a978-b538-46fe-9074-cc6339066848" />



✨ Features

Interactive Builder: Add and remove technologies as "pills" to build your stack.
Live Search: Quickly find any technology from the list (e.g., "React", "Python", "VSCode").
Real-time Output: The .gitignore file is generated live in the output panel as you add or remove items.
Copy to Clipboard: Instantly copy the complete file content.
Download File: Download the generated content directly as a .gitignore file.
Sourced from GitHub: All templates are based on GitHub's official gitignore repository.

🛠️ Tech Stack

HTML5: For the core structure.
Tailwind CSS: For all styling and layout (via the CDN).
JavaScript (ES6+): For all interactivity, DOM manipulation, and logic.
Lucide Icons: For clean, modern icons (via the CDN).

🚀 How to Use
Since this is a pure HTML, CSS, and JS project with no build steps, you can use it immediately.
Clone this repository:

Bash

git clone https://github.com/ranjitjangid/gitignore-generator.git

Navigate to the project directory:

Bash

cd gitignore-generator

Open the index.html file directly in your web browser.
That's it! You can also use a simple server like the Live Server extension for VSCode.


Event Listeners: Standard JavaScript event listeners are used for the search bar (input), checkboxes (change), "Add Custom" button (click), copy/download buttons (click), and removing pills (click event delegation).
