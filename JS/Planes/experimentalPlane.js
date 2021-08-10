const Plane = require('./Plane');

class ExperimentalPlane   extends Plane
{

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
        this.type = type;
        this.classificationLevel = classificationLevel;

    }


    get model()
    {
        return this.model;
    }

    set model(experimentalPlaneModel) {
        this.model = experimentalPlaneModel;
    }

    get maxSpeed() {
        return this.maxSpeed;
    }

    set maxSpeed(experimentalPlaneMaxSpeed) {
        this.maxSpeed = experimentalPlaneMaxSpeed;
    }

    get maxFlightDistance() {
        return this.maxFlightDistance;
    }

    set maxFlightDistance(experimentalPlaneMaxFlightDistance) {
        this.maxFlightDistance = experimentalPlaneMaxFlightDistance;
    }

    get maxLoadCapacity() {
        return this.maxLoadCapacity;
    }

    set maxLoadCapacity(experimentalPlaneMaxLoadCapacity) {
        this.maxLoadCapacity = experimentalPlaneMaxLoadCapacity;
    }

    get type() {
        return this.type;
    }

    set type(experimentalPlaneType) {
        this.type = experimentalPlaneType;
    }

    get classificationLevel() {
        return this.classificationLevel;
    }

    set classificationLevel(experimentalPlaneClassificationLevel) {
        this.classificationLevel = experimentalPlaneClassificationLevel;
    }
}

module.exports = ExperimentalPlane