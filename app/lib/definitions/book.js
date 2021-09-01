const {
  assign
} = Object;

const property = (type, key, hash) => assign({ type, key }, hash);

const choice = (id, { disabled=false }={}) => ({ id, disabled });
const choices = (key, choices) => property('choice', key, { choices });

const paper = (id, weights, { disabled=false }={}) => ({ id, weights, disabled });
const papers = (key, papers) => property('paper', key, { papers });

const integer = (key, opts) => property('integer', key, opts);

const not = condition => ({ operator: 'not', condition });
const or = (...conditions) => ({ operator: 'or', conditions });
const ifPaperType = value => ({ operator: 'eq', key: 'bookType.id', value });
const ifPaperback = ifPaperType('paperback');
const ifPageCountMoreThan = value => ({ operator: 'gt', key: 'pageCount', value });

export default {
  properties: {
    bookType: choices('bookType', [
      choice('paperback'),
      choice('hardcover')
    ]),
    colorType: choices('colorType', [
      choice('color'),
      choice('bw')
    ]),
    pageCount: integer('pageCount', { min: 24, max: 1000, step: 4 }),
    contentPaper: papers('contentPaper', [
      paper('Alto Creme / Naturel vol. 1.5', [ 80, 90, 115 ], { disabled: ifPaperback }),
      paper('Amber Graphic', [ 90, 120, 150, 170, 200 ], { disabled: or(not(ifPaperback), ifPageCountMoreThan(500)) }),
      paper('Magno Satin', [ 115, 130, 150, 170, 200 ], { disabled: not(ifPaperback) }),
    ])
  }
};
