/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import '../ProductOverview.css';
import { updateSelectedStyle } from '../../../data/actions/productDataAction';

const Styles = (props) => (
  props.productStyles.product_id ? (
    <div className="select-checkmark">
      <div className="style-name">Style: {props.selectedStyleName}</div>
      <div>
        {props.productStyles.results.map((style, index) => (
          <label className="style-container" key={style.style_id}>
            {props.selectedStyle_id === style.style_id
              ? <input type="radio" name="style-selector" checked />
              : <input type="radio" name="style-selector" />}
            <span className="checkmark">✔</span>
            <img
              src={style.photos[0].thumbnail_url}
              alt={style.name}
              id={index}
              className="rounded-circle style-pics"
              name="style-selector"
              onClick={() => props.updateSelectedStyle(props.productStyles.results[index])}
            />
          </label>
        ))}
      </div>
    </div>
  ) : <div />
);


const mapStateToProps = (state) => ({
  productStyles: state.productDataReducer.productStyles,
  selectedStyleName: state.productDataReducer.selectedStyleName,
  selectedStyle_id: state.productDataReducer.selectedStyle_id,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedStyle: (defaultStyle) => dispatch(updateSelectedStyle(defaultStyle)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Styles);
