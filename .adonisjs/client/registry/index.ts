/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.register': {
    methods: ["POST"],
    pattern: '/register',
    tokens: [{"old":"/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.logout': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
  'libs.index': {
    methods: ["GET","HEAD"],
    pattern: '/lib',
    tokens: [{"old":"/lib","type":0,"val":"lib","end":""}],
    types: placeholder as Registry['libs.index']['types'],
  },
  'libs.show': {
    methods: ["GET","HEAD"],
    pattern: '/lib/:id',
    tokens: [{"old":"/lib/:id","type":0,"val":"lib","end":""},{"old":"/lib/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['libs.show']['types'],
  },
  'libs.store': {
    methods: ["POST"],
    pattern: '/lib',
    tokens: [{"old":"/lib","type":0,"val":"lib","end":""}],
    types: placeholder as Registry['libs.store']['types'],
  },
  'libs.update': {
    methods: ["PUT"],
    pattern: '/lib/:id',
    tokens: [{"old":"/lib/:id","type":0,"val":"lib","end":""},{"old":"/lib/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['libs.update']['types'],
  },
  'libs.destroy': {
    methods: ["DELETE"],
    pattern: '/lib/:id',
    tokens: [{"old":"/lib/:id","type":0,"val":"lib","end":""},{"old":"/lib/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['libs.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
