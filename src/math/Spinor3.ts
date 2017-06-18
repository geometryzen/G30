import { applyMixins } from './applyMixins';
import { approx } from './approx';
import { BivectorE3 } from './BivectorE3';
import { CartesianG3 } from './CartesianG3';
import { dotVectorCartesianE3 } from './dotVectorCartesianE3';
import { lock, LockableMixin as Lockable, TargetLockedError } from './Lockable';
import { mulSpinorE3YZ } from './mulSpinorE3YZ';
import { mulSpinorE3ZX } from './mulSpinorE3ZX';
import { mulSpinorE3XY } from './mulSpinorE3XY';
import { mulSpinorE3alpha } from './mulSpinorE3alpha'; import { mustBeInteger } from '../checks/mustBeInteger';
import { mustBeNumber } from '../checks/mustBeNumber';
import { randomRange } from './randomRange';
import { readOnly } from '../i18n/readOnly';
import { rotorFromDirectionsE3 as rotorFromDirections, MutableSpinor } from './rotorFromDirectionsE3';
import { SpinorE3 } from './SpinorE3';
import { toStringCustom } from './toStringCustom'; import { Unit } from './Unit';
import { VectorE3 } from './VectorE3';
import { wedgeXY } from './wedgeXY';
import { wedgeYZ } from './wedgeYZ';
import { wedgeZX } from './wedgeZX';

// Constants for the coordinate indices into the coords array.
const COORD_YZ = 0;
const COORD_ZX = 1;
const COORD_XY = 2;
const COORD_SCALAR = 3;
const BASIS_LABELS = ['e23', 'e31', 'e12', '1'];

/**
 * Coordinates corresponding to basis labels.
 */
function coordinates(m: SpinorE3): number[] {
    return [m.yz, m.zx, m.xy, m.a];
}

const magicCode = Math.random();

/**
 * A mutable representation of a spinor with cartesian coordinates in 3 dimensions.
 */
export class Spinor3 implements SpinorE3, CartesianG3, Lockable, MutableSpinor {
    // Lockable
    isLocked: () => boolean;
    lock: () => number;
    unlock: (token: number) => void;

    /**
     * 
     */
    private coords_: number[];

    /**
     * 
     */
    private modified_: boolean;
    /**
     * 
     */
    public uom: Unit;

    /**
     * 
     */
    constructor(coords: number[], uom: Unit, code: number) {
        if (code !== magicCode) {
            throw new Error("Use the static creation methods instead of the constructor");
        }
        this.coords_ = coords;
        this.modified_ = false;
        this.uom = Unit.mustBeUnit('uom', uom);
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

    /**
     * The coordinate corresponding to the <b>e</b><sub>23</sub> basis bivector.
     */
    get yz(): number {
        return this.coords_[COORD_YZ];
    }
    set yz(yz: number) {
        if (this.isLocked()) {
            throw new TargetLockedError('set yz');
        }
        mustBeNumber('yz', yz);
        const coords = this.coords_;
        this.modified_ = this.modified_ || coords[COORD_YZ] !== yz;
        coords[COORD_YZ] = yz;
    }

    /**
     * The coordinate corresponding to the <b>e</b><sub>31</sub> basis bivector.
     */
    get zx(): number {
        return this.coords_[COORD_ZX];
    }
    set zx(zx: number) {
        if (this.isLocked()) {
            throw new TargetLockedError('zx');
        }
        mustBeNumber('zx', zx);
        const coords = this.coords_;
        this.modified_ = this.modified_ || coords[COORD_ZX] !== zx;
        coords[COORD_ZX] = zx;
    }

    /**
     * The coordinate corresponding to the <b>e</b><sub>12</sub> basis bivector.
     */
    get xy(): number {
        return this.coords_[COORD_XY];
    }
    set xy(xy: number) {
        if (this.isLocked()) {
            throw new TargetLockedError('xy');
        }
        mustBeNumber('xy', xy);
        const coords = this.coords_;
        this.modified_ = this.modified_ || coords[COORD_XY] !== xy;
        coords[COORD_XY] = xy;
    }

    /**
     * The coordinate corresponding to the <b>1</b> basis scalar.
     */
    get a(): number {
        return this.coords_[COORD_SCALAR];
    }
    set a(α: number) {
        if (this.isLocked()) {
            throw new TargetLockedError('a');
        }
        mustBeNumber('α', α);
        const coords = this.coords_;
        this.modified_ = this.modified_ || coords[COORD_SCALAR] !== α;
        coords[COORD_SCALAR] = α;
    }

    get length(): number {
        return 4;
    }

    getComponent(index: number): number {
        return this.coords_[index];
    }

    /**
     *
     */
    get maskG3(): number {
        const α = this.a;
        const yz = this.yz;
        const zx = this.zx;
        const xy = this.xy;
        let m = 0x0;
        if (α !== 0) {
            m += 0x1;
        }
        if (yz !== 0 || zx !== 0 || xy !== 0) {
            m += 0x4;
        }
        return m;
    }
    set maskG3(unused: number) {
        throw new Error(readOnly('maskG3').message);
    }

    /**
     * this ⟼ this + α
     *
     * @param α
     * @returns this + α 
     */
    addScalar(α: number, uom?: Unit): Spinor3 {
        mustBeNumber('α', α);
        this.a += α;
        return this;
    }

    arg(): Spinor3 {
        if (this.isLocked()) {
            return lock(this.clone().arg());
        }
        else {
            return this.log().grade(2);
        }
    }

    approx(n: number): this {
        approx(this.coords_, n);
        return this;
    }

    /**
     * Returns an unlocked (mutable) copy of `this`.
     */
    clone(): Spinor3 {
        return Spinor3.spinor(this.yz, this.zx, this.xy, this.a);
    }
    /**
     * 
     */
    copy(spinor: SpinorE3): this {
        this.a = spinor.a;
        this.xy = spinor.xy;
        this.yz = spinor.yz;
        this.zx = spinor.zx;
        return this;
    }

    /**
     * 
     */
    divByScalar(alpha: number): this {
        if (alpha !== 1) {
            this.a /= alpha;
            this.xy /= alpha;
            this.yz /= alpha;
            this.zx /= alpha;
        }
        return this;
    }

    dual(v: VectorE3, changeSign: boolean): Spinor3 {
        this.a = 0;
        this.yz = v.x;
        this.zx = v.y;
        this.xy = v.z;
        if (changeSign) {
            this.neg();
        }
        return this;
    }

    /**
     * <code>this ⟼ e<sup>this</sup></code>
     *
     * @returns exp(this)
     */
    exp(): Spinor3 {
        const w = this.a;
        const x = this.yz;
        const y = this.zx;
        const z = this.xy;
        const expW = Math.exp(w);
        // φ is actually the absolute value of one half the rotation angle.
        // The orientation of the rotation gets carried in the bivector components.
        // FIXME: DRY
        const φ = Math.sqrt(x * x + y * y + z * z);
        const s = expW * (φ !== 0 ? Math.sin(φ) / φ : 1);
        this.a = expW * Math.cos(φ);
        this.yz = x * s;
        this.zx = y * s;
        this.xy = z * s;
        return this;
    }

    grade(grade: number): this {
        mustBeInteger('grade', grade);
        switch (grade) {
            case 0: {
                this.yz = 0;
                this.zx = 0;
                this.xy = 0;
                break;
            }
            case 2: {
                this.a = 0;
                break;
            }
            default: {
                this.a = 0;
                this.yz = 0;
                this.zx = 0;
                this.xy = 0;
            }
        }
        return this;
    }

    /**
     * 
     */
    isOne(): boolean {
        return this.a === 1 && this.xy === 0 && this.yz === 0 && this.zx === 0;
    }

    isZero(): boolean {
        return this.a === 0 && this.xy === 0 && this.yz === 0 && this.zx === 0;
    }

    log(): this {
        // FIXME: Wrong
        let w = this.a;
        let x = this.yz;
        let y = this.zx;
        let z = this.xy;
        // FIXME: DRY
        let bb = x * x + y * y + z * z;
        let Vector2 = Math.sqrt(bb);
        let R0 = Math.abs(w);
        let R = Math.sqrt(w * w + bb);
        this.a = Math.log(R);
        let θ = Math.atan2(Vector2, R0) / Vector2;
        // The angle, θ, produced by atan2 will be in the range [-π, +π]
        this.yz = x * θ;
        this.zx = y * θ;
        this.xy = z * θ;
        return this;
    }

    /**
     * 
     */
    magnitude(): number {
        return Math.sqrt(this.quaditude());
    }

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
    mul(rhs: SpinorE3): Spinor3 {

        const α = mulSpinorE3alpha(this, rhs);
        const yz = mulSpinorE3YZ(this, rhs);
        const zx = mulSpinorE3ZX(this, rhs);
        const xy = mulSpinorE3XY(this, rhs);

        this.a = α;
        this.yz = yz;
        this.zx = zx;
        this.xy = xy;

        return this;
    }

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
    mul2(a: SpinorE3, b: SpinorE3): Spinor3 {

        const α = mulSpinorE3alpha(a, b);
        const yz = mulSpinorE3YZ(a, b);
        const zx = mulSpinorE3ZX(a, b);
        const xy = mulSpinorE3XY(a, b);

        this.a = α;
        this.yz = yz;
        this.zx = zx;
        this.xy = xy;

        return this;
    }

    neg(): this {
        this.a = -this.a;
        this.yz = -this.yz;
        this.zx = -this.zx;
        this.xy = -this.xy;
        return this;
    }

    /**
     * 
     */
    normalize(): this {
        const m = this.magnitude();
        if (m !== 1) {
            return this.divByScalar(m);
        }
        else {
            return this;
        }
    }

    /**
     * 
     */
    one(): this {
        this.a = 1;
        this.xy = 0;
        this.yz = 0;
        this.zx = 0;
        return this;
    }

    /**
     * a.k.a. squared norm
     */
    private quaditude(): number {
        const a = this.a;
        const x = this.yz;
        const y = this.zx;
        const z = this.xy;
        return a * a + x * x + y * y + z * z;
    }

    /**
     * 
     */
    rev(): this {
        this.yz = -this.yz;
        this.zx = -this.zx;
        this.xy = -this.xy;
        return this;
    }
    /**
     * Sets this Spinor to the value of its reflection in the plane orthogonal to n.
     * The geometric formula for bivector reflection is B' = n * B * n.
     *
     * @method reflect
     * @param n {VectorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    reflect(n: VectorE3) {
        const w = this.a;
        const yz = this.yz;
        const zx = this.zx;
        const xy = this.xy;
        const nx = n.x;
        const ny = n.y;
        const nz = n.z;
        const nn = nx * nx + ny * ny + nz * nz;
        const nB = nx * yz + ny * zx + nz * xy;
        this.a = nn * w;
        this.xy = 2 * nz * nB - nn * xy;
        this.yz = 2 * nx * nB - nn * yz;
        this.zx = 2 * ny * nB - nn * zx;
        return this;
    }

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
    rotate(R: SpinorE3): Spinor3 {
        // R * this * rev(R) = R * rev(R * rev(this));
        this.rev();
        this.mul2(R, this);
        this.rev();
        this.mul2(R, this);
        return this;
    }

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
    rotorFromDirections(a: VectorE3, b: VectorE3): Spinor3 {
        return this.rotorFromVectorToVector(a, b, void 0);
    }

    /**
     * <p>
     * <code>this = ⟼ exp(- B * θ / 2)</code>
     * </p>
     *
     * @param B The unit bivector that generates the rotation.
     * @param θ The rotation angle in radians.
     */
    rotorFromGeneratorAngle(B: BivectorE3, θ: number) {
        const φ = θ / 2;
        const s = Math.sin(φ);
        this.yz = -B.yz * s;
        this.zx = -B.zx * s;
        this.xy = -B.xy * s;
        this.a = Math.cos(φ);
        return this;
    }

    rotorFromVectorToVector(a: VectorE3, b: VectorE3, B: BivectorE3): Spinor3 {
        rotorFromDirections(a, b, B, this);
        return this;
    }

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
    scale(α: number): Spinor3 {
        mustBeNumber('α', α);
        this.yz *= α;
        this.zx *= α;
        this.xy *= α;
        this.a *= α;
        return this;
    }

    /**
     * @method stress
     * @param σ {VectorE3}
     * @return {Spinor3}
     * @chainable
     */
    stress(σ: VectorE3): Spinor3 {
        // There is no change to the scalar coordinate, α.
        this.yz = this.yz * σ.y * σ.z;
        this.zx = this.zx * σ.z * σ.x;
        this.xy = this.xy * σ.x * σ.y;
        return this;
    }

    toExponential(fractionDigits?: number): string {
        const coordToString = function (coord: number): string { return coord.toExponential(fractionDigits); };
        return toStringCustom(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    }
    /**
     * 
     */
    toFixed(fractionDigits?: number): string {
        const coordToString = function (coord: number): string { return coord.toFixed(fractionDigits); };
        return toStringCustom(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    }

    /**
     * 
     */
    toPrecision(position?: number): string {
        const coordToString = function (coord: number): string { return coord.toPrecision(position); };
        return toStringCustom(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    }

    /**
     * @method toString
     * @param [radix] {number}
     * @return {string} A non-normative string representation of the target.
     */
    toString(radix?: number): string {
        const coordToString = function (coord: number): string { return coord.toString(radix); };
        return toStringCustom(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    }

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
    versor(a: VectorE3, b: VectorE3): this {

        const ax = a.x;
        const ay = a.y;
        const az = a.z;
        const bx = b.x;
        const by = b.y;
        const bz = b.z;

        this.a = dotVectorCartesianE3(ax, ay, az, bx, by, bz);
        this.yz = wedgeYZ(ax, ay, az, bx, by, bz);
        this.zx = wedgeZX(ax, ay, az, bx, by, bz);
        this.xy = wedgeXY(ax, ay, az, bx, by, bz);

        return this;
    }

    /**
     * Sets this spinor to the identity element for addition, <b>0</b>.
     *
     * @return {Spinor3} <code>this</code>
     */
    zero(): Spinor3 {
        this.a = 0;
        this.yz = 0;
        this.zx = 0;
        this.xy = 0;
        return this;
    }

    /**
     * <p>
     * Computes a unit spinor with a random direction.
     * </p>
     */
    static random(): Spinor3 {
        const yz = randomRange(-1, 1);
        const zx = randomRange(-1, 1);
        const xy = randomRange(-1, 1);
        const α = randomRange(-1, 1);
        return Spinor3.spinor(yz, zx, xy, α).normalize();
    }

    /**
     * Computes the rotor that rotates vector <code>a</code> to vector <code>b</code>.
     *
     * @param a The <em>from</em> vector.
     * @param b The <em>to</em> vector.
     */
    static rotorFromDirections(a: VectorE3, b: VectorE3): Spinor3 {
        return Spinor3.zero.clone().rotorFromDirections(a, b);
    }

    /**
     * @param yz
     * @param zx
     * @param xy
     * @param α
     * @param uom
     */
    static spinor(yz: number, zx: number, xy: number, α: number, uom?: Unit): Spinor3 {
        return new Spinor3([yz, zx, xy, α], uom, magicCode);
    }

    static wedge(a: VectorE3, b: VectorE3): Spinor3 {

        const ax = a.x;
        const ay = a.y;
        const az = a.z;
        const bx = b.x;
        const by = b.y;
        const bz = b.z;

        const yz = wedgeYZ(ax, ay, az, bx, by, bz);
        const zx = wedgeZX(ax, ay, az, bx, by, bz);
        const xy = wedgeXY(ax, ay, az, bx, by, bz);

        return Spinor3.spinor(yz, zx, xy, 0);
    }

    /**
     *
     */
    static readonly one = Spinor3.spinor(0, 0, 0, 1);

    /**
     *
     */
    static readonly zero = Spinor3.spinor(0, 0, 0, 0);

}
applyMixins(Spinor3, [Lockable]);

Spinor3.one.lock();
Spinor3.zero.lock();
