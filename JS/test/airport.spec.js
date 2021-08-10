const assert = require('chai').assert;

const Plane = require('../Planes/Plane');
const MilitaryPlane = require('../Planes/MilitaryPlane');
const PassengerPlane = require('../Planes/PassengerPlane');
const Airport = require('../Airport');
const MilitaryType = require('../models/MilitaryType');
const ExperimentalPlane = require('../Planes/ExperimentalPlane');
const ExperimentalTypes = require('../models/ExperimentalTypes');
const ClassificationLevel = require('../models/ClassificationLevel');
describe('Airport Tests', () => {

    let planes = [
        new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.bomber),
        new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.bomber),
        new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.bomber),
        new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.fighter),
        new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.fighter),
        new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.transport),
        new ExperimentalPlane("Bell X-14", 277, 482, 500, ExperimentalTypes.highAltitude, ClassificationLevel.secret),
        new ExperimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, ExperimentalTypes.verticalTakeOffAndLanding, ClassificationLevel.topSecret)
    ];
    let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('should have military Planes with transport type', () => {
        let airport = new Airport(planes);
        let transportMilitaryPlanes = airport.getMilitaryPlanesOfAppropriateType(transport);
        let flag = false;
        transportMilitaryPlanes.forEach(militaryPlane => {
            if (militaryPlane.getMilitaryType() === MilitaryType.transport) {
                flag = true;
                break;
            }
        });
        assert.equal(flag,true);
    });

    it('passenger planes can be sort by max capacity', () => {
        let airport = new Airport(planes);
        let expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isFalse( expectedPlaneWithMaxPassengersCapacity == planeWithMaxPassengerCapacity);
    });


    it('planes can be sort by max load capacity', () => {
        let airport = new Airport(planes);
        airport.sortByMaxLoadCapacity();
        let planesSortedByMaxLoadCapacity = airport.getPlanes();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            if (planesSortedByMaxLoadCapacity[i].getMinLoadCapacity() > planesSortedByMaxLoadCapacity[i + 1].getMinLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    })

    it('Airport has at least one bomber military plane', () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes  = airport.getBomberMilitaryPlanes ();
        let flag = false;
        for (let militaryPlane of bomberMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === MilitaryType.bomber) {
                flag = true;
            }
            else{
                assert.fail("Test failed!");
            }
        }

    })

    it('airport has unclassified experimental planes', () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes  = airport.getListOfPlanesOfAppropriateType (ExperimentalPlane);
        let hasUnclassifiedPlanes  = true;
        for (let experimentalPlane  of bomberMilitaryPlanes) {
            if (experimentalPlane.classificationLevel === ClassificationLevel.unclassified) {
                hasUnclassifiedPlanes = fase;
            }
        assert.isTrue(hasUnclassifiedPlanes);

        }
    });

});



