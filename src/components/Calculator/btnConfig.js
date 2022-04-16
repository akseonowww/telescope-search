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
      code: '',
      class: 'btn__op'
   },
   {
      display: '(',
      action: BTN_ACTIONS.ADD,
      code: '',
      class: 'btn__op'
   },
   {
      display: ')',
      action: BTN_ACTIONS.ADD,
      code: '',
      class: 'btn__op'
   },
   {
      display: '+',
      action: BTN_ACTIONS.ADD,
      code: '',
      class: 'btn__op'
   },
   {
      // display: '\\sqrt${x\\mathstrut}',
      display: '\\sqrt{x}',
      action: BTN_ACTIONS.ADD,
      code: 'Math.sqrt(val)',
      class: 'btn__op btn__none'
   },
   {
      display: 'x^{2}',
      action: BTN_ACTIONS.ADD,
      code: 'Math.pow(val, 2)',
      class: 'btn__op btn__none'
   },
   {
      display: '1/x',
      action: BTN_ACTIONS.ADD,
      code: '1/(val)',
      class: 'btn__op btn__none'
   },
   {
      display: '-',
      action: BTN_ACTIONS.ADD,
      code: '-',
      class: 'btn__op'
   },
   {
      display: '7',
      action: BTN_ACTIONS.ADD,
      code: '7',
      class: ''
   },
   {
      display: '8',
      action: BTN_ACTIONS.ADD,
      code: '8',
      class: ''
   },
   {
      display: '9',
      action: BTN_ACTIONS.ADD,
      code: '9',
      class: ''
   },
   {
      display: '\\times',
      action: BTN_ACTIONS.ADD,
      code: '*',
      class: 'btn__op'
   },

   {
      display: '4',
      action: BTN_ACTIONS.ADD,
      code: '4',
      class: ''
   },
   {
      display: '5',
      action: BTN_ACTIONS.ADD,
      code: '5',
      class: ''
   },
   {
      display: '6',
      action: BTN_ACTIONS.ADD,
      code: '6',
      class: ''
   },
   {
      display: '\\div',
      action: BTN_ACTIONS.ADD,
      code: '/',
      class: 'btn__op'
   },
   {
      display: '1',
      action: BTN_ACTIONS.ADD,
      code: '1',
      class: ''
   },
   {
      display: '2',
      action: BTN_ACTIONS.ADD,
      code: '2',
      class: ''
   },
   {
      display: '3',
      action: BTN_ACTIONS.ADD,
      code: '3',
      class: ''
   },
   {
      display: '=',
      action: BTN_ACTIONS.CALC,
      code: '=',
      class: 'btn__op'
   },
   {
      display: '\\pm',
      action: BTN_ACTIONS.ADD,
      code: '+-',
      class: 'btn__op btn__none'
   },
   {
      display: '0',
      action: BTN_ACTIONS.ADD,
      code: '0',
      class: ''
   },
   {
      display: '000',
      action: BTN_ACTIONS.ADD,
      code: '000',
      class: ''
   },
   {
      display: ',',
      action: BTN_ACTIONS.ADD,
      code: '.',
      class: 'btn__op'
   },
   // {
   //    display: '\\sin',
   //    action: BTN_ACTIONS.ADD,
   //    code: 'Math.sin(val)',
   //    class: 'btn__op'
   // },
   // {
   //    display: '\\cos',
   //    action: BTN_ACTIONS.ADD,
   //    code: 'Math.cos(val)',
   //    class: 'btn__op'
   // },
   // {
   //    display: '\\tg',
   //    action: BTN_ACTIONS.ADD,
   //    code: 'Math.tan(val)',
   //    class: 'btn__op'
   // },
   // {
   //    display: '\\ctg',
   //    action: BTN_ACTIONS.ADD,
   //    code: '1/Math.tan(val)',
   //    class: 'btn__op'
   // },
   // {
   //    display: '\\pi',
   //    action: BTN_ACTIONS.ADD,
   //    code: 'Math.PI',
   //    class: 'btn__op'
   // },
];