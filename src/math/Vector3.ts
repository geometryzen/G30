import { applyMixins } from './applyMixins';
import { approx } from './approx';
import { BivectorE3 } from './BivectorE3';
import { CartesianG3 } from './CartesianG3';
import { isNumber } from '../checks/isNumber';
import { isSpinorE3 } from './isSpinorE3';
import { isVectorE3 } from './isVectorE3';
import { lock, LockableMixin as Lockable, TargetLockedError } from './Lockable';
import { MatrixLike } from './MatrixLike';
import { mustBeVectorE3 } from './mustBeVectorE3';
import { randomRange } from './randomRange';
import { readOnly } from '../i18n/readOnly';
import { SpinorE3 } from './SpinorE3';
import { Unit } from './Unit';
import { VectorE3 } from './VectorE3';
import { wedgeXY } from './wedgeXY';
import { wedgeYZ } from './wedgeYZ';
import { wedgeZX } from './wedgeZX';

const COORD_X = 0;
const COORD_Y = 1;
const COORD_Z = 2;
// const BASIS_LABELS = ['e1', 'e2', 'e3'];

/**
 * Coordinates corresponding to basis labels.
 */
/*
function coordinates(m: VectorE3): number[] {
    return [m.x, m.y, m.z];
}
*/
const zero = function zero(): [number, number, number] {
    return [0, 0, 0];
};

const vector = function vector(x: number, y: number, z: number): [number, number, number] {
    const coords = zero();
    coords[COORD_X] = x;
    coords[COORD_Y] = y;
    coords[COORD_Z] = z;
    return coords;
};

const magicCode = Math.random();

/**
 * 
 */
export class Vector3 implements VectorE3, CartesianG3, Lockable {
    // Lockable
    isLocked: () => boolean;
    lock: () => number;
    unlock: (token: number) => void;

    /**
     * 
     */
    private readonly coords_: [number, number, number];

    /**
     * 
     */
    private modified_: boolean;

    public uom: Unit;

    /**
     * Constructs a mutable vector.
     * This may only be used internally.
     */
    constructor(coords: [number, number, number], uom: Unit, code: number) {
        if (code !== magicCode) {
            throw new Error("Use the static creation methods instead of the constructor");
        }
        this.coords_ = coords;
        this.modified_ = false;
        this.uom = Unit.mustBeUnit('uom', uom);
    }
    get length(): number {
        return 3;
    }

    get modified(): boolean {
        return this.modified_;
    }
    set modified(modified: boolean) {
        if (this.isLocked()) {
            throw new TargetLockedError('set modified');
        }
        this.modified_ = modified;
    }

    getComponent(i: number): number {
        return this.coords_[i];
    }

    /**
     * The coordinate corresponding to the e1 basis vector.
     */
    get x(): number {
        return this.coords_[COORD_X];
    }
    set x(value: number) {
        if (this.isLocked()) {
            throw new TargetLockedError('set x');
        }
        const coords = this.coords_;
        this.modified_ = this.modified_ || coords[COORD_X] !== value;
        coords[COORD_X] = value;
    }

    /**
     * The coordinate corresponding to the e2 basis vector.
     */
    get y(): number {
        return this.coords_[COORD_Y];
    }
    set y(value: number) {
        if (this.isLocked()) {
            throw new TargetLockedError('set y');
        }
        const coords = this.coords_;
        this.modified_ = this.modified_ || coords[COORD_Y] !== value;
        coords[COORD_Y] = value;
    }

    /**
     * The coordinate corresponding to the e3 basis vector.
     */
    get z(): number {
        return this.coords_[COORD_Z];
    }
    set z(value: number) {
        if (this.isLocked()) {
            throw new TargetLockedError('set z');
        }
        const coords = this.coords_;
        this.modified_ = this.modified_ || coords[COORD_Z] !== value;
        coords[COORD_Z] = value;
    }

    /**
     *
     */
    get maskG3(): number {
        return this.isZero() ? 0x0 : 0x2;
    }
    set maskG3(unused: number) {
        throw new Error(readOnly('maskG3').message);
    }

    /**
     * 
     */
    add(rhs: VectorE3, α = 1): Vector3 {
        if (!this.isLocked()) {
            return lock(this.clone().add(rhs, α));
        }
        else {
            this.x += rhs.x;
            this.y += rhs.y;
            this.z += rhs.z;
            this.uom = Unit.compatible(this.uom, rhs.uom);
            return this;
        }
    }

    /**
     *
     */
    approx(n: number): Vector3 {
        approx(this.coords_, n);
        return this;
    }

    /**
     * Pre-multiplies the column vector corresponding to this vector by the matrix.
     * The result is applied to this vector.
     *
     * @param σ The 3x3 matrix that pre-multiplies this column vector.
     */
    applyMatrix(σ: MatrixLike): this {
        const x = this.x;
        const y = this.y;
        const z = this.z;

        const n11 = σ.getElement(0, 0), n12 = σ.getElement(0, 1), n13 = σ.getElement(0, 2);
        const n21 = σ.getElement(1, 0), n22 = σ.getElement(1, 1), n23 = σ.getElement(1, 2);
        const n31 = σ.getElement(2, 0), n32 = σ.getElement(2, 1), n33 = σ.getElement(2, 2);

        this.x = n11 * x + n12 * y + n13 * z;
        this.y = n21 * x + n22 * y + n23 * z;
        this.z = n31 * x + n32 * y + n33 * z;

        return this;
    }

    /**
     * 
     */
    clone(): Vector3 {
        return Vector3.vector(this.x, this.y, this.z, this.uom);
    }

    /**
     * 
     */
    copy(source: VectorE3): this {
        mustBeVectorE3('source', source);
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
        return this;
    }

    cross(v: VectorE3): Vector3 {
        return this.cross2(this, v);
    }

    /**
     * <code>this ⟼ a ✕ b</code>
     *
     * @param a
     * @param b
     * @returns a x b
     */
    cross2(a: VectorE3, b: VectorE3): Vector3 {
        const ax = a.x, ay = a.y, az = a.z;
        const bx = b.x, by = b.y, bz = b.z;

        this.x = wedgeYZ(ax, ay, az, bx, by, bz);
        this.y = wedgeZX(ax, ay, az, bx, by, bz);
        this.z = wedgeXY(ax, ay, az, bx, by, bz);
        return this;
    }

    /**
     * 
     */
    direction(): this {
        const m = this.magnitude();
        return this.divByScalar(m);
    }

    /**
     * 
     */
    divByScalar(alpha: number): this {
        this.x /= alpha;
        this.y /= alpha;
        this.z /= alpha;
        return this;
    }

    /**
     * 
     */
    dot(v: VectorE3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    /**
     * 
     */
    dual(B: BivectorE3): this {
        this.x = -B.yz;
        this.y = -B.zx;
        this.z = -B.xy;
        return this;
    }

    isZero(): boolean {
        return this.x === 0 && this.y === 0 && this.z === 0;
    }

    /**
     * 
     */
    magnitude(): number {
        return Math.sqrt(this.quaditude());
    }

    /**
     * 
     */
    mulByScalar(alpha: number): this {
        this.x *= alpha;
        this.y *= alpha;
        this.z *= alpha;
        return this;
    }

    neg(): this {
        return this.mulByScalar(-1);
    }

    /**
     * 
     */
    normalize(magnitude = 1): this {
        const m = this.magnitude();
        return this.mulByScalar(magnitude).divByScalar(m);
    }

    /**
     * 
     */
    write(destination: VectorE3): this {
        destination.x = this.x;
        destination.y = this.y;
        destination.z = this.z;
        return this;
    }

    /**
     * 
     */
    zero(): this {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        return this;
    }

    /**
     * Computes the square of this vector.
     * This is an alias for the `squaredNorm` method.
     */
    quaditude(): number {
        const x = this.x;
        const y = this.y;
        const z = this.z;
        return x * x + y * y + z * z;
    }

    /**
     * 
     */
    quadranceTo(point: VectorE3): number {
        const Δx = this.x - point.x;
        const Δy = this.y - point.y;
        const Δz = this.z - point.z;
        return Δx * Δx + Δy * Δy + Δz * Δz;
    }

    /**
     * 
     */
    rotate(spinor: SpinorE3): this {
        if (spinor.a === 1 && spinor.xy === 0 && spinor.yz === 0 && spinor.zx === 0) {
            return this;
        }
        else {
            const x = this.x;
            const y = this.y;
            const z = this.z;

            const a = spinor.xy;
            const b = spinor.yz;
            const c = spinor.zx;
            const w = spinor.a;

            const ix = w * x - c * z + a * y;
            const iy = w * y - a * x + b * z;
            const iz = w * z - b * y + c * x;
            const iw = b * x + c * y + a * z;

            this.x = ix * w + iw * b + iy * a - iz * c;
            this.y = iy * w + iw * c + iz * b - ix * a;
            this.z = iz * w + iw * a + ix * c - iy * b;
            return this;
        }
    }

    /**
     * Computes the square of this vector.
     * This is an alias for the `quaditude` method.
     */
    squaredNorm(): number {
        const x = this.x;
        const y = this.y;
        const z = this.z;
        return x * x + y * y + z * z;
    }

    stress(σ: VectorE3) {
        this.x *= σ.x;
        this.y *= σ.y;
        this.z *= σ.z;
        return this;
    }

    /**
     * 
     */
    sub(rhs: VectorE3): this {
        this.x -= rhs.x;
        this.y -= rhs.y;
        this.z -= rhs.z;
        return this;
    }

    /**
     * Returns a string containing a number in exponential notation. 
     */
    toExponential(fractionDigits?: number): string {
        return `new Vector3(${this.x.toExponential(fractionDigits)}, ${this.y.toExponential(fractionDigits)}, ${this.z.toExponential(fractionDigits)})`;
    }

    /**
     * Returns a string containing a number in fixed-point notation. 
     */
    toFixed(fractionDigits?: number): string {
        return `new Vector3(${this.x.toFixed(fractionDigits)}, ${this.y.toFixed(fractionDigits)}, ${this.z.toFixed(fractionDigits)})`;
    }

    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation
     * with a specified number of digits.
     */
    toPrecision(precision?: number): string {
        return `new Vector3(${this.x.toPrecision(precision)}, ${this.y.toPrecision(precision)}, ${this.z.toPrecision(precision)})`;
    }

    /**
     * Returns a string representation of this vector.
     */
    toString(radix?: number): string {
        return `new Vector3(${this.x.toString(radix)}, ${this.y.toString(radix)}, ${this.z.toString(radix)})`;
    }

    __add__(rhs: VectorE3): Vector3 {
        if (isVectorE3(rhs) && !isSpinorE3(rhs)) {
            const uom = Unit.compatible(this.uom, rhs.uom);
            return Vector3.vector(this.x + rhs.x, this.y + rhs.y, this.z + rhs.z, uom);
        }
        else {
            return void 0;
        }
    }

    __div__(rhs: number): Vector3 {
        if (isNumber(rhs)) {
            return Vector3.vector(this.x / rhs, this.y / rhs, this.z / rhs, this.uom);
        }
        else {
            return void 0;
        }
    }

    __rdiv__(lhs: any): Vector3 {
        return void 0;
    }

    __mul__(rhs: number): Vector3 {
        if (isNumber(rhs)) {
            return Vector3.vector(this.x * rhs, this.y * rhs, this.z * rhs, this.uom);
        }
        else {
            return void 0;
        }
    }
    __pos__(): Vector3 {
        return lock(Vector3.copy(this));
    }

    __neg__(): Vector3 {
        return lock(Vector3.copy(this).neg());
    }

    __radd__(lhs: VectorE3): Vector3 {
        if (isVectorE3(lhs) && !isSpinorE3(lhs)) {
            const uom = Unit.compatible(lhs.uom, this.uom);
            return Vector3.vector(lhs.x + this.x, lhs.y + this.y, lhs.z + this.z, uom);
        }
        else {
            return void 0;
        }
    }

    __rmul__(lhs: number): Vector3 {
        if (isNumber(lhs)) {
            return Vector3.vector(lhs * this.x, lhs * this.y, lhs * this.z, this.uom);
        }
        else {
            return void 0;
        }
    }

    __rsub__(lhs: VectorE3): Vector3 {
        if (isVectorE3(lhs) && !isSpinorE3(lhs)) {
            const uom = Unit.compatible(lhs.uom, this.uom);
            return Vector3.vector(lhs.x - this.x, lhs.y - this.y, lhs.z - this.z, uom);
        }
        else {
            return void 0;
        }
    }

    __sub__(rhs: VectorE3): Vector3 {
        if (isVectorE3(rhs) && !isSpinorE3(rhs)) {
            const uom = Unit.compatible(this.uom, rhs.uom);
            return Vector3.vector(this.x - rhs.x, this.y - rhs.y, this.z - rhs.z, uom);
        }
        else {
            return void 0;
        }
    }

    static copy(vector: VectorE3): Vector3 {
        return Vector3.vector(vector.x, vector.y, vector.z, vector.uom);
    }

    /**
     * Constructs a vector by computing the dual of a bivector.
     */
    static dual(B: BivectorE3): Vector3 {
        return Vector3.zero.clone().dual(B);
    }

    /**
     *
     */
    static readonly e1 = Vector3.vector(1, 0, 0, void 0);

    /**
     *
     */
    static readonly e2 = Vector3.vector(0, 1, 0, void 0);

    /**
     *
     */
    static readonly e3 = Vector3.vector(0, 0, 1, void 0);

    /**
     * <p>
     * Computes a unit vector with a random direction.
     * </p>
     */
    static random(): Vector3 {
        const x = randomRange(-1, 1);
        const y = randomRange(-1, 1);
        const z = randomRange(-1, 1);
        return Vector3.vector(x, y, z).normalize();
    }

    /**
     * @param x
     * @param y
     * @param z
     * @param uom
     */
    static vector(x: number, y: number, z: number, uom?: Unit): Vector3 {
        return new Vector3(vector(x, y, z), uom, magicCode);
    }

    /**
     *
     */
    static readonly zero = Vector3.vector(0, 0, 0, void 0);
}
applyMixins(Vector3, [Lockable]);

Vector3.zero.lock();
Vector3.e1.lock();
Vector3.e2.lock();
Vector3.e3.lock();
