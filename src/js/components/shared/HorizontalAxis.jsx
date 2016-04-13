// Svg text elements used to describe chart
var React = require("react");
var PropTypes = React.PropTypes;
var map = require("lodash/map");
var help = require("../../util/helper.js");

var DY = "0.32em"

var HorizontalAxis = React.createClass({

	propTypes: {
		prefix: PropTypes.string,
		suffix: PropTypes.string,
		orient: PropTypes.string,
		dimensions: PropTypes.object,
		xScale: PropTypes.func,
		tickValues: PropTypes.array,
		tickFormat: PropTypes.func,
		textAnchor: PropTypes.string
	},

	getInitialState: function() {
		return {
			lastTickWidth: 0,
			firstTickWidth: 0
		}
	},

	componentDidMount: function() {
		this._setTickWidths(this.props);
	},

	componentWillReceiveProps: function(nextProps) {
		this._setTickWidths(nextProps);
	},

	getDefaultProps: function() {
		return {
			orient: "bottom",
			tickFormat: function(d) { return d; },
			textAnchor: "middle",
			fontFamily: "16px Khula-Light",
			prefix: "",
			suffix: "",
			tickTextHeight: 0
		}
	},

	_setTickWidths: function(props) {
		var tickValues = props.tickValues;
		var lastTick = props.tickFormat(tickValues[tickValues.length - 1]);
		var firstTick = props.prefix + props.tickFormat(tickValues[0]);
		var lastTickWidth;
		var firstTickWidth;

		switch (props.textAnchor) {
			case 'middle':
				lastTickWidth = help.computeTextWidth(lastTick, props.fontFamily) / 2;
				firstTickWidth = help.computeTextWidth(firstTick, props.fontFamily) / 2;
				break;
			case 'start':
				lastTickWidth = help.computeTextWidth(lastTick, props.fontFamily);
				firstTickWidth = 0;
				break;
			case 'end':
				lastTickWidth = 0;
				firstTickWidth = help.computeTextWidth(firstTick, props.fontFamily);
				break;
			default:
				lastTickWidth = 0;
				firstTickWidth = 0;
				break;
		}

		if ((lastTickWidth !== this.state.lastTickWidth) || (firstTickWidth !== this.state.firstTickWidth)) {
			this.setState({
				lastTickWidth: lastTickWidth,
				firstTickWidth: firstTickWidth
			});
		};
	},

	_generateTicks: function(props) {
		var lastTickWidth = this.state.lastTickWidth;

		return map(props.tickValues, function(tickValue, i) {
			var text;
			var formatted = props.tickFormat(tickValue)
			var xVal = props.xScale(tickValue);

			// offset a tick label that is over the edge
			if (xVal + lastTickWidth > props.dimensions.width) {
				xVal += (props.dimensions.width - (xVal + lastTickWidth));
			}

			if (i === 0) {
				text = [props.prefix, formatted].join("");
			} else {
				text = formatted;
			}

			return (
				<text key={i} textAnchor={props.textAnchor}
					className={"tick orient-" + props.orient}
					x={xVal} y={0} dy={DY}
				>
					{text}
				</text>
			)
		});
	},

	_generateSuffix: function(props) {
		if (props.suffix !== "") {
			var suffX = props.xScale(props.tickValues[0]);
			var suffY = props.tickTextHeight + 10; // TODO: remove hardcodes
			return (
				<text
					className={"tick orient-" + props.orient}
					textAnchor="start"
					x={suffX} y={suffY} dy={DY} dx={this.state.firstTickWidth * -1}
				>
					{props.suffix}
				</text>
			)
		} else {
			return null;
		}

	},

	_getTransform: function(orient, height) {
		if (orient === "top") {
			return 0;
		} else if (orient === "bottom") {
			return height;
		}
	},

	render: function() {
		var props = this.props;
		var ticks = this._generateTicks(props);
		var suffix = this._generateSuffix(props);
		var transformY = this._getTransform(props.orient, props.dimensions.height);

		return (
			<g
				className="axis horizontal-axis"
				transform={"translate(" + [0, transformY + 20] + ")"}
			>
				{ticks}
				{suffix}
			</g>
		);
	}

});

module.exports = HorizontalAxis;
