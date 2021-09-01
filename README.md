# forms-test-app

Let's imagine this is begining of an app where site owner can define forms for users to fill. Where each form has a definition (possibly created using some kind of backend user interface) and interdependencies where choice of one property influences other properties (like selecting book type enables or disables some paper choices or similar).

Right now app has basic skeleton and fully defined single product -- `book` (with just a few properties).

Your task is to implement:
* `form` model with validation and `disabled` state dependencies
* User interface for form editing
* Output of filled in data with validation status

To do that, let's look at the definition options:

## Form definition

Currently app has `app/lib/definition/book.js` as the only definition.

It contains list of properties which can be one of the following:

* `choice` – radio buttons. Property is valid only if choice is selected and it is not currently disabled
* `integer` – input field for integer value. Property is valid only if value is integer, it is in range and is multiply of step
* `paper` - list of papers and list of paper weights for each paper. Property is valid only if paper and weight is selected, and paper is not currently disabled

Some of properties has `disabled` definition which are modelled as simple conditions which needs to be evaluated in the runtime. Currently this app has the following operators:

* `eq` -- `key === value`
* `gt` -- `key > value`
* `or` -- `condition || condition || condition ...`
* `not` -- `!(value)`

## Expected output

Expected form input result is the following:

``` js
{
  type: 'book',
  specification: {
    bookType: { id: 'paperback', validation: { status: 'valid' } },
    colorType: { id: 'color', validation: { status: 'valid' } },
    pageCount: { value: 99, validation: { status: 'invalid', reason: 'step' } },
    contentPaper: { id: 'Amber Graphic', weight: 90, validation: { status: 'valid' } }
  },
  validation: {
    status: 'invalid'
  }
}
```

Which for each property contains value(s) and validation status with invalid status reason.

Please use `<Block::Json @value={{@form.result}}/>` to render it below the form ui.

## Important parts

* `app/lib/definition/book.js` -- book definition
* `app/models/forms/form.js` -- empty base form model
* `app/models/forms/book.js` -- empty book form model
* `app/components/block/form/editor.hbs` -- empty base editor component
* `app/components/block/form/editor/book.hbs` -- empty book editor component

## Getting started

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

### Installation

* `git clone git@github.com:Boekdrukken/forms-test-app.git` this repository
* `cd forms-test-app`
* `npm install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

