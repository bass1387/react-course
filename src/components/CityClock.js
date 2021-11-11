import React from 'react';
import PropTypes from 'prop-types';

const getDate = (offset) => {
  const now = new Date().getTime();

  return new Date(now + (offset - 3) * 3600 * 1000);
};

function CityClock({ city, timeZoneOffset }) {
  const timerRef = React.useRef(null);
  const [date, setDate] = React.useState(getDate(timeZoneOffset));

  React.useEffect(() => {
    timerRef.current = setInterval(
      () => setDate(getDate(timeZoneOffset)),
      1000
    );

    return () => {
      !!timerRef.current && clearInterval(timerRef.current);
    };
  }, [timeZoneOffset]);

  return `${city}: ${date.toLocaleTimeString()}`;
};

// class CityClock extends React.Component {
//   constructor(props) {
//     super(props);
//
//     console.log('constructor');
//     this.timerId = null;
//     this.state = {
//       date: getDate(this.props.timeZoneOffset)
//     };
//   }
//
//   componentDidMount() {
//     console.log('componentDidMount');
//     this.timerId = setInterval(this.tick, 1000);
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('componentDidUpdate');
//   }
//
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//     !!this.timerId && clearInterval(this.timerId);
//   }
//
//   tick = () => {
//     this.setState({
//       date: getDate(this.props.timeZoneOffset)
//     });
//   }
//
//   render() {
//     const { city } = this.props;
//     const { date } = this.state;
//
//     console.log('render');
//     return `${city}: ${date.toLocaleTimeString()}`;
//   }
// }

CityClock.defaultProps = {
  timeZoneOffset: 0
};

CityClock.propTypes = {
  city: PropTypes.string.isRequired,
  timeZoneOffset: PropTypes.number
};

export default CityClock;
