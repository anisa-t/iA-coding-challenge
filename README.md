 iA-coding-challenge# iA Coding Challenge
 
 Scenario:

 > Your program should output a list of orders with their medication and handling instructions. If no handling instruction isprovided, do not print a warning.

A medication vial label must have a clearly marked warning when the contents require special handling instructions. Notall medications will require special handling instructions.
If any of the following handling instructions are part of the medication, the software must print "WARNING" on the labelfollowed by the instruction strings.

* “Do Not Shake”
* “Keep Refrigerated”
* “Keep Away from Heat”

If all of these handling instructions are part of the medication then WARNING must be followed with three exclamation points. "!!!


Technologies Used:

* Node.js

* * * * * * HOW TO RUN THE PROJECT 
     >>>> node ordersWithInstructions.js


Input:   
  "Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA",
  "MedicationA:1,2,3;MedicationX:1,2;MedicationY:0;MedicationZ:2

Output:
Rx1:MedicationX:WARNING-Do not shake, Keep refrigerated
Rx2:MedicationY:
Rx3:MedicationZ:WARNING-Keep refrigerated
Rx4:MedicationA:WARNING!!!-Do not shake, Keep refrigerated, Keep away from heat

Other Use Cases:
 * 1 - if instruction ID has more then 2 characters 
       Input: 
           "Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA",
           "MedicationA:1,2,3;MedicationX:1,2;MedicationY:0;MedicationZ:22;"

       OutPut:
            MedicationZ has invalid instruction: 22. Should contain only one character.
            Rx1:MedicationX:WARNING-Do not shake, Keep refrigerated
            Rx2:MedicationY:
            Rx4:MedicationA:WARNING!!!-Do not shake, Keep refrigerated, Keep away from heat


 * 2 - if instruction is a char not a number 

        Input: 
           "Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA",
           "MedicationA:1,2,3;MedicationX:1,2;MedicationY:0;MedicationZ:A;"

        OutPut:
            MedicationZ has invalid instruction: A. Should be a number.
            Rx1:MedicationX:WARNING-Do not shake, Keep refrigerated
            Rx2:MedicationY:
            Rx4:MedicationA:WARNING!!!-Do not shake, Keep refrigerated, Keep away from heat

 * 3 - if instruction value is greater that 3 

        Input: 
           "Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA",
           "MedicationA:1,2,3;MedicationX:1,2;MedicationY:0;MedicationZ:6;"

        OutPut:
            MedicationZ has invalid instruction: 6. Instruction should be 0 between 3
            Rx1:MedicationX:WARNING-Do not shake, Keep refrigerated
            Rx2:MedicationY:
            Rx4:MedicationA:WARNING!!!-Do not shake, Keep refrigerated, Keep away from heat         
