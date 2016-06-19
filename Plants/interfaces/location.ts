interface Location {
    coordinates: LocationCoordinates;
    recorded: Recording;
}

interface LocationCoordinates {
    altitude: number;
    latitude: number;
    longitude: number;
}
