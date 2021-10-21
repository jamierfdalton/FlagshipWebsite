/*
Redirect for google authentication
Originally this script was in-line on the ads-test-application-page.html due to the way
Squarespace allows custom scripts to be placed on their pages.
 */

const queryString = window.location.search;
window.location.href = "http://159.65.49.207/googlefinalstep" + queryString;
console.log(queryString);
