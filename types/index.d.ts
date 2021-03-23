import { Component } from "react";
import {Easing, ImageSourcePropType, StyleProp, ViewStyle} from "react-native";

interface IPulseLoaderProps {
    style?: StyleProp<ViewStyle>;
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
    onPress?: ()=>void;
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

declare class PulseLoader extends Component<IPulseLoaderProps, any> {
    static defaultProps: Partial<IPulseLoaderProps>;
}


export default PulseLoader;