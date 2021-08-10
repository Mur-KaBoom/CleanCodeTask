const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');
const { TYPE_TRANSPORT, TYPE_BOMBER, transport, bomber } = require('./models/MilitaryType');

class Airport {

    getListOfPlanesOfAppropriateType(typeOfPlane){
        let PlanesOfAppropriateType = [];
        this.planes.forEach(plane => {
            if (plane instanceof typeOfPlane) {
                PlanesOfAppropriateType.push(plane);
            }
        });
        return PlanesOfAppropriateType;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getListOfPlanesOfAppropriateType(PassengerPlane);
        let planeWithMaxCapacity = passengerPlanes[0];
        passengerPlanes.forEach(plane => {
            if (plane.getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = plane;
            }
        });
        return planeWithMaxCapacity;
    }

    getMilitaryPlanesOfAppropriateType(typeOfMilitaryPlane){
        let listOfMilitaryPlanesWithAppropriateType = [];
        let militaryPlanes = this.getListOfPlanesOfAppropriateType(MilitaryPlane);
        militaryPlanes.forEach(plane => {
            if (plane.getMilitaryType() == MilitaryType.typeOfMilitaryPlane) {
                listOfMilitaryPlanesWithAppropriateType.push(plane);
            }
        });
        return listOfMilitaryPlanesWithAppropriateType;
    }







    getTransportMilitaryPlanes(){
        return this.getMilitaryPlanesOfAppropriateType(transport);
    }


    getBomberMilitaryPlanes()
    {
        return this.getMilitaryPlanesOfAppropriateType(bomber);
    }

    constructor(planes) {
        this.planes = planes;
    }



    sortByMaxDistance() {
        return this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);;
    }

    
    // Sorts by max speed
    // @return Airport
    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        return this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? 1 : -1);
    }

    getPlanes() {
        return this.planes;
    }




    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
