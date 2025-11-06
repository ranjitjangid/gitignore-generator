   //gitignoreTemplates  Sourced from https://github.com/github/gitignore


const gitignoreTemplates = {
    'Android': `
# Android
*.apk
*.aab
*.ap_
*.ap
*.a
*.prl
*.exp
*.lib
*.swp
*.suo
*.user
*.lock
*.pdb
*.pdb.meta
*.log
*.pfx
*.key
*.p12
*.properties
*.keystore
*.jks
*.cer
*.crt
*.der
*.srl
*.pem
*.pub
/build/
/app/build/
/app/release/
/app/debug/
/captures/
/.gradle/
/.idea/
/local.properties
/gradle.properties
/gradlew
/gradlew.bat
*.iml
*.nav
*.orig
*~
# Slices
_*.java
# External native build
.externalNativeBuild
# C/C++
*.o
*.so
*.obj
*.lib
*.a
*.la
*.lo
*.h
*.hpp
*.c
*.cc
*.cpp
*.cxx
*.m
*.mm
*.out
*.depend
*.d
*.exe
*.dll
*.class
*.jar
*.class
# Misc
.DS_Store
Thumbs.db
`,
    'Ansible': `
# Ansible
*.retry
*.log
`,
    'Angular': `
# Angular
/dist/
/node_modules/
/npm-debug.log
/yarn-error.log
/yarn-debug.log
/coverage/
*.log
.idea/
.vscode/
`,
    'Atom': `
# Atom
.atom/
.node-gyp/
`,
    'AWS': `
# AWS
.aws/
aws-credentials.conf
`,
    'C++': `
# C++
*.o
*.out
*.exe
*.obj
*.dll
*.lib
*.a
*.so
*.gch
*.pch
*.suo
*.user
*.pdb
*.ilk
*.map
*.log
*.tmp
*.sbr
*.bsc
*.idb
*.ncb
*.dep
*.bak
*.vspscc
*.vssscc
*.scc
*.vssettings
*.build
*.build.cs
*.build.user
*.build.in
*.build.bat
*.build.sh
*.build.xml
*.build.properties
*.build.config
/build/
/Debug/
/Release/
/Bin/
/bin/
/Obj/
/obj/
`,
    'C#': `
# C#
*.o
*.obj
*.exe
*.dll
*.pdb
*.user
*.cache
*.suo
*.log
*.tmp
*.bak
*.vspscc
*.vssscc
*.scc
*.vssettings
/bin/
/obj/
/Bin/
/Obj/
/Debug/
/Release/
/packages/
/Build/
/build/
*.DS_Store
`,
    'CakePHP': `
# CakePHP
/tmp/
/logs/
/config/database.php
/config/app.php
/vendor/
/plugins/
/webroot/css/
/webroot/js/
/webroot/img/
/webroot/files/
`,
    'Django': `
# Django
*.log
*.pot
*.pyc
*.pyo
*.db
*.sqlite3
/db.sqlite3
/local_settings.py
/__pycache__/
/media/
/static/
/staticfiles/
.env
.web
*.swp
*.swo
*.DS_Store
`,
    'Docker': `
# Docker
docker-compose.yml
docker-compose.override.yml
.dockerignore
Dockerfile
`,
    'DotNetCore': `
# .NET Core
[Bb]in/
[Oo]bj/
project.lock.json
*.user
*.suo
*.sln.docstates
`,
    'Drupal': `
# Drupal
/sites/default/files/
/sites/default/private/
/sites/all/modules/
/sites/all/themes/
/sites/all/libraries/
/vendor/
/node_modules/
/composer.lock
*.DS_Store
`,
    'Eclipse': `
# Eclipse
.project
.classpath
.settings/
*.properties
*.launch
`,
    'Elixir': `
# Elixir
/_build/
/deps/
/cover/
*.ez
*.log
erl_crash.dump
`,
    'Flask': `
# Flask
*.pyc
*.pyo
__pycache__/
instance/
venv/
.env
.venv
*.db
*.sqlite3
*.log
*.swp
*.swo
.DS_Store
`,
    'Flutter': `
# Flutter
.dart_tool/
.idea/
.log
.packages
build/
*.iml
*.flutter-plugins
*.flutter-plugins-dependencies
*.lock
*.DS_Store
`,
    'Gatsby': `
# Gatsby
.cache/
/public/
node_modules/
.env.*
`,
    'Go': `
# Go
*.o
*.a
*.exe
*.out
*.bin
*.log
*.test
*.prof
/vendor/
/pkg/
/bin/
/obj/
`,
    'Hugo': `
# Hugo
/public/
/resources/
/dist/
*.log
`,
    'Java': `
# Java
*.class
*.log
*.jar
*.war
*.ear
*.zip
*.tar.gz
*.rar
/target/
/bin/
/build/
/.gradle/
/.idea/
*.iml
*.ipr
*.iws
*.DS_Store
/out/
`,
    'Jekyll': `
# Jekyll
_site/
.sass-cache/
.jekyll-metadata
.jekyll-cache/
`,
    'JetBrains': `
# JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.)
.idea/
*.iml
*.ipr
*.iws
/out/
`,
    'JupyterNotebooks': `
# Jupyter Notebooks
.ipynb_checkpoints/
*.db
*.log
`,
    'Kotlin': `
# Kotlin
*.class
*.jar
*.war
*.ear
/build/
.gradle/
.idea/
*.iml
*.ipr
*.iws
*.log
*.DS_Store
`,
    'Kubernetes': `
# Kubernetes
*.local.yaml
*.local.yml
`,
    'Laravel': `
# Laravel
/vendor/
/node_modules/
/public/build/
/public/hot
/storage/*.key
/storage/logs/*.log
.env
.phpunit.result.cache
Homestead.yaml
Homestead.json
npm-debug.log
yarn-error.log
yarn-debug.log
`,
    'Linux': `
# Linux
*~
.DS_Store
Thumbs.db
ehthumbs.db
*.swp
*.swo
`,
    'macOS': `
# macOS
.DS_Store
.AppleDouble
.LSOverride
Icon\r
._*
.Spotlight-V100
.Trashes
Network Trash Folder
Temporary Items
`,
    'NextJS': `
# Next.js
.next/
out/
build/
node_modules/
.env.local
.env.*.local
npm-debug.log
yarn-debug.log
yarn-error.log
`,
    'Node': `
# Node.js
node_modules/
npm-debug.log
yarn-debug.log
yarn-error.log
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
*.log
*.swp
*.swo
.DS_Store
`,
    'NuxtJS': `
# Nuxt.js
.nuxt/
dist/
node_modules/
.env
npm-debug.log
yarn-debug.log
yarn-error.log
`,
    'PHP': `
# PHP
/vendor/
/node_modules/
composer.lock
*.log
.env
.DS_Store
Thumbs.db
`,
    'Python': `
# Python
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
/instance/
.env
.venv
env/
venv/
ENV/
.idea/
*.log
*.pot
*.db
*.sqlite3
*.swp
*.swo
.DS_Store
`,
    'React': `
# React
build/
.next/
node_modules/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log
yarn-debug.log
yarn-error.log
*.log
.DS_Store
`,
    'ReactNative': `
# React Native
*.js.map
/ios/Pods/
/ios/build/
/android/build/
/android/app/build/
.DS_Store
`,
    'Ruby': `
# Ruby
*.gem
*.rbc
.bundle/
/vendor/bundle/
/log/
/tmp/
.byebug_history
.sass-cache/
/coverage/
.env
`,
    'RubyOnRails': `
# Ruby on Rails
.sass-cache/
/log/
/tmp/
/public/system/
/public/assets/
/coverage/
.byebug_history
.env
/vendor/bundle
`,
    'Rust': `
# Rust
/target/
*.rlib
*.rs.bk
*.log
*.DS_Store
`,
    'Shopify': `
# Shopify
config.yml
config.development.yml
config.production.yml
.shopify-cli.yml
.env
`,
    'SublimeText': `
# Sublime Text
*.sublime-project
*.sublime-workspace
`,
    'Svelte': `
# Svelte
.svelte-kit/
build/
node_modules/
.env
.env.local
*.log
*.DS_Store
`,
    'Swift': `
# Swift
.build/
Packages/
*.xcodeproj
*.xcworkspace
*.xcuserdatad
*.SWIFT-MODULE-BUILD-RECORD
*.swiftdoc
*.swiftmodule
*.swiftdeps
*.gcno
*.gcda
*.profdata
*.o
*.a
*.so
*.dylib
*.dll
*.log
*.DS_Store
`,
    'Symfony': `
# Symfony
/vendor/
/node_modules/
/web/bundles/
/app/cache/
/var/cache/
/var/logs/
/var/sessions/
/app/config/parameters.yml
/var/config/parameters.yml
.env
.env.local
*.log
`,
    'Terraform': `
# Terraform
.terraform/
*.tfstate
*.tfstate.backup
*.tfvars
*.tfvars.json
.terraform.lock.hcl
*.log
`,
    'Unity': `
# Unity
Library/
Temp/
Obj/
Build/
Builds/
Logs/
Packages/
ProjectSettings/Packages/
Assets/AssetStoreTools/
Assets/AddressableAssetsData/*.*.meta
Assets/StreamingAssets/aa.manifest
*.apk
*.aab
*.unitypackage
*.sln
*.csproj
*.userprefs
*.DS_Store
`,
    'UnrealEngine': `
# UnrealEngine
/Binaries/
/Build/
/DerivedDataCache/
/Intermediate/
/Saved/
*.sln
*.suo
*.user
*.pdb
*.DS_Store
`,
    'Vagrant': `
# Vagrant
.vagrant/
`,
    'Vue': `
# Vue.js
dist/
node_modules/
.env
.env.local
.env.*.local
npm-debug.log
yarn-debug.log
yarn-error.log
*.log
.DS_Store
`,
    'VSCode': `
# Visual Studio Code
.vscode/
*.code-workspace
.history/
`,
    'Windows': `
# Windows
Thumbs.db
ehthumbs.db
desktop.ini
$RECYCLE.BIN/
*.lnk
`,
    'WordPress': `
# WordPress
wp-config.php
wp-content/uploads/
wp-content/blogs.dir/
wp-content/upgrade/
wp-content/backup-db/
wp-content/advanced-cache.php
wp-content/wp-cache-config.php
sitemap.xml
sitemap.xml.gz
.DS_Store
Thumbs.db
`,
    'Xamarin': `
# Xamarin
/bin/
/obj/
/packages/
*.user
*.suo
*.log
*.DS_Store
`,
    'Yii': `
# Yii
/vendor/
/node_modules/
/web/assets/
/runtime/
.env
*.log
`,
    'ZendFramework': `
# ZendFramework
/vendor/
/data/cache/
/data/logs/
.env
*.log
`
};

// --- DOM Elements ---
const searchBar = document.getElementById('search-bar');
const checkboxList = document.getElementById('checkbox-list');
const selectAllBtn = document.getElementById('select-all');
const deselectAllBtn = document.getElementById('deselect-all');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const downloadBtn = document.getElementById('download-btn');
const outputCode = document.getElementById('output-code');
const messagePopup = document.getElementById('message-popup');

let templateKeys = Object.keys(gitignoreTemplates).sort();
let selectedTechnologies = new Set(); // <-- The new source of truth

// --- Functions ---

/**
* Renders the checkbox list based on the provided keys
* @param {string[]} keysToRender - Array of keys to display
*/
function renderCheckboxList(keysToRender) {
checkboxList.innerHTML = '';
if (keysToRender.length === 0) {
    checkboxList.innerHTML = `<p class="text-gray-500 text-center p-4">No results found.</p>`;
    return;
}

keysToRender.forEach(key => {
    const id = `cb-${key}`;
    const label = document.createElement('label');
    label.htmlFor = id;
    label.className = "flex items-center p-3 -m-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors";
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.name = key;
    checkbox.className = 'h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500';

    // Check our Set to see if this should be checked
    checkbox.checked = selectedTechnologies.has(key);

    const span = document.createElement('span');
    span.textContent = key;
    span.className = 'ml-3 text-gray-700 font-medium';

    label.appendChild(checkbox);
    label.appendChild(span);
    checkboxList.appendChild(label);
});
}

/**
* Filters the checkbox list based on the search term
*/
function handleSearch() {
const searchTerm = searchBar.value.toLowerCase();
const filteredKeys = templateKeys.filter(key => key.toLowerCase().includes(searchTerm));
renderCheckboxList(filteredKeys);
}

/**
* Selects or deselects all *visible* checkboxes
* @param {boolean} isSelected - True to select, false to deselect
*/
function handleSelectDeselect(isSelected) {
const visibleCheckboxes = checkboxList.querySelectorAll('input[type="checkbox"]');
visibleCheckboxes.forEach(checkbox => {
    checkbox.checked = isSelected;
    // Also update our Set
    const key = checkbox.name;
    if (isSelected) {
        selectedTechnologies.add(key);
    } else {
        selectedTechnologies.delete(key);
    }
});
}

/**
* Generates the final .gitignore file content
*/
function handleGenerate() {
// Read from our Set, not the DOM
if (selectedTechnologies.size === 0) {
    outputCode.textContent = `# Please select at least one technology.`;
    return;
}

let finalFile = `# Generated by .gitignore Generator\n# https://github.com/github/gitignore\n\n`;

// Sort the keys for a clean, predictable output
const sortedKeys = [...selectedTechnologies].sort();

sortedKeys.forEach(key => {
    const template = gitignoreTemplates[key];
    if (template) {
        finalFile += `### ${key} ###\n`;
        finalFile += `${template.trim()}\n\n`;
    }
});

outputCode.textContent = finalFile.trim();
}

/**
* Shows a temporary feedback message
* @param {string} message - The text to display
*/
function showMessage(message) {
messagePopup.textContent = message;
messagePopup.classList.remove('opacity-0', 'translate-y-5');
setTimeout(() => {
    messagePopup.classList.add('opacity-0', 'translate-y-5');
}, 2000);
}

/**
* Copies the generated code to the clipboard
*/
function handleCopy() {
const textToCopy = outputCode.textContent;
if (!textToCopy || textToCopy.startsWith('# Please select')) {
    showMessage("Generate a file first!");
    return;
}

// Use execCommand for broader compatibility (especially in iFrames)
const textArea = document.createElement('textarea');
textArea.value = textToCopy;
textArea.style.position = 'fixed'; // Avoid scrolling to bottom
textArea.style.top = '-9999px';
textArea.style.left = '-9999px';
document.body.appendChild(textArea);

textArea.select();

try {
    document.execCommand('copy');
    showMessage("Copied to clipboard!");
} catch (err) {
    console.error('Failed to copy text: ', err);
    showMessage("Failed to copy!");
}

document.body.removeChild(textArea);
}

/**
* Downloads the generated content as a .gitignore file
*/
function handleDownload() {
    const content = outputCode.textContent.trim();
    if (!content || content.startsWith('# Please select')) {
      showMessage("Generate a file first!");
      return;
    }
  
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '.gitignore';
  
    a.click();
    URL.revokeObjectURL(url);
  
    showMessage(".gitignore file downloaded");
  }
  

// --- Event Listeners ---
searchBar.addEventListener('input', handleSearch);
selectAllBtn.addEventListener('click', () => handleSelectDeselect(true));
deselectAllBtn.addEventListener('click', () => handleSelectDeselect(false));
generateBtn.addEventListener('click', handleGenerate);
copyBtn.addEventListener('click', handleCopy);
downloadBtn.addEventListener('click', handleDownload);

// Listen for changes on the list itself (event delegation)
checkboxList.addEventListener('change', (event) => {
if (event.target.type === 'checkbox') {
    const key = event.target.name;
    if (event.target.checked) {
        selectedTechnologies.add(key);
    } else {
        selectedTechnologies.delete(key);
    }
}
});

// --- Initialization ---
renderCheckboxList(templateKeys); // Initial render
lucide.createIcons(); // Render icons