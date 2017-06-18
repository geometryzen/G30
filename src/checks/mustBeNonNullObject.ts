import { mustSatisfy } from '../checks/mustSatisfy';
import { isNull } from '../checks/isNull';
import { isObject } from '../checks/isObject';

function beObject() {
    return "be a non-null `object`";
}

export function mustBeObject<T>(name: string, value: T, contextBuilder?: () => string): T {
    mustSatisfy(name, isObject(value) && !isNull(value), beObject, contextBuilder);
    return value;
}
