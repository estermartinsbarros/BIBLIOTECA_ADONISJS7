import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.logout': { paramsTuple?: []; params?: {} }
    'libs.index': { paramsTuple?: []; params?: {} }
    'libs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'libs.store': { paramsTuple?: []; params?: {} }
    'libs.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'libs.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.logout': { paramsTuple?: []; params?: {} }
    'libs.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'libs.index': { paramsTuple?: []; params?: {} }
    'libs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'libs.index': { paramsTuple?: []; params?: {} }
    'libs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'libs.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'libs.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}