# KibanaRowColorizer

A browser userscript that enhances Kibana by adding color-coded log rows based on log levels.

<img width="1756" alt="SCR-20240906-jzuj" src="https://github.com/user-attachments/assets/145e1efb-f9ba-4b2b-96a4-110a980960e0">

## Features

- **Log Level Highlighting**: Colors rows by log level (`DEBUG`, `INFO`, `WARN`, `ERROR`) for quick identification.

## Installation

- **Chrome/Edge**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Safari**: [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)

Install the script [here](https://github.com/yunusemregul/kibanaColor/raw/main/kibanacolor.user.js). 

Update the `@include` URL in the script if your Kibana URL differs.

## Usage

The script automatically colors log rows when you open Kibana Discover:

- **DEBUG**: Light blue
- **INFO**: Light green
- **WARN**: Light yellow
- **ERROR**: Light red
