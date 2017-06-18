import { stringFromCoordinates } from './stringFromCoordinates';
export function toStringCustom(coordinates, coordToString, labels, uom) {
    var quantityString = stringFromCoordinates(coordinates, coordToString, labels, uom);
    return quantityString;
}
