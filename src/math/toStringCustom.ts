import { stringFromCoordinates } from './stringFromCoordinates';
import { Unit } from './Unit';

export function toStringCustom(coordinates: number[], coordToString: (x: number) => string, labels: string[], uom: Unit): string {
    const quantityString: string = stringFromCoordinates(coordinates, coordToString, labels, uom);
    return quantityString;
}
