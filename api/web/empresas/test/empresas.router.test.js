const request = require('supertest')
const expect = require('chai').expect
const rfr = require('rfr')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })

const generatorDocs = rfr('api/config/documentacion')
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const utils = rfr('api/utils')

const SCHEMA = require('../API_SCHEMA')
const API = require('./API_DOCS')
const EQUI = require('./API_EQUI')
const models = db.db
let docs = []
let equivalencias = {}

const schema = utils.schemaFormato

describe('EMPRESAS', () => {
  let { empresas, establecimientos } = dump
  let empresa = empresas.VALIDOS[0]
  let empresa2 = empresas.VALIDOS[1]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let establecimiento3 = establecimientos.VALIDOS[2]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function () {
    generatorDocs.generateAPI({ docs, archivo: 'api.empresas.md', nombre: 'Empresas' })
    generatorDocs.EQUI({ equivalencias, nombre: 'Empresas' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('API_1 OBTENER TODAS', () => {
    const { API_1 } = API
    let { API_1_EQUI } = EQUI
    let codigoApi = 'API_1'
    it(`@ICE_${codigoApi}_1 Una empresa creada`, async () => {
      await models.empresas.Crear(empresa)
      let res = await request(app).get('/api/web/empresas')
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.OK({ docs, doc: API_1, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })
    it(`@ICE_${codigoApi}_2 Sin empresas existentes`, async () => {
      let res = await request(app).get('/api/web/empresas')
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(0)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })
  })

  describe('API_2 CREAR', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    const codigoApi = 'API_2'

    // VALIDAS
    it(`@ICE_API_2_01 Crea una empresa exitosamente`, async () => {
      let req = { ...empresa, direccion: 'Plaza Mayor', ruc: '1702365486001' }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['id']).to.equal(1)
      expect(res.body.datos['establecimiento']['id']).to.equal(1)
      expect(res.body.datos['establecimiento']['nombres']).to.equal('matriz')
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })

    // NO VALIDAS
    it('@ICE_API_2_02 nombre tamaño no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre: '', actividadComercial, razonSocial, direccion: 'Plaza Mayor', ruc: '1702365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res,  codigoApi })
    })

    it('@ICE_API_2_03 actividadComercial tamaño no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial: '', razonSocial, direccion: 'Plaza Mayor', ruc: '1702365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_04 razonSocial tamaño no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial: '', direccion: 'Plaza Mayor', ruc: '1702365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_05 direccion tamaño no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: '', ruc: '1702365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_06 ruc tamaño no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: 'Plaza Mayor', ruc: '17236548600', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_07 nombre tipo no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre: 1, actividadComercial, razonSocial, direccion: '', ruc: '172365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_08 actividadComercial tipo no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial: 1, razonSocial, direccion: 'Plaza Mayor', ruc: '1702365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_09 razonSocial tipo no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial: 1, direccion: 'Plaza Mayor', ruc: '1702365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_10 direccion tipo no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: 1, ruc: '1702365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_11 ruc 1-2 digitos valor>24', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: 'ab', ruc: '2502365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_12 ruc 1-2 digitos valor=00', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: 'ab', ruc: '0002365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_13 ruc 3er digito valor={7,8}', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: 'ab', ruc: '1772365486001', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_14 ruc 11-13 digitos valor<001', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: 'ab', ruc: '1762365486000', urlFoto }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '14', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_15 urlFoto tipo no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: 'ab', ruc: '1702365486001', urlFoto: 1 }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '15', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_16 urlFoto formato no válido', async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: 'ab', ruc: '1702365486001', urlFoto: 'http://' }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '16', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

  })

  describe('API_3 ACTUALIZAR', () => {
    const { API_3 } = API
    let { API_3_EQUI } = EQUI
    const codigoApi = 'API_3'

    // VALIDOS
    it(`@ICE_API_3_01 actualizar datos de empresa`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))
      req['nombre'] = 'Nombre cambiado'

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })

    // NO VALIDOS
    it(`@ICE_API_3_02 nombre no valido tipo de dato`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))
      req['nombre'] = 1

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    // nombres
    it(`@ICE_API_3_03 nombre no valido tamaño`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))
      req['nombre'] = ''

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    // actividadComercial
    it(`@ICE_API_3_04 actividadComercial no valido tipo de dato`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))
      req['actividadComercial'] = 1

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })


    it(`@ICE_API_3_05 actividadComercial no valido tamaño`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))
      req['actividadComercial'] = ''

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    // razonSocial
    it(`@ICE_API_3_06 razonSocial no valido tipo de dato`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))
      req['razonSocial'] = 1

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it(`@ICE_API_3_07 razonSocial no valido tamaño`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))
      req['razonSocial'] = ''

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    // empresasId
    it(`@ICE_API_3_08 empresasId no valido tipo de dato`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))

      let params = { empresasId: 'a' }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it(`@ICE_API_3_09 empresasId no valido tamaño`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))

      let params = { empresasId: 0 }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it(`@ICE_API_3_10 empresasId no existe`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))

      let params = { empresasId: 500 }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
      generatorDocs.ERROR({ nombre: 'El Id de la empresa no existe', docs, doc: API_3, res, req })
    })

    it(`@ICE_API_3_11 urlFoto tipo no válido`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto })
      let req = JSON.parse(JSON.stringify(empresa))
      req['urlFoto'] = 1

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })

    it(`@ICE_API_3_12 urlFoto formato no válido`, async () => {
      let { nombre, actividadComercial, razonSocial, urlFoto } = empresa
      let empresaCreada = await models.empresas.Crear({ nombre, actividadComercial, razonSocial, urlFoto: '' })
      let req = JSON.parse(JSON.stringify(empresa))
      req['urlFoto'] = 'http://'

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${empresaCreada['id']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })
  })

  describe('API_4 ELIMINAR', () => {
    const { API_4 } = API
    let { API_4_EQUI } = EQUI
    const codigoApi = 'API_4'

    it(`@ICE_${codigoApi}_1 eliminar una empresa`, async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_4, res })
    })

    it(`@ICE_${codigoApi}_2 empresasId no valido numero`, async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let params = { empresasId: 0 }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })

    it(`@ICE_${codigoApi}_3 empresasId no valido tipo de dato`, async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let params = { empresasId: 'a' }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })

    it(`@ICE_${codigoApi}_4 empresasId no existe`, async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let params = { empresasId: '500' }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
      generatorDocs.ERROR({ nombre: 'El Id de la empresa no existe', docs, doc: API_4, res })
    })
  })

  describe('API_5 OBTENER UNA', () => {
    const { API_5 } = API
    let { API_5_EQUI } = EQUI
    const codigoApi = 'API_5'

    it(`@ICE_${codigoApi}_1 Obtener empresa`, async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let establecimientoCreada = await models.establecimientos.Crear(establecimiento)
      let establecimientoCreada2 = await models.establecimientos.Crear(establecimiento2)
      establecimiento3['empresasId'] = 5
      let establecimientoCreada3 = await models.establecimientos.Crear(establecimiento3)

      let params = { empresasId: empresaCreada['id'] }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['id']).to.equal(1)
      expect(res.body.datos['establecimientos'].length).to.equal(2)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_5, res })
    })

    it(`@ICE_${codigoApi}_2 empresasId no valido numero`, async () => {
      let empresaCreada = await models.empresas.Crear(empresa)

      let params = { empresasId: 0 }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
    })

    it(`@ICE_${codigoApi}_3 empresasId no valido tipo de dato`, async () => {
      let empresaCreada = await models.empresas.Crear(empresa)

      let params = { empresasId: 'a' }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
    })

    it(`@ICE_${codigoApi}_4 empresas no existe`, async () => {
      let empresaCreada = await models.empresas.Crear(empresa)

      let params = { empresasId: 500 }
      let url = `/api/web/empresas/${params['empresasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
    })
  })
})
