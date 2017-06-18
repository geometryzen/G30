"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DimensionsSummary_1 = require("./DimensionsSummary");
/**
 *
 */
function detectDimensions(M, L, T, Q, temperature, amount, intensity) {
    if (M.numer === -1) {
        if (M.denom === 1) {
            if (L.numer === -2) {
                if (L.denom === 1) {
                    if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.INV_MOMENT_OF_INERTIA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === -1) {
                if (L.denom === 1) {
                    if (T.numer === 2) {
                        if (T.denom === 1) {
                            if (Q.numer === 2) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.ELECTRIC_PERMITTIVITY_TIMES_AREA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 0) {
                if (L.denom === 1) {
                    if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.INV_MASS;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (M.numer === 0) {
        if (M.denom === 1) {
            if (L.numer === -1) {
                if (L.denom === 1) {
                    if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.INV_LENGTH;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 0) {
                if (L.denom === 1) {
                    if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.INV_TIME;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (Q.numer === 1) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.ELECTRIC_CURRENT;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.ONE;
                                                        }
                                                    }
                                                    else if (intensity.numer === 1) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.LUMINOUS_INTENSITY;
                                                        }
                                                    }
                                                }
                                            }
                                            else if (amount.numer === 1) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.AMOUNT_OF_SUBSTANCE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (temperature.numer === 1) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.THERMODYNAMIC_TEMPERATURE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (Q.numer === 1) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.ELECTRIC_CHARGE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.TIME;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.TIME_SQUARED;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 1) {
                if (L.denom === 1) {
                    if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.VELOCITY;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.LENGTH;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 2) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.VELOCITY_SQUARED;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.RATE_OF_CHANGE_OF_AREA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.AREA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 3) {
                if (L.denom === 1) {
                    if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.VOLUME;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (M.numer === 1) {
        if (M.denom === 1) {
            if (L.numer === 0) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.STIFFNESS;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.MASS;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 1) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === -1) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.ELECTRIC_FIELD;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.FORCE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.MOMENTUM;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 2) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.ENERGY_OR_TORQUE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.ANGULAR_MOMENTUM;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.MOMENT_OF_INERTIA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (M.numer === 2) {
        if (M.denom === 1) {
            if (L.numer === 2) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary_1.DimensionsSummary.MOMENTUM_SQUARED;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return void 0;
}
exports.detectDimensions = detectDimensions;
