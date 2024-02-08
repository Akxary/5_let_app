//       
let app = new Vue({
    el: '#vue-app',
    data() {
      return {
        cnt: 0,
        wordsDict: [],
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
          // static data
          default: null,
          in: 'yellow-bg',
          opt: 'white-bg',
          out: 'gray-bg'
        },
        letterPosMap: {
          // static data
          й: [0, 0],
          ц: [0, 1],
          у: [0, 2],
          к: [0, 3],
          е: [0, 4],
          н: [0, 5],
          г: [0, 6],
          ш: [0, 7],
          щ: [0, 8],
          з: [0, 9],
          х: [0, 10],
          ъ: [0, 11],
          ф: [1, 0],
          ы: [1, 1],
          в: [1, 2],
          а: [1, 3],
          п: [1, 4],
          р: [1, 5],
          о: [1, 6],
          л: [1, 7],
          д: [1, 8],
          ж: [1, 9],
          э: [1, 10],
          я: [2, 0],
          ч: [2, 1],
          с: [2, 2],
          м: [2, 3],
          и: [2, 4],
          т: [2, 5],
          ь: [2, 6],
          б: [2, 7],
          ю: [2, 8]
        },
        selectedBtn: 'default',
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
      }
    },

    mounted(){
        
        // console.log(this.wstr)
        this.$nextTick(function () {
            const insertedData = JSON.parse(document.getElementById('json_data').textContent);
            // console.log(insertedData)
            this.wordsDict = insertedData.split(', ')
        })
    },

    methods: {
      filterByInput() {
        let filtArr = []
        for (const itemC in this.inputCells) {
          const iCell = this.inputCells[itemC]
          if (iCell.val !== '') {
            filtArr.push('[' + iCell.val + ']')
          } else if (iCell.restr !== '') {
            filtArr.push(
              '[^' + this.outLetters.concat(iCell.restr.split('')).sort().join('') + ']'
            )
          } else {
            if (this.outLetters.length !== 0) {
              filtArr.push('[^' + this.outLetters.sort().join('') + ']')
            } else {
              filtArr.push('[а-я]')
            }
          }
        }
        // console.log(filtArr)
        const reF = new RegExp('^' + filtArr.join('') + '$')
        let retArr = this.wordsDict.filter((val) => reF.test(val))
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
      },

      changeSelBtnType(key) {
        Object.keys(this.btnClasses).forEach((k) => {
          this.btnClasses[k] = 'no-border'
        })
        this.btnClasses[key] = 'green-border'
      },

      toDefaultValues() {
        this.selectedBtn = 'default'
        this.inputCells.forEach((val) => {
          ;(val.val = ''), (val.restr = '')
        })
        this.changeSelBtnType('Сброс')
        this.rowLetters.forEach((val1) => {
          val1.forEach((val) => {
            val.stts = 'default'
            val.dsbld = false
          })
        })
      },

      validateUpInput(obj) {
        obj.val = obj.val.trim().toLowerCase()
        let objValue = obj.val
        if (objValue.length > 1) {
          obj.val = objValue.slice(0, 1)
          objValue = obj.val
        }
        const reF = new RegExp('[а-я]')
        if (reF.test(objValue)) {
          this.colorYellowBySelected() //todo: block selected - unblock unselected
        } else {
          obj.val = ''
        }
        this.uncolorYellowCells()
      },

      validateDownInput(obj) {
        obj.restr = obj.restr.trim().toLowerCase()
        const objValue = obj.restr
        const reF = new RegExp('[а-я]+')
        if (!reF.test(objValue)) {
          obj.restr = ''
        }
      },
      UnblockAll() {
        this.rowLetters.forEach((val1) => {
          val1.forEach((val) => {
            val.dsbld = false
            if (val.stts === 'in') {
              val.stts = 'default'
            }
          })
        })
      },

      colorYellowBySelected() {
        for (const objValue of this.getUpInput) {
          if (objValue !== '') {
            const idxAr = this.letterPosMap[objValue]
            this.rowLetters[idxAr[0]][idxAr[1]].stts = 'in'
            this.rowLetters[idxAr[0]][idxAr[1]].dsbld = true
          }
        }
      },

      uncolorYellowCells() {
        const yellowAr = this.getUpInput
        for (const obj of this.getYellowCells) {
          if (!yellowAr.includes(obj.let)) {
            const idxAr = this.letterPosMap[obj.let]
            this.rowLetters[idxAr[0]][idxAr[1]].stts = 'default'
            this.rowLetters[idxAr[0]][idxAr[1]].dsbld = false
          }
        }
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
      },
      getUpInput() {
        let resArr = []
        for (const idx in this.inputCells) {
          const objValue = this.inputCells[idx].val
          if (objValue !== '') {
            resArr.push(objValue)
          }
        }
        return resArr
      },
      getYellowCells() {
        let resArr = []
        for (const obj of this.gotAllLetters) {
          if (obj.stts === 'in') {
            resArr.push(obj)
          }
        }
        return resArr
      }
    }
  })
