import './style.scss';

import PropTypes from 'prop-types';
import {PureComponent} from 'react';

export default class extends PureComponent {
  static propTypes = {
    items: PropTypes.array,
    value: PropTypes.any,
    itemHeight: PropTypes.number,
    columnHeight: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    itemHeight: 36,
    columnHeight: 200
  };

  get itemStyle() {
    const {itemHeight} = this.props;
    return {
      height: itemHeight + 'px',
      lineHeight: itemHeight + 'px'
    }
  }

  get highlightStyle() {
    const {itemHeight} = this.props;
    return {
      height: itemHeight,
      marginTop: -(itemHeight / 2)
    }
  }

  get rootStyle() {
    const {columnHeight} = this.props;
    const translateString = `translate3d(0, ${this.state.translate}px, 0)`;
    const isMoving = this._isMoving;
    return {
      height: columnHeight,
      WebkitTransform: translateString,
      transform: translateString,
      transitionDuration: isMoving ? '0ms' : null
    };
  }

  getActiveIndex(inProps) {
    const {value, items} = inProps;
    let activeIndex = -1;
    items.forEach((item, index) => {
      if (item.value === value) {
        activeIndex = index;
      }
    });
    return activeIndex;
  }

  get translate() {
    const {minTranslate, maxTranslate}  = this.state;
    let nextScrollerTranslate = this._initialTranslate + this._offsetY;
    if (nextScrollerTranslate < minTranslate) {
      nextScrollerTranslate = minTranslate - Math.pow(minTranslate - nextScrollerTranslate, 0.8);
    } else if (nextScrollerTranslate > maxTranslate) {
      nextScrollerTranslate = maxTranslate + Math.pow(nextScrollerTranslate - maxTranslate, 0.8);
    }
    return nextScrollerTranslate;
  }

  constructor(props) {
    super(props);
    this.initialState(props);
  }

  reset() {
    this._isMoving = false;
    this._startY = 0;
    this._initialTranslate = 0;
    this._offsetY = 0;
  }

  componentWillReceiveProps(nextProps) {
    if (!this._isMoving) {
      this.initialState(nextProps);
    }
  }

  initialState(inProps) {
    const {items, value, itemHeight, columnHeight} = inProps;
    let activeIndex = items.indexOf(value);
    if (activeIndex < 0) {
      // throw new ReferenceError();
      this.onValueSelected(items[0]);
      activeIndex = 0;
    }
    this.state = {
      activeIndex: activeIndex,
      translate: columnHeight / 2 - itemHeight / 2 - activeIndex * itemHeight,
      minTranslate: columnHeight / 2 - itemHeight * items.length + itemHeight / 2,
      maxTranslate: columnHeight / 2 - itemHeight / 2
    };
  };

  onValueSelected = (newValue) => {
    this.props.onChange(newValue);
  };

  handleTouchStart = (event) => {
    this._startY = event.targetTouches[0].pageY;
    this._initialTranslate = this.state.translate;
  };

  handleTouchMove = (event) => {
    event.preventDefault();
    this._offsetY = event.targetTouches[0].pageY - this._startY;
    this._isMoving = true;
    this.setState({translate: this.translate});
  };

  handleTouchEnd = (event) => {
    if (this._isMoving) {
      this.reset();

      const {items, itemHeight} = this.props;
      const {translate, minTranslate, maxTranslate} = this.state;
      let activeIndex;
      if (translate > maxTranslate) {
        activeIndex = 0;
      } else if (translate < minTranslate) {
        activeIndex = items.length - 1;
      } else {
        activeIndex = -Math.floor((translate - maxTranslate) / itemHeight);
      }
      this.onValueSelected(items[activeIndex]);
    }
  };

  handleTouchCancel = (event) => {
    if (this._isMoving) {
      this.setState({translate: this._initialTranslate}, this.reset);
    }
  };

  handleItemClick = (option) => {
    if (option !== this.props.value) {
      this.onValueSelected(option);
    }
  };

  renderItems() {
    const {items, value} = this.props;
    return items.map((option, index) => {
      const className = `react-select-item${option === value ? ' react-select-item-selected' : ''}`;
      return (
        <div
          key={index}
          className={className}
          style={this.itemStyle}
          onClick={() => this.handleItemClick(option)}>{option}</div>
      );
    });
  }

  render() {
    return (
      <div className="react-select">
        <div
          className="react-select-scroller"
          style={this.rootStyle}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onTouchCancel={this.handleTouchCancel}>
          {this.renderItems()}
        </div>
        <div className="react-select-highlight" style={this.highlightStyle}></div>
      </div>
    )
  }
}
