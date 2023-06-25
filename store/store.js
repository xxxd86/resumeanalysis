import {action, observable} from 'mobx-miniprogram'

export const store= observable({
  widthP:0,
  heightP:0,
  dataI:{},
  fenxi:{},
  user:{},
  updatewidthP:action(function (step) {
    this.widthP=step
  }),
  updateheightP:action(function (step) {
    this.heightP=step
  }),
  updatefenxi:action(function (step) {
    this.fenxi=step
  }),
  updatedataI:action(function (step) {
    this.dataI=step
  }),

})