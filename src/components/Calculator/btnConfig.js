export const BTN_ACTIONS = {
   ADD: 'ADD',
   CALC: 'CALC',
   DELETE: 'DELETE'
}

export const BTN_NAME = {
   DELETE: 'DELETE',
}

export const btns = [
   {
      display: 'C',
      action: BTN_ACTIONS.DELETE,
      class: 'btn__op'
   },
   {
      display: '(',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op'
   },
   {
      display: ')',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op'
   },
   {
      display: '÷',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op'
   },
   {
      display: '√x',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op btn__none'
   },
   {
      display: 'x^2',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op btn__none'
   },
   {
      display: '1/x',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op btn__none'
   },
   {
      display: '×',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op'
   },
   {
      display: '7',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '8',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '9',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '-',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op'
   },
   {
      display: '4',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '5',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '6',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '+',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op'
   },
   {
      display: '1',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '2',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '3',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '=',
      action: BTN_ACTIONS.CALC,
      class: 'btn__op'
   },
   {
      display: '±',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op btn__none'
   },
   {
      display: '0',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display: '000',
      action: BTN_ACTIONS.ADD,
      class: ''
   },
   {
      display:',',
      action: BTN_ACTIONS.ADD,
      class: 'btn__op'
   },
];