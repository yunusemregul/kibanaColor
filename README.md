# KibanaRowColorizer

A browser userscript that enhances Kibana by adding color-coded log rows based on log levels.

<img width="1756" alt="SCR-20240906-jzuj" src="https://github.com/user-attachments/assets/145e1efb-f9ba-4b2b-96a4-110a980960e0">

## Features

- **Log Level Highlighting**: Colors rows by log level (DEBUG, INFO, WARN, ERROR) for quick identification.

## Installation

- **Chrome/Edge**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Safari**: [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)

Install the script [here](https://github.com/yunusemregul/kibanaColor/raw/main/kibanacolor.user.js). 

Update the @include URL in the script if your Kibana URL differs.

<details>
  <summary><strong>Important Note for Chrome/Edge Users</strong></summary>

  If you are using Tampermonkey in Chrome or Edge, you might need to **enable Developer Mode** for the script to work properly.

  **Why is this needed?**  
  Google has introduced extra security restrictions for browser extensions. Some scripts require special permissions that are only granted when Developer Mode is enabled.

  #### How to Enable Developer Mode:
  1. Open Chrome/Edge and go to `chrome://extensions` or `edge://extensions`.
     <img width="500" src="https://github.com/user-attachments/assets/fee1f504-3715-45cd-b3e3-734d30758a9d">
  3. Click **"Manage Extensions"** from the browser menu.
  4. Toggle **"Developer Mode"** at the top-right corner.  
     <img width="500" src="https://github.com/user-attachments/assets/ca7268a6-8000-4e0b-93d8-cb793370d4ff">

</details>

## Usage

The script automatically colors log rows when you open Kibana Discover:

- **DEBUG**: Light blue
- **INFO**: Light green
- **WARN**: Light yellow
- **ERROR**: Light red
