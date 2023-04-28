//list of orders with their medication and handling instructions

const instructions = {
    0: "No special handling instructions",
    1: "Do not shake",
    2: "Keep refrigerated",
    3: "Keep away from heat",
  };
  
  const medicationsMap = new Map();
  
  //validate the value of instructions
  const validateMedicationsData = (medicationData, medicationsInstructions) => {
    for (let i = 0; i < medicationsInstructions.length; i++) {
      if (medicationsInstructions[i].length != 1) {
        console.log(
          `${medicationData} has invalid instruction: ${medicationsInstructions[i]}. Should contain only one character.`
        );
        return false;
      }
      let value = parseInt(medicationsInstructions[i]);
      if (isNaN(value)) {
        console.log(
          `${medicationData} has invalid instruction: ${medicationsInstructions[i]}. Should be a number.`
        );
        return false;
      }
      if (value > 3) {
        console.log(
          `${medicationData} has invalid instruction: ${value}. Instruction should be 0 between 3`
        );
        return false;
      }
    }
    return true;
  };
  
  const validateOrderData = (medicationName) => {
    return medicationsMap.has(medicationName);
  };
  
  const printOutput = (orderData) => {
    const instructionsList = medicationsMap.get(orderData[1]);
  
    if (instructionsList.length === 3) {
      console.log(
        `${orderData[0]}:${orderData[1]}:WARNING!!!-${instructions[1]}, ${instructions[2]}, ${instructions[3]}`
      );
    } else if (instructionsList.length === 2) {
      console.log(
        `${orderData[0]}:${orderData[1]}:WARNING-${
          instructions[parseInt(instructionsList[0])]
        }, ${instructions[parseInt(instructionsList[1])]}`
      );
    } else if (instructionsList[0] == "0") {
      console.log(`${orderData[0]}:${orderData[1]}:`);
    } else {
      console.log(
        `${orderData[0]}:${orderData[1]}:WARNING-${
          instructions[parseInt(instructionsList[0])]
        }`
      );
    }
  };
  
  // expecting medication list to end with ';' as in the description
  const setupMedicationsInstructionsDatabase = (medicationList) => {
    for (let i = 0; i < medicationList.length - 1; i++) {
      if (medicationList[i].length === 0) {
        console.log("Invalid entry. Skipping to next entry");
        continue;
      }
  
      const medicationData = medicationList[i].split(":");
      const instructionCodes = medicationData[1].split(",");
  
      if (validateMedicationsData(medicationData[0], instructionCodes)) {
        medicationsMap.set(medicationData[0], instructionCodes);
      }
    }
  };
  const processOrders = (listOfOrders, listOfMedications) => {
    setupMedicationsInstructionsDatabase(listOfMedications.split(";"));
  
    let ordersList = listOfOrders.split(";");
    for (let i = 0; i < ordersList.length; i++) {
      let orderData = ordersList[i].split(":");
  
      if (validateOrderData(orderData[1])) {
        printOutput(orderData);
      }
    }
  };
  
  processOrders(
    "Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA",
    "MedicationA:1,2,3;MedicationX:1,2;MedicationY:0;MedicationZ:2;"
  );
  