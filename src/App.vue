from './src/dictFunc.js' import readData

<script>
export default {
  data() {
    return {
      cnt: 0,
      wordsDict: fileContent,
      currentDict: fileContent,
      // rowLetters: ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбю'],
      rowLetters: [
        [
          { let: 'й', stts: 'default' },
          { let: 'ц', stts: 'default' },
          { let: 'у', stts: 'default' },
          { let: 'к', stts: 'default' },
          { let: 'е', stts: 'default' },
          { let: 'н', stts: 'default' },
          { let: 'г', stts: 'default' },
          { let: 'ш', stts: 'default' },
          { let: 'щ', stts: 'default' },
          { let: 'з', stts: 'default' },
          { let: 'х', stts: 'default' },
          { let: 'ъ', stts: 'default' }
        ],
        [
          { let: 'ф', stts: 'default' },
          { let: 'ы', stts: 'default' },
          { let: 'в', stts: 'default' },
          { let: 'а', stts: 'default' },
          { let: 'п', stts: 'default' },
          { let: 'р', stts: 'default' },
          { let: 'о', stts: 'default' },
          { let: 'л', stts: 'default' },
          { let: 'д', stts: 'default' },
          { let: 'ж', stts: 'default' },
          { let: 'э', stts: 'default' }
        ],
        [
          { let: 'я', stts: 'default' },
          { let: 'ч', stts: 'default' },
          { let: 'с', stts: 'default' },
          { let: 'м', stts: 'default' },
          { let: 'и', stts: 'default' },
          { let: 'т', stts: 'default' },
          { let: 'ь', stts: 'default' },
          { let: 'б', stts: 'default' },
          { let: 'ю', stts: 'default' }
        ]
      ],
      inputCells: [
        { val: '', restr: '' },
        { val: 'а', restr: '' },
        { val: '', restr: 'ц' },
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
      // firstRowList: this.rowLetters[0].split(),
      firstRowList: 'йцукенгшщзхъ'.split(''),
      // secondRowList: this.rowLetters[1].split(),
      secondRowList: 'фывапролджэ'.split(''),
      // thirdRowList: this.rowLetters[2].split(),
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
    }
  },

  methods: {
    filterByInput() {
      let filtArr = []
      for (const itemC in this.inputCells) {
        const iCell = this.inputCells[itemC]
        if (iCell.val !== '') {
          filtArr.push('[' + iCell.val + ']')
        } else if (iCell.restr !== '') {
          filtArr.push('[^' + iCell.restr + this.outLetters.join('') + ']')
        } else {
          if (this.outLetters.length !== 0) {
            filtArr.push('[^' + this.outLetters.join('') + ']')
          } else {
            filtArr.push('[а-я]')
          }
        }
      }
      // console.log(this.gotAllLetters)
      // console.log(this.outLetters)
      // console.log(this.optLetters)
      // console.log(filtArr)
      let retArr =this.wordsDict
        .filter((val) => val.match(filtArr.join('')))
      if (this.optLetters.length !== 0) {
        return retArr.filter((val) => {
          return this.optLetters.every((x) => val.split('').includes(x))
        })
      } else {
        return retArr
      }
    },

    getArrByType(retType) {
      let retArr = []
      for (const it in this.gotAllLetters) {
        const sIt = this.gotAllLetters[it]
        if (sIt.stts === retType) {
          retArr.push(sIt.let)
        }
      }
      return retArr
    }
  },

  computed: {
    filteredWordsOutput() {
      // return this.wordsDict.join('\n')
      return this.filterByInput().join('\n')
    },
    gotAllLetters() {
      return this.rowLetters[0].concat(this.rowLetters[1]).concat(this.rowLetters[2])
    },
    inLetters() {
      return this.getArrByType('in')
    },
    outLetters() {
      return this.getArrByType('out')
    },
    optLetters() {
      return this.getArrByType('opt')
    }
  }
}
import { fileContent } from '../src/dictFunc'
</script>

<style>
main,
header,
h2,
input,
button {
  font-size: 24px;
}
.input-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  margin: 5px;
}

.white-bg {
  background-color: white;
}

.gray-bg {
  background-color: gray;
}

.yellow-bg {
  background-color: yellow;
}

.text-center {
  text-align: center;
}

.green-border {
  border-radius: 5px;
  border-color: green;
  border-style: dashed;
  padding: 5px;
}

.no-border {
  border: none;
}
</style>

<template>
  <header>
    <h2 style="display: flex; justify-content: center">5 букв</h2>
  </header>

  <main>
    <div style="display: flex; justify-content: center">
      <div class="input-wrap">
        <label>Ввод: </label>
        <label>Ограничения: </label>
      </div>
      <div v-for="(inC, idx) in inputCells" :key="idx" class="input-wrap">
        <input
          :v-model="inC"
          class="text-center"
          :value="inC.val"
          size="1"
          style="align-self: center; margin: 5px"
          :on-change="console.log(this.inputCells)"
        />
        <input class="text-center" :value="inC.restr" size="5" />
      </div>
    </div>
    <br />
    <br />
    <div style="display: flex; justify-content: space-around">
      <div
        v-for="(value, key) in btnTypes"
        :key="key"
        style="display: flex; padding: 10px; flex-direction: column"
        :class="btnClasses[key]"
      >
        <button
          :class="stateColorMap[value]"
          @click="
            () => {
              selectedBtn = value
              Object.keys(this.btnClasses).forEach((k, i) => {
                this.btnClasses[k] = 'no-border'
              })
              btnClasses[key] = 'green-border'
            }
          "
        >
          <span>{{ key }}</span>
        </button>
      </div>
    </div>
    <br />
    <div style="display: flex; justify-content: center">
      <button>Сбросить всё</button>
    </div>
    <br />
    <br />
    <div
      style="display: flex; justify-content: center"
      v-for="(rowLet, idx1) in rowLetters"
      :key="idx1"
    >
      <div v-for="(letter, idx) in rowLet" :key="idx">
        <button
          @click="
            () => {
              let letter1 = this.rowLetters[idx1][idx]
              letter1.stts = this.selectedBtn
            }
          "
          style="margin: 5px"
          :class="stateColorMap[letter.stts]"
        >
          {{ letter.let }}
        </button>
      </div>
      <br />
      <br />
    </div>
    <br />
    <br />
    <div style="display: flex; justify-content: center">
      <textarea
        v-model="filteredWordsOutput"
        class="text-center"
        style="font-size: 28px"
        rows="5"
        cols="100"
        :disabled="true"
      ></textarea>
    </div>
  </main>
</template>
