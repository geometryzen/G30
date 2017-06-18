import { mustSatisfy } from '../checks/mustSatisfy';
import { isBoolean } from '../checks/isBoolean';

function beBoolean() {
    return "be `boolean`";
}

export function mustBeBoolean(name: string, value: boolean, contextBuilder?: () => string): boolean {
    mustSatisfy(name, isBoolean(value), beBoolean, contextBuilder);
    return value;
}
