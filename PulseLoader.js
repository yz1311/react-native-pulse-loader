import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Pulse from './Pulse';


export default class LocationPulseLoader extends React.Component {
	static defaultProps = {
		interval: 2000,
		size: 100,
		pulseMaxSize: 250,
		avatar: undefined,
		avatarBackgroundColor: 'white',
		pressInValue: 0.8,
		pressDuration: 150,
		pressInEasing: Easing.in,
		pressOutEasing: Easing.in,
		borderColor: '#D8335B',
		backgroundColor: '#ED225B55',
		getStyle: undefined,
		isInteraction: false
	};

	constructor(props) {
		super(props);

		this.state = {
			circles: []
		};

		this.counter = 1;
		this.setInterval = null;
		this.anim = new Animated.Value(1);
	}

	componentDidMount() {
		this.setCircleInterval();
	}

	setCircleInterval() {
		this.setInterval = setInterval(this.addCircle.bind(this), this.props.interval);
		this.addCircle();
	}

	addCircle() {
		this.setState({ circles: [...this.state.circles, this.counter] });
		this.counter++;
	}

	onPressIn() {
		Animated.timing(this.anim, {
			toValue: this.props.pressInValue,
			duration: this.props.pressDuration,
			easing: this.props.pressInEasing,
			isInteraction: this.props.isInteraction,
			useNativeDriver: true,
		}).start(() => clearInterval(this.setInterval));
	}

	onPressOut() {
		Animated.timing(this.anim, {
			toValue: 1,
			duration: this.props.pressDuration,
			easing: this.props.pressOutEasing,
			isInteraction: this.props.isInteraction,
			useNativeDriver: true
		}).start(this.setCircleInterval.bind(this));
	}

	render() {
		const { size, avatar, avatarBackgroundColor, interval } = this.props;

		return (
			<View style={[{
				flex: 1,
				backgroundColor: 'transparent',
				justifyContent: 'center',
				alignItems: 'center',
			}, this.props.style]}>
				{this.state.circles.map((circle) => (
					<Pulse
						key={circle}
						{...this.props}
					/>
				))}

				<TouchableOpacity
					activeOpacity={1}
					onPressIn={this.onPressIn.bind(this)}
					onPressOut={this.onPressOut.bind(this)}
					onPress={this.props.onPress}
					style={{
						transform: [{
							scale: this.anim
						}]
					}}
				>
					<Image
						source={avatar}
						style={{
							width: size,
							height: size,
							borderRadius: size/2,
							backgroundColor: avatarBackgroundColor
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

