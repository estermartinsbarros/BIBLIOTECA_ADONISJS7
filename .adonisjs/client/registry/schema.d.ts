/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.register': {
    methods: ["POST"]
    pattern: '/register'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.login': {
    methods: ["POST"]
    pattern: '/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.logout': {
    methods: ["POST"]
    pattern: '/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'libs.index': {
    methods: ["GET","HEAD"]
    pattern: '/lib'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['index']>>>
    }
  }
  'libs.show': {
    methods: ["GET","HEAD"]
    pattern: '/lib/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['show']>>>
    }
  }
  'libs.store': {
    methods: ["POST"]
    pattern: '/lib'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/lib').createLibValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/lib').createLibValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'libs.update': {
    methods: ["PUT"]
    pattern: '/lib/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/lib').updateLibValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/lib').updateLibValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'libs.destroy': {
    methods: ["DELETE"]
    pattern: '/lib/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/libs_controller').default['destroy']>>>
    }
  }
}
