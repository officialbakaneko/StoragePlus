function showSidebar() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('SidebarMainMenu.html') //creates an HTML output to be used
      .setTitle('Employee Select'); // sets the title of the HTML output to EMPLOYEE SELECT
  SpreadsheetApp.getUi().showSidebar(htmlOutput); // open the sidebar and show the HTML file OUTPUT
}

function getEmployeeList() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var employeeSheet = ss.getSheetByName("Employee_List");
  var lastRow = employeeSheet.getLastRow() - 1; // Subtract 1 to ignore the header row
  var dataRange = employeeSheet.getRange(2, 1, lastRow, 3).getValues(); // Start from row 2 to ignore the header row

  var employeeList = dataRange.map(function(row) {
    var name = row[0];
    var isTemporary = row[1] === true; // Checkbox is checked when the value is "TRUE"
    var isAdmin = row[2] === true; // checkbox is checked when the value is "TRUE"
    return {
      name: name,
      temporary: isTemporary,
      admin: isAdmin
    };
  });

  return employeeList;
}
