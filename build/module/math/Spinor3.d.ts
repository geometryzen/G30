import { BivectorE3 } from './BivectorE3';
import { CartesianG3 } from './CartesianG3';
import { LockableMixin as Lockable } from './Lockable';
import { MutableSpinor } from './rotorFromDirectionsE3';
import { SpinorE3 } from './SpinorE3';
import { Unit } from './Unit';
import { VectorE3 } from './VectorE3';
/**
 * A mutable representation of a spinor with cartesian coordinates in 3 dimensions.
 */
export declare class Spinor3 implements SpinorE3, CartesianG3, Lockable, MutableSpinor {
    isLocked: () => boolean;
    lock: () => number;
    unlock: (token: number) => void;
    /**
     *
     */
    private coords_;
    /**
     *
     */
    private modified_;
    /**
     *
     */
    uom: Unit;
    /**
     *
     */
    constructor(coords: number[], uom: Unit, code: number);
    modified: boolean;
    /**
     * The coordinate corresponding to the <b>e</b><sub>23</sub> basis bivector.
     */
    yz: number;
    /**
     * The coordinate corresponding to the <b>e</b><sub>31</sub> basis bivector.
     */
    zx: number;
    /**
     * The coordinate corresponding to the <b>e</b><sub>12</sub> basis bivector.
     */
    xy: number;
    /**
     * The coordinate corresponding to the <b>1</b> basis scalar.
     */
    a: number;
    readonly length: number;
    getComponent(index: number): number;
    /**
     *
     */
    maskG3: number;
    /**
     * this ⟼ this + α
     *
     * @param α
     * @returns this + α
     */
    addScalar(α: number, uom?: Unit): Spinor3;
    arg(): Spinor3;
    approx(n: number): this;
    /**
     * Returns an unlocked (mutable) copy of `this`.
     */
    clone(): Spinor3;
    /**
     *
     */
    copy(spinor: SpinorE3): this;
    /**
     *
     */
    divByScalar(alpha: number): this;
    dual(v: VectorE3, changeSign: boolean): Spinor3;
    /**
     * <code>this ⟼ e<sup>this</sup></code>
     *
     * @returns exp(this)
     */
    exp(): Spinor3;
    grade(grade: number): this;
    /**
     *
     */
    isOne(): boolean;
    isZero(): boolean;
    log(): this;
    /**
     *
     */
    magnitude(): number;
    /**
     * <p>
     * <code>this ⟼ this * rhs</code>
     * </p>
     *
     * @method mul
     * @param rhs {SpinorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    mul(rhs: SpinorE3): Spinor3;
    /**
     * <p>
     * <code>this ⟼ a * b</code>
     * </p>
     *
     * @method mul2
     * @param a {SpinorE3}
     * @param b {SpinorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    mul2(a: SpinorE3, b: SpinorE3): Spinor3;
    neg(): this;
    /**
     *
     */
    normalize(): this;
    /**
     *
     */
    one(): this;
    /**
     * a.k.a. squared norm
     */
    private quaditude();
    /**
     *
     */
    rev(): this;
    /**
     * Sets this Spinor to the value of its reflection in the plane orthogonal to n.
     * The geometric formula for bivector reflection is B' = n * B * n.
     *
     * @method reflect
     * @param n {VectorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    reflect(n: VectorE3): this;
    /**
     * <p>
     * <code>this = ⟼ R * this * rev(R)</code>
     * </p>
     *
     * @method rotate
     * @param R {SpinorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    rotate(R: SpinorE3): Spinor3;
    /**
     * <p>
     * Computes a rotor, R, from two vectors, where
     * R = (abs(b) * abs(a) + b * a) / sqrt(2 * (quad(b) * quad(a) + abs(b) * abs(a) * b << a))
     * </p>
     *
     * @method rotorFromDirections
     * @param a {VectorE3} The <em>from</em> vector.
     * @param b {VectorE3} The <em>to</em> vector.
     * @return {Spinor3} <code>this</code> The rotor representing a rotation from a to b.
     * @chainable
     */
    rotorFromDirections(a: VectorE3, b: VectorE3): Spinor3;
    /**
     * <p>
     * <code>this = ⟼ exp(- B * θ / 2)</code>
     * </p>
     *
     * @param B The unit bivector that generates the rotation.
     * @param θ The rotation angle in radians.
     */
    rotorFromGeneratorAngle(B: BivectorE3, θ: number): this;
    rotorFromVectorToVector(a: VectorE3, b: VectorE3, B: BivectorE3): Spinor3;
    /**
     * <p>
     * <code>this ⟼ this * α</code>
     * </p>
     *
     * @method scale
     * @param α {number}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    scale(α: number): Spinor3;
    /**
     * @method stress
     * @param σ {VectorE3}
     * @return {Spinor3}
     * @chainable
     */
    stress(σ: VectorE3): Spinor3;
    toExponential(fractionDigits?: number): string;
    /**
     *
     */
    toFixed(fractionDigits?: number): string;
    /**
     *
     */
    toPrecision(position?: number): string;
    /**
     * @method toString
     * @param [radix] {number}
     * @return {string} A non-normative string representation of the target.
     */
    toString(radix?: number): string;
    /**
     * <p>
     * <code>this ⟼ a * b</code>
     * </p>
     *
     * Sets this Spinor3 to the geometric product, a * b, of the vector arguments.
     *
     * @param a
     * @param b
     */
    versor(a: VectorE3, b: VectorE3): this;
    /**
     * Sets this spinor to the identity element for addition, <b>0</b>.
     *
     * @return {Spinor3} <code>this</code>
     */
    zero(): Spinor3;
    /**
     * <p>
     * Computes a unit spinor with a random direction.
     * </p>
     */
    static random(): Spinor3;
    /**
     * Computes the rotor that rotates vector <code>a</code> to vector <code>b</code>.
     *
     * @param a The <em>from</em> vector.
     * @param b The <em>to</em> vector.
     */
    static rotorFromDirections(a: VectorE3, b: VectorE3): Spinor3;
    /**
     * @param yz
     * @param zx
     * @param xy
     * @param α
     * @param uom
     */
    static spinor(yz: number, zx: number, xy: number, α: number, uom?: Unit): Spinor3;
    static wedge(a: VectorE3, b: VectorE3): Spinor3;
    /**
     *
     */
    static readonly one: Spinor3;
    /**
     *
     */
    static readonly zero: Spinor3;
}
