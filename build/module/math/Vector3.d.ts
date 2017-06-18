import { BivectorE3 } from './BivectorE3';
import { CartesianG3 } from './CartesianG3';
import { LockableMixin as Lockable } from './Lockable';
import { MatrixLike } from './MatrixLike';
import { SpinorE3 } from './SpinorE3';
import { Unit } from './Unit';
import { VectorE3 } from './VectorE3';
/**
 *
 */
export declare class Vector3 implements VectorE3, CartesianG3, Lockable {
    isLocked: () => boolean;
    lock: () => number;
    unlock: (token: number) => void;
    /**
     *
     */
    private readonly coords_;
    /**
     *
     */
    private modified_;
    uom: Unit;
    /**
     * Constructs a mutable vector.
     * This may only be used internally.
     */
    constructor(coords: [number, number, number], uom: Unit, code: number);
    readonly length: number;
    modified: boolean;
    getComponent(i: number): number;
    /**
     * The coordinate corresponding to the e1 basis vector.
     */
    x: number;
    /**
     * The coordinate corresponding to the e2 basis vector.
     */
    y: number;
    /**
     * The coordinate corresponding to the e3 basis vector.
     */
    z: number;
    /**
     *
     */
    maskG3: number;
    /**
     *
     */
    add(rhs: VectorE3, α?: number): Vector3;
    /**
     *
     */
    approx(n: number): Vector3;
    /**
     * Pre-multiplies the column vector corresponding to this vector by the matrix.
     * The result is applied to this vector.
     *
     * @param σ The 3x3 matrix that pre-multiplies this column vector.
     */
    applyMatrix(σ: MatrixLike): this;
    /**
     *
     */
    clone(): Vector3;
    /**
     *
     */
    copy(source: VectorE3): this;
    cross(v: VectorE3): Vector3;
    /**
     * <code>this ⟼ a ✕ b</code>
     *
     * @param a
     * @param b
     * @returns a x b
     */
    cross2(a: VectorE3, b: VectorE3): Vector3;
    /**
     *
     */
    direction(): this;
    /**
     *
     */
    divByScalar(alpha: number): this;
    /**
     *
     */
    dot(v: VectorE3): number;
    /**
     *
     */
    dual(B: BivectorE3): this;
    isZero(): boolean;
    /**
     *
     */
    magnitude(): number;
    /**
     *
     */
    mulByScalar(alpha: number): this;
    neg(): this;
    /**
     *
     */
    normalize(magnitude?: number): this;
    /**
     *
     */
    write(destination: VectorE3): this;
    /**
     *
     */
    zero(): this;
    /**
     * Computes the square of this vector.
     * This is an alias for the `squaredNorm` method.
     */
    quaditude(): number;
    /**
     *
     */
    quadranceTo(point: VectorE3): number;
    /**
     *
     */
    rotate(spinor: SpinorE3): this;
    /**
     * Computes the square of this vector.
     * This is an alias for the `quaditude` method.
     */
    squaredNorm(): number;
    stress(σ: VectorE3): this;
    /**
     *
     */
    sub(rhs: VectorE3): this;
    /**
     * Returns a string containing a number in exponential notation.
     */
    toExponential(fractionDigits?: number): string;
    /**
     * Returns a string containing a number in fixed-point notation.
     */
    toFixed(fractionDigits?: number): string;
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation
     * with a specified number of digits.
     */
    toPrecision(precision?: number): string;
    /**
     * Returns a string representation of this vector.
     */
    toString(radix?: number): string;
    __add__(rhs: VectorE3): Vector3;
    __div__(rhs: number): Vector3;
    __rdiv__(lhs: any): Vector3;
    __mul__(rhs: number): Vector3;
    __pos__(): Vector3;
    __neg__(): Vector3;
    __radd__(lhs: VectorE3): Vector3;
    __rmul__(lhs: number): Vector3;
    __rsub__(lhs: VectorE3): Vector3;
    __sub__(rhs: VectorE3): Vector3;
    static copy(vector: VectorE3): Vector3;
    /**
     * Constructs a vector by computing the dual of a bivector.
     */
    static dual(B: BivectorE3): Vector3;
    /**
     *
     */
    static readonly e1: Vector3;
    /**
     *
     */
    static readonly e2: Vector3;
    /**
     *
     */
    static readonly e3: Vector3;
    /**
     * <p>
     * Computes a unit vector with a random direction.
     * </p>
     */
    static random(): Vector3;
    /**
     * @param x
     * @param y
     * @param z
     * @param uom
     */
    static vector(x: number, y: number, z: number, uom?: Unit): Vector3;
    /**
     *
     */
    static readonly zero: Vector3;
}
