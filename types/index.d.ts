import { Component } from "react";
import {Easing, ImageSourcePropType} from "react-native";

interface IPulseLoaderProps {
    /**
     *
     * default: 2000
     */
    interval?: number;
    /**
     *
     * default: 100
     */
    size?: number;
    /**
     *
     * default: 250
     */
    pulseMaxSize?: number;

    avatar: ImageSourcePropType;
    /**
     *
     * default: 0.8
     */
    pressInValue?: number;
    /**
     *
     * default: 150
     */
    pressDuration?: number;

    pressInEasing?: Easing;
    pressOutEasing?: Easing;
    /**
     *
     * default: #D8335B
     */
    borderColor?: string;
    /**
     *
     * default: #ED225B55
     */
    backgroundColor?: string;

    getStyle?: string;
    /**
     *
     * default: false
     */
    isInteraction?: boolean;
}

export class PulseLoader extends Component<IPulseLoaderProps, any> {
    static defaultProps: Partial<IPulseLoaderProps>;
}
