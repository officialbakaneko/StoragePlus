function showSidebar() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('EmployeeSidebar')
      .setTitle('Employee Select');
  SpreadsheetApp.getUi().showSidebar(htmlOutput)
}

function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Storage Plus Menu')
    .addItem('Open Task Menu', 'showSidebar')
    .addToUi();
  
  //Reset sheets then show the sidebar
  resetSheets();
  

}

function resetSheets(){
  //set all sheets invisible except the starting one
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheetNameToKeepVisible = "START HERE";
  for(var i=0; i < sheets.length; i++)
  {
    if(sheets[i].getName() != sheetNameToKeepVisible)
    {
      sheets[i].hideSheet();
    }else{
      sheets[i].showSheet();
    }
  }
  
}

// grab a whole list of employees
function getEmployeeList(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var employeeSheet = ss.getSheetByName("Employee_List");
  var lastRow = employeeSheet.getLastRow()- 1;
  var dataRange = employeeSheet.getRange(2,1,lastRow,3).getValues()

  var employeeList = dataRange.map(function(row){
    var name = row[0];
    var isTemporary = row[1] === true; //Checkbox is checked when the value is "TRUE"
    var isAdmin = row[2] === true; // checkbox is checked when the value is "TRUE"
    return {
      name: name,
      temporary: isTemporary,
      admin: isAdmin

    };
  });

  return employeeList;
}

function processButtonClick(buttonId) {
  // Common functionality for both admins and employees
  function commonFunctionality() {
    // Add code that should run for both admins and employees
  }

  // Extra functionality for admins
  function adminFunctionality() {
    // Add code that should only run for admins
  }

  // Run the common functionality for both admins and employees
  commonFunctionality();

  // If the buttonId is "admin", run the extra admin functionality
  if (buttonId === "admin") {
    adminFunctionality();
  }
}
