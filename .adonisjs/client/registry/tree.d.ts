/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    logout: typeof routes['auth.logout']
  }
  libs: {
    index: typeof routes['libs.index']
    show: typeof routes['libs.show']
    store: typeof routes['libs.store']
    update: typeof routes['libs.update']
    destroy: typeof routes['libs.destroy']
  }
}
