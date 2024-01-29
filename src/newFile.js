import { fileContent } from '../src/dictFunc';

/* __placeholder__ */
export default (await import('vue')).defineComponent({
data() {
return {
cnt: 0,
wordsDict: fileContent,
currentDict: fileContent,
// rowLetters: ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбю'],
rowLetters: [
[
{ let: 'й', stts: 'default', dsbld: false },
{ let: 'ц', stts: 'default', dsbld: false },
{ let: 'у', stts: 'default', dsbld: false },
{ let: 'к', stts: 'default', dsbld: false },
{ let: 'е', stts: 'default', dsbld: false },
{ let: 'н', stts: 'default', dsbld: false },
{ let: 'г', stts: 'default', dsbld: false },
{ let: 'ш', stts: 'default', dsbld: false },
{ let: 'щ', stts: 'default', dsbld: false },
{ let: 'з', stts: 'default', dsbld: false },
{ let: 'х', stts: 'default', dsbld: false },
{ let: 'ъ', stts: 'default', dsbld: false }
],
[
{ let: 'ф', stts: 'default', dsbld: false },
{ let: 'ы', stts: 'default', dsbld: false },
{ let: 'в', stts: 'default', dsbld: false },
{ let: 'а', stts: 'default', dsbld: false },
{ let: 'п', stts: 'default', dsbld: false },
{ let: 'р', stts: 'default', dsbld: false },
{ let: 'о', stts: 'default', dsbld: false },
{ let: 'л', stts: 'default', dsbld: false },
{ let: 'д', stts: 'default', dsbld: false },
{ let: 'ж', stts: 'default', dsbld: false },
{ let: 'э', stts: 'default', dsbld: false }
],
[
{ let: 'я', stts: 'default', dsbld: false },
{ let: 'ч', stts: 'default', dsbld: false },
{ let: 'с', stts: 'default', dsbld: false },
{ let: 'м', stts: 'default', dsbld: false },
{ let: 'и', stts: 'default', dsbld: false },
{ let: 'т', stts: 'default', dsbld: false },
{ let: 'ь', stts: 'default', dsbld: false },
{ let: 'б', stts: 'default', dsbld: false },
{ let: 'ю', stts: 'default', dsbld: false }
]
],
inputCells: [
{ val: '', restr: '' },
{ val: '', restr: '' },
{ val: '', restr: '' },
{ val: '', restr: '' },
{ val: '', restr: '' }
],
stateColorMap: {
default: null,
in: 'yellow-bg',
opt: 'white-bg',
out: 'gray-bg'
},
selectedBtn: 'default',
allLetters: 'йцукенгшщзхъфывапролджэячсмитьбю',
firstRowList: 'йцукенгшщзхъ'.split(''),
secondRowList: 'фывапролджэ'.split(''),
thirdRowList: 'ячсмитьбю'.split(''),
btnTypes: {
Сброс: 'default',
Возможно: 'opt',
'Точно нет': 'out'
},
btnClasses: {
Сброс: 'green-border',
Возможно: 'no-border',
'Точно нет': 'no-border'
}
};
},

methods: {
filterByInput() {
let filtArr = [];
const re = new RegExp(
'^' +
[
'[^абвгдеипт]',
'[^абвгдеипрт]',
'[^абвгдеиопрт]',
'[^абвгдеиопрт]',
'[^абвгдеиопт]'
].join('') +
'$'
);
console.log(re.test('проух'));
// console.log('проух'.match(re))
for (const itemC in this.inputCells) {
const iCell = this.inputCells[itemC];
if (iCell.val !== '') {
filtArr.push('([' + iCell.val + '])');
} else if (iCell.restr !== '') {
filtArr.push('([^' + this.outLetters.concat(iCell.restr.split('')).sort().join('') + '])');
} else {
if (this.outLetters.length !== 0) {
filtArr.push('([^' + this.outLetters.sort().join('') + '])');
} else {
filtArr.push('([а-я])');
}
}
}
console.log(filtArr);
const reF = new RegExp(filtArr.join(''));
let retArr = this.wordsDict.filter((val) => reF.test(val));
if (this.optLetters.length !== 0) {
return retArr.filter((val) => {
return this.optLetters.every((x) => val.split('').includes(x));
});
} else {
return retArr;
}
},

getArrByType(retType) {
let retArr = [];
for (const it in this.gotAllLetters) {
const sIt = this.gotAllLetters[it];
if (sIt.stts === retType) {
retArr.push(sIt.let);
}
}
return retArr;
},

changeSelBtnType(key) {
Object.keys(this.btnClasses).forEach((k) => {
this.btnClasses[k] = 'no-border';
});
this.btnClasses[key] = 'green-border';
},

toDefaultValues() {
this.selectedBtn = 'default';
this.inputCells.forEach((val) => {
; (val.val = ''), (val.restr = '');
});
this.changeSelBtnType('Сброс');
this.rowLetters.forEach((val1) => {
val1.forEach((val) => {
val.stts = 'default';
});
});
},

validateUpInput(obj) {
obj.val = obj.val.toLowerCase();
let objValue = obj.val;
if (objValue.length > 1) {
obj.val = objValue.slice(0, 1);
objValue = obj.val;
}
const reF = new RegExp('[а-я]');
if (reF.test(objValue)) {
this.gotAllLetters;
} else {
obj.val = '';
}
},

validateDownInput() { }
},

computed: {
filteredWordsOutput() {
// return this.wordsDict.join('\n')
return this.filterByInput().join('\n');
},
gotAllLetters() {
return this.rowLetters[0].concat(this.rowLetters[1]).concat(this.rowLetters[2]);
},
inLetters() {
return this.getArrByType('in');
},
outLetters() {
return this.getArrByType('out');
},
optLetters() {
return this.getArrByType('opt');
}
}
});
