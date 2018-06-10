// https://github.com/marak/Faker.js/
const faker = require('faker')
const jsonfile = require('jsonfile')
const path = require('path')
faker.locale = 'es'
const conexion = require('../db')
const random = () => {
  var text = ''
  var possible = '0123456789' // ABCDEFGHIJKLMNOPQRSTUVWXYZ
  for (var i = 0; i < 10; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }
  return text
}

function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let areasDatos = [
  {
    'actividad': 'gerencia',
    'nombre': 'Gerente General'
  },
  {
    'actividad': 'recursos humanos',
    'nombre': 'Jefe TTHH'
  },
  {
    'actividad': 'subgerencia',
    'nombre': 'Subgerente'
  }
]

let puestosDatos = [
  {
    'nombre': 'Oficina de gerente general',
    'descripcion': ''
  },
  {
    'nombre': 'Oficina de jefe de TTHH',
    'descripcion': ''
  },
  {
    'nombre': 'Jefe de Matricería',
    'descripcion': ''
  },
  {
    'nombre': 'Maticero',
    'descripcion': ''
  },
  {
    'nombre': 'Jefe de Inyección',
    'descripcion': ''
  },
  {
    'nombre': 'Operador de máquina de inyección',
    'descripcion': ''
  }
]

let equiposDatos = [
  {
    'descripcion': '',
    'nombre': 'Extintor',
    'fotoUrl': 'http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg'
  },
  {
    'descripcion': 'Siempre usar',
    'nombre': 'Guantes',
    'fotoUrl': 'http://www.wermax.com.uy/wp-content/uploads/2015/03/Guantes.jpg'
  },
  {
    'descripcion': '',
    'nombre': 'Protector Ruido',
    'fotoUrl': 'https://thumbs.dreamstime.com/z/protectores-contra-el-ruido-20939463.jpg'
  }
]

const capacitacionesCantidad = 5
let prioridades = ['alta', 'media', 'baja']
let tiposRiesgos = ['tipoRiesgo', 'Caida de objetos']
let empresas = []
let personas = []
let establecimientos = []
let areas = []
let puestos = []
let riesgos = []
let capacitaciones = []
let inspecciones = []
let novedades = []
let accidentes = []
let equipos = []
conexion.Conectar().then(async (db) => {
  await conexion.Limpiar()
  // 1. empresas
  for (let i = 0; i < 5; i++) {
    let empresa = {
      nombre: faker.company.companyName(),
      actividadComercial: faker.company.catchPhrase(),
      razonSocial: '1235468789'
    }
    empresas.push(empresa)
    let empresaCreada = await db.empresas.Crear(empresa)
    let empresasId = empresaCreada['id']

    // 2. establecimientos
    for (let i = 0; i < 3; i++) {
      let establecimiento = {
        nombres: faker.company.companyName(),
        direccion: faker.address.streetAddress(),
        ruc: random(),
        empresasId
      }
      let establecimientoCreada = {}
      if (i === 0) {
        establecimiento['nombres'] = 'matriz'
        establecimientoCreada = await db.establecimientos.Crear(establecimiento)
      } else {
        establecimientoCreada = await db.establecimientos.Crear(establecimiento)
      }
      let establecimientosId = establecimientoCreada['id']
      establecimientos.push(establecimiento)

      // 3. personas
      for (let i = 0; i < 10; i++) {
        let persona = {
          nombres: faker.name.firstName(),
          apellidos: faker.name.lastName(),
          correo: faker.internet.email().toLowerCase(),
          cedula: random(),
          clave: faker.internet.password(),
          telefono: faker.phone.phoneNumber(),
          fechaNacimiento: `${faker.date.past()}`,
          perfilOcupacional: '',
          usuario: faker.internet.userName(),
          rol: ''
        }
        personas.push(persona)
        let personasCreada = await db.personas.Crear(persona)
        let personasId = personasCreada['id']
        // 4. personasEstablecimientos
        if (i === 1) {
          await db.personasEstablecimientos.Crear({
            personasId,
            establecimientosId,
            rol: 'inspector'
          })
        } else if (i === 2) {
          await db.personasEstablecimientos.Crear({
            personasId,
            establecimientosId,
            rol: 'jefe'
          })
        } else {
          await db.personasEstablecimientos.Crear({
            personasId,
            establecimientosId,
            rol: 'empleado'
          })
        }

        // 5. personasPuestos
        await db.personasPuestos.Crear({
          personasId,
          puestosId: randomIntFromInterval(1, puestosDatos.length - 1)
        })

        // 6. personasCapacitaciones
        await db.personasCapacitaciones.Crear({
          capacitacionesId: randomIntFromInterval(1, capacitacionesCantidad),
          personasId
        })
      }
      console.log('personas')
      // 7. areas
      for (let i = 0; i < areasDatos.length; i++) {
        let area = {
          actividad: areasDatos[i]['actividad'],
          nombre: areasDatos[i]['nombre'],
          fotoUrl: faker.image.imageUrl(),
          metrosCuadrados: '20x20',
          descripcionLugar: faker.lorem.sentence(),
          establecimientosId
        }
        areas.push(area)
        let areaCreada = await db.areas.Crear({
          ...area,
          establecimientosId
        })
        let areasId = areaCreada['id']

        // 8. capacitaciones
        for (let i = 0; i < capacitacionesCantidad; i++) {
          let capacitacion = {
            nombre: `${faker.name.firstName()} ${faker.name.lastName()}`,
            descripcion: faker.lorem.sentence(),
            tema: faker.lorem.words(),
            fechaCapacitacion: `${faker.date.past()}`,
            areasId
          }
          capacitaciones.push(capacitacion)
          await db.capacitaciones.Crear(capacitacion)
        }
        console.log('capacitaciones')

        // 9. puestos
        for (let i = 0; i < puestosDatos.length; i++) {
          let puesto = {
            nombre: puestosDatos[i]['nombre'],
            descripcion: puestosDatos[i]['descripcion']
          }
          puestos.push(puesto)
          let puestoCreada = await db.puestos.Crear(puesto)
          let puestosId = puestoCreada['id']
          // 10. areasPuestos
          await db.areasPuestos.Crear({
            areasId,
            puestosId
          })

          for (let i = 0; i < equiposDatos.length; i++) {
            let equipo = {
              nombre: equiposDatos[i]['nombre'],
              descripcion: equiposDatos[i]['descripcion'],
              fotoUrl: equiposDatos[i]['fotoUrl']
            }
            equipos.push(equipo)

            // 11. equipos
            let equipoCreada = await db.equipos.Crear(equipo)
            let equiposId = equipoCreada['id']

            // 12. equiposAreas
            await db.equiposAreas.Crear({
              cantidad: randomIntFromInterval(0, 10),
              equiposId,
              areasId
            })

            // 13. equiposPuestos
            await db.equiposPuestos.Crear({
              cantidad: randomIntFromInterval(0, 10),
              equiposId,
              puestosId
            })
          }
          // console.log('equipos')

          // 15. accidentes
          for (let i = 0; i < 10; i++) {
            let accidente = {
              descripcion: faker.lorem.sentence(),
              nombre: faker.lorem.words(),
              heridos: randomIntFromInterval(0, 2),
              atendidoEnEmpresa: false,
              muertos: randomIntFromInterval(0, 2),
              fecha: `${faker.date.past()}`,
              puestosId
            }
            accidentes.push(accidente)
            await db.accidentes.Crear(accidente)
          }
          // console.log('accidentes')

          // 18. riesgos
          for (let i = 0; i < 10; i++) {
            let riesgo = {
              tipoRiesgo: tiposRiesgos[randomIntFromInterval(0, tiposRiesgos.length - 1)],
              personasExpuestas: randomIntFromInterval(0, 2),
              valoracion: faker.lorem.words(),
              valoracionLiteral: faker.lorem.sentence(),
              fecha: `${faker.date.past()}`,
              porcentajeRiesgo: randomIntFromInterval(0, 99),
              puestosId
            }
            riesgos.push(riesgos)
            await db.riesgos.Crear(riesgo)
          }
          // console.log('riesgos')

          // 14. inspecciones
          for (let i = 0; i < 2; i++) {
            let inspeccion = {
              nombre: `${faker.name.firstName()} ${faker.name.lastName()}`,
              fechaInicio: faker.date.past(),
              tipoInspeccion: '',
              fechaFin: faker.date.recent()
            }
            inspecciones.push(inspeccion)
            let inspeccionCreada = await db.inspecciones.Crear(inspeccion)
            let inspeccionesId = inspeccionCreada['id']
            // 16. novedades
            for (let i = 0; i < 10; i++) {
              let novedad = {
                descripcion: faker.lorem.words(),
                // descripcionAtendida: faker.lorem.paragraph(),
                // nombre: faker.lorem.words(),
                // prioridad:  prioridades[randomIntFromInterval(0,2)],
                fecha: faker.date.past(),
                // fotoUrl: faker.image.imageUrl(),
                fueAtendida: false,
                puestosId,
                inspeccionesId
              }
              novedades.push(novedad)
              await db.novedades.Crear(novedad)
            }

            for (let i = 0; i < 10; i++) {
              let novedad = {
                descripcion: faker.lorem.words(),
                descripcionAtendida: faker.lorem.sentence(),
                // nombre: faker.lorem.words(),
                prioridad: prioridades[randomIntFromInterval(0, 2)],
                fecha: faker.date.past(),
                fotoUrl: faker.image.imageUrl(),
                fueAtendida: true,
                puestosId,
                inspeccionesId
              }
              novedades.push(novedad)
              await db.novedades.Crear(novedad)
            }
          }
          // console.log('inspecciones')
        }
      }
      console.log(`===== establecimiento ${i}`)
    }
    console.log(`xxxxxxxx empresa ${i} xxxxxxx`)
  }
  /*
  +++++++++++++
  SALIDA
  +++++++++++++
  */

  let tablas = [
    { nombre: 'empresas', data: empresas },
    { nombre: 'personas', data: personas },
    { nombre: 'establecimientos', data: establecimientos },
    { nombre: 'areas', data: areas },
    { nombre: 'puestos', data: puestos }
  ]
  // empresas
  // personas
  // establecimientos
  // areas
  // puestos
  // riesgos
  // capacitaciones
  // inspecciones
  // novedades
  // accidentes
  // equipos
  for (tabla of tablas) {
    jsonfile.writeFile(path.join(__dirname, `faker/${tabla['nombre']}.json`), tabla['data'], function (err) {
      console.error(err)
    })
  }

  await conexion.Desconectar()
}).catch((err) => {
  console.log(err)
})

// 18. controles
// let control = {

// }

// 19. matrices
// let matriz = {

// }
