module.exports = {
  API_1_EQUI: {
    nombre: 'Crear un accidente',
    codigo: 'API_1',
    descripcion: 'Crear un accidente',
    metodo: 'POST',
    url: '/api/web/accidentes',
    body: [
      { nombre: 'nombre',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'descripcion',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C13', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'heridos',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'number\', minimum: 0 }', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C23', descripcion: 'minimum: !0 ', valido: false }
        ]
      },
      { nombre: 'atendidoEnEmpresa',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'boolean\' }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'boolean\'', valido: false }
        ]
      },
      { nombre: 'muertos',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 0 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !0 ', valido: false }
        ]
      },
      { nombre: 'fecha',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'fecha\' }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'fecha\'', valido: false }
        ]
      },
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C61', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C62', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C63', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un accidente de forma correcta',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '2': {
        descripcion: 'nombre tipo no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C02' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '3': {
        descripcion: 'nombre tamano no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C03' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '4': {
        descripcion: 'descripcion tipo no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C12' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '5': {
        descripcion: 'descripcion tamano no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C13' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '6': {
        descripcion: 'heridos tipo no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C22' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '7': {
        descripcion: 'heridos tamano no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C23' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '8': {
        descripcion: 'atendidoEnEmpresa tipo no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C32' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '9': {
        descripcion: 'muertos tipo no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C42' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '10': {
        descripcion: 'muertos tamano no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C43' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '11': {
        descripcion: 'fecha no valido',
        url: '/api/web/accidentes',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C52' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '12': {
        descripcion: 'puestosId tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C62' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '13': {
        descripcion: 'puestosId tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C63' },
          'diasPerdidos': { codigo: 'C71' }
        }
      },
      '14': {
        descripcion: 'puestosId no existe',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C71' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Actualizar una accidente',
    codigo: 'API_2',
    descripcion: 'Actualizar un accidente',
    metodo: 'PUT',
    url: '/api/web/accidentes/:accidentesId',
    body: [
      { nombre: 'nombre',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'descripcion',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C13', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'heridos',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'number\', minimum: 0 }', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C23', descripcion: 'minimum: !0 ', valido: false }
        ]
      },
      { nombre: 'atendidoEnEmpresa',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'boolean\' }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'boolean\'', valido: false }
        ]
      },
      { nombre: 'muertos',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 0 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !0 ', valido: false }
        ]
      },
      { nombre: 'fecha',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'fecha\' }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'fecha\'', valido: false }
        ]
      },
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C61', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C62', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C63', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'accidentesId',
        casos: [
          { codigo: 'C71', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C72', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C73', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Actualizar un accidente de forma correcta',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '2': {
        descripcion: 'nombre tipo no valido',
        body: {
          'nombre': { codigo: 'C02' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '3': {
        descripcion: 'nombre tamano no valido',
        body: {
          'nombre': { codigo: 'C03' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '4': {
        descripcion: 'descripcion tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C12' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '5': {
        descripcion: 'descripcion tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C13' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '6': {
        descripcion: 'heridos tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C22' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '7': {
        descripcion: 'heridos tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C23' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '8': {
        descripcion: 'atendidoEnEmpresa tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C32' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '9': {
        descripcion: 'muertos tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C42' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '10': {
        descripcion: 'muertos tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C43' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '11': {
        descripcion: 'fecha no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C52' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '12': {
        descripcion: 'puestosId tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C62' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '13': {
        descripcion: 'puestosId tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C63' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '14': {
        descripcion: 'puestosId no existe',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      },
      '15': {
        descripcion: 'accidentesId tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C72' }
        }
      },
      '16': {
        descripcion: 'accidentesId tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C73' }
        }
      },
      '17': {
        descripcion: 'accidentesId no existe',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'heridos': { codigo: 'C21' },
          'atendidoEnEmpresa': { codigo: 'C31' },
          'muertos': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' },
          'diasPerdidos': { codigo: 'C81' }
        },
        params: {
          'accidentesId': { codigo: 'C71' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Eliminar un accidente',
    codigo: 'API_3',
    descripcion: 'Eliminar un accidente',
    metodo: 'DELETE',
    url: '/api/web/accidentes/:accidentesId',
    params: [
      { nombre: 'accidentesId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminar un accidente de forma correcta',
        params: {
          'accidentesId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'accidentesId no valido tipo de dato',
        params: {
          'accidentesId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'accidentesId  no valido numero',
        params: {
          'accidentesId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'accidentesId no exite',
        params: {
          'accidentesId': { codigo: 'C01' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Obtener un accidente',
    codigo: 'API_4',
    descripcion: 'Obtener un accidente',
    metodo: 'GET',
    url: '/api/web/accidentes/:accidentesId',
    params: [
      { nombre: 'accidentesId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener un accidente de forma correcta',
        params: {
          'accidentesId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'accidentesId no valido tipo de dato',
        params: {
          'accidentesId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'accidentesId  no valido numero',
        params: {
          'accidentesId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'accidentesId no exite',
        params: {
          'accidentesId': { codigo: 'C01' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'Obtener accidentes por establecimientos',
    codigo: 'API_5',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/accidentes/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener accidentes de forma correcta',
        params: {
          'establecimientosId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'establecimientosId no valido tipo de dato',
        params: {
          'establecimientosId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'establecimientosId  no valido numero',
        params: {
          'establecimientosId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'establecimientosId no exite',
        params: {
          'establecimientosId': { codigo: 'C01' }
        }
      }
    }
  },
  API_6_EQUI: {
    nombre: 'Obtener accidentes por area',
    codigo: 'API_6',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/accidentes/areas/:areasId',
    params: [
      { nombre: 'areasId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener un accidente de forma correcta',
        params: {
          'areasId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'areasId no valido tipo de dato',
        params: {
          'areasId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'areasId  no valido numero',
        params: {
          'areasId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'areasId no exite',
        params: {
          'areasId': { codigo: 'C01' }
        }
      }
    }
  },
  API_7_EQUI: {
    nombre: 'Obtener accidentes por puesto',
    codigo: 'API_7',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/accidentes/puestos/:puestosId',
    params: [
      { nombre: 'accidentesId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener un accidente de forma correcta',
        params: {
          'puestosId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'puestosId no valido tipo de dato',
        params: {
          'puestosId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'puestosId  no valido numero',
        params: {
          'puestosId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'puestosId no exite',
        params: {
          'puestosId': { codigo: 'C01' }
        }
      }
    }
  }
}
