import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Radio & Checkbox', module)
  .addWithJSX('Radio button', () =>
    withPadding(
      <React.Fragment>
        <div className="ray-radio">
          <input
            id="radio-1"
            name="radio-button-story"
            type="radio"
            className="ray-radio__input"
          />
          <label className="ray-radio__label" htmlFor="radio-1">
            Choose me
          </label>
        </div>

        <div className="ray-radio">
          <input
            id="radio-2"
            name="radio-button-story"
            type="radio"
            className="ray-radio__input"
          />
          <label className="ray-radio__label" htmlFor="radio-2">
            Choose me
            <br />
            multi line label
          </label>
        </div>

        <div className="ray-radio">
          <input
            id="radio-3"
            name="radio-button-story"
            type="radio"
            className="ray-radio__input"
            disabled
          />
          <label className="ray-radio__label" htmlFor="radio-3">
            Choose me
          </label>
        </div>
      </React.Fragment>
    )
  )
  .addWithJSX('Checkbox', () =>
    withPadding(
      <div className="ray-checkbox">
        <input id="check" type="checkbox" className="ray-checkbox__input" />
        <label className="ray-checkbox__label" htmlFor="check">
          Check me out
        </label>
      </div>
    )
  )
  .addWithJSX('Checkbox, multiple', () =>
    withPadding(
      <>
        <div className="ray-checkbox">
          <input id="check" type="checkbox" className="ray-checkbox__input" />
          <label className="ray-checkbox__label" htmlFor="check">
            Check me out
          </label>
        </div>
        <div className="ray-checkbox">
          <input id="check-2" type="checkbox" className="ray-checkbox__input" />
          <label className="ray-checkbox__label" htmlFor="check-2">
            Check me out
          </label>
        </div>
        <div className="ray-checkbox">
          <input id="check-3" type="checkbox" className="ray-checkbox__input" />
          <label className="ray-checkbox__label" htmlFor="check-3">
            Check me out
            <br />
            multi lines
          </label>
        </div>
        <div className="ray-checkbox">
          <input id="check-4" type="checkbox" className="ray-checkbox__input" />
          <label className="ray-checkbox__label" htmlFor="check-4">
            Check me out
          </label>
        </div>
      </>
    )
  )
  .addWithJSX('Checkbox - disabled', () =>
    withPadding(
      <div className="ray-checkbox">
        <input
          id="check"
          type="checkbox"
          className="ray-checkbox__input"
          disabled
        />
        <label className="ray-checkbox__label" htmlFor="check">
          Check me out
        </label>
      </div>
    )
  );
