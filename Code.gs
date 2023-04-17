
function showSidebar() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('EmployeeDashboard.html') //creates an HTML output to be used
      .setTitle('Employee Dashboard'); // sets the title of the HTML output to EMPLOYEE SELECT
  SpreadsheetApp.getUi().showSidebar(htmlOutput); // open the sidebar and show the HTML file OUTPUT
}

function loadHTMLPage(page, title){
  var htmlOutput = HtmlService.createHtmlOutputFromFile(page) //creates an HTML output to be used
      .setTitle(title); // sets the title of the HTML output to EMPLOYEE SELECT
  SpreadsheetApp.getUi().showSidebar(htmlOutput); // open the sidebar and show the HTML file OUTPUT
}
