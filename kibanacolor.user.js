// ==UserScript==
// @name         Kibana Coloring
// @namespace    http://tampermonkey.net/
// @version      2024-09-05
// @description  Color rows based on log levels
// @author       yunemregul
// @match        *://*.hana.ondemand.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=elastic.co
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const colorMap = {
        'DEBUG': '#e0e0ff',
        'INFO': '#e0ffe0',
        'WARN': '#ffffe0',
        'ERROR': '#ffd4d4'
    };

    function applyRowColor(row, level) {
        const levelUpper = level.toUpperCase();
        if (colorMap[levelUpper]) {
            row.style.backgroundColor = colorMap[levelUpper];
            row.dataset.colored = 'true';
        }
    }

    function colorRows() {
        const allTableCells = Array.from(document.querySelectorAll('div.truncate-by-height span[ng-non-bindable]'))
            .filter(cell => cell.closest('tr') && !cell.closest('tr').dataset.colored);

        allTableCells.forEach(cell => {
            try {
                const parentRow = cell.closest('tr');
                if (parentRow) {
                    const level = angular.element(cell).scope().row._source.logs?.level;
                    if (level) {
                        applyRowColor(parentRow, level);
                    }
                }
            } catch (error) {
                console.error('Error coloring row:', error);
            }
        });
    }

    function addCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
            div.truncate-by-height {
                overflow: scroll !important;
                max-height: 300px !important;
            }
        `;
        document.head.appendChild(style);
    }

    addCustomStyles();
    setInterval(colorRows, 500);
})();
