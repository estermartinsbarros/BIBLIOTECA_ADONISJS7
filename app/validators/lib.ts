import vine from '@vinejs/vine'

export const createLibValidator = vine.compile(
  vine.object({
    titulo: vine.string().trim().minLength(1),
    autor: vine.string().trim().minLength(1),
    genero: vine.string().trim().minLength(1),
    observacao: vine.string().trim().optional(),
    status_leitura: vine.string().trim().minLength(1),
    ano_publicacao: vine.string().trim().optional(),
  })
)

export const updateLibValidator = vine.compile(
  vine.object({
    titulo: vine.string().trim().minLength(1).optional(),
    autor: vine.string().trim().minLength(1).optional(),
    genero: vine.string().trim().minLength(1).optional(),
    observacao: vine.string().trim().optional(),
    status_leitura: vine.string().trim().minLength(1).optional(),
    ano_publicacao: vine.string().trim().optional(),
  })
)
