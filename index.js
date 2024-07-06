// index.js

function superbowlWin(record) {
    const winRecord = record.find(obj => obj.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  
  // Export the function if needed for tests
  module.exports = superbowlWin;
  
  