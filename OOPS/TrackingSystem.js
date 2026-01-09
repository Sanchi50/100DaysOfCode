/**You have been hired to develop a tracking system for a logistics company. The system should allow the company to keep track of the location and status of each shipment, as well as assign resources to each shipment as needed.



Objective:


1. Create a constructor function called Shipment with properties such as:

id: a string representing the shipment ID
location: string representing the location of shipment
destination: string representing destination for the shipment
status : string representing the status of the shipment
resources: an array containing all the resources that have been assigned to the shipment. If no resources are passed during object creation, initialize it as an empty array ([]).
All the properties should be assigned with the values at the time of the object creation


2. Using the prototype of the Shipment constructor function, add the following methods:



updateStatusandResources : This method should take a new status and an array of resources as arguments. It should:

Update the status of the shipment to the new status.
Replace the current resources array with the new array of resources passed as an argument, rather than appending to the existing resources.
assignResources: This method should be able to push the arguments passed to the resource array.
(Note: The number of arguments passed by the user is not defined. It can be any number of arguments)



3. Create an object called TrackingSystem using an object literal that has the following:

shipments(property): This property should store all Shipment objects being tracked. Initialize it as an empty array ([]).

updateStatus(method): It should take two parameters, id and status, and should be able to change the status of the object using the id of the object. (Hint: You can use various array methods to iterate over the array)

viewShipment(method): It should take id as a parameter and should display the details of that shipment like id, status, resources, location, and destination. Use the concept of destructuring in viewShipment() method to display all the properties as shown in the expected output.



Expected Input:




Expected Output:
Shipment ID: 12345
Status: Delivered
Resources: Forklift, Worker, Pallets
Location: New York
Destination: Los Angeles
          console.log("Location: " + s.location);
          console.log("Destination: " + s.destination);
        }
      }
    }
  };

  return {Shipment,TrackingSystem};
}

 */
function main(){
  function Shipment(id, location, destination, status, resources){
    this.id = id;
    this.location = location;
    this.destination = destination;
    this.status = status;
    this.resources = resources ? resources : [];
  }

  // EXACT name as in test case
  Shipment.prototype.updateStatusAndResources = function(newStatus, newResources){
    this.status = newStatus;
    this.resources = newResources;
  };

  Shipment.prototype.assignResources = function(){
    for(var i = 0; i < arguments.length; i++){
      this.resources.push(arguments[i]);
    }
  };

  var TrackingSystem = {
    shipments: [],

    updateStatus: function(id, status){
      for(var i = 0; i < this.shipments.length; i++){
        if(this.shipments[i].id === id){
          this.shipments[i].status = status;
        }
      }
    },

    viewShipment: function(id){
      for(var i = 0; i < this.shipments.length; i++){
        if(this.shipments[i].id === id){
          var s = this.shipments[i];

          console.log("Shipment ID: " + s.id);
          console.log("Status: " + s.status);
          console.log("Resources: " + s.resources.join(", "));
          console.log("Location: " + s.location);
          console.log("Destination: " + s.destination);
        }
      }
    }
  };

  return {Shipment,TrackingSystem};
}
