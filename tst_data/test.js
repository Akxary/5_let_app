const rowLetters= [
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
  ]

function mapPosition() {
    let retObj = {}
    for (idx0 in rowLetters) {
        const row0 = rowLetters[idx0]
        for (idx1 in row0) {
            const strVal = row0[idx1]
            retObj[strVal.let] = [idx0, idx1]
        }
    }
    return retObj
}