# Api Empresas

## Obtener todas las empresas

__GET__ __/api/web/empresas__

Obtener todas las empresas de i2Solutions
#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombre": "Zapata S.A.",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "razonSocial": "La casa",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00"
    }
  ],
  "codigoEstado": 200
}
```


___



## Crear empresas

__POST__ __/api/web/empresas__

Crear una empresa, esto tambien deberia crear un establecimiento por defecto
#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombre  | string  |   ---   | 
|  actividadComercial  | string  |   ---   | 
|  razonSocial  | string  |   ---   | 
|  direccion  | string  |   ---   | 
|  urlFoto  | string  |   url   | 
|  ruc  | string  |   ruc formato   | 

#### Request:

```json
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
  "direccion": "Plaza Mayor",
  "ruc": "1702365486001"
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Zapata S.A.",
    "actividadComercial": "Integrado sensible al contexto sistema abierto",
    "razonSocial": "La casa",
    "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z",
    "establecimiento": {
      "id": 1,
      "nombres": "matriz",
      "direccion": "Plaza Mayor",
      "ruc": "1702365486001",
      "empresasId": 1,
      "fechaActualizacion": "2011-10-01T05:00:00.000Z",
      "fechaCreacion": "2011-10-01T05:00:00.000Z"
    }
  },
  "codigoEstado": 200
}
```


___



## Actualizar Empresa

__PUT__ __/api/web/empresas/:empresasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| empresasId | Number |   ---   |
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombre  | string  |   ---   | 
|  actividadComercial  | string  |   ---   | 
|  razonSocial  | string  |   ---   | 
|  urlFoto  | string  |   url   | 

#### Request:

```json
{
  "nombre": "Nombre cambiado",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```

#### ERRORS:
__El Id de la empresa no existe__




_request_

```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

_response_

```js
{
  "estado": false,
  "datos": "La empresa con ese id no existe",
  "codigoEstado": 200
}
```
	
	


___



## Eliminar Empresa

__DELETE__ __/api/web/empresas/:empresasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| empresasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```

#### ERRORS:
__El Id de la empresa no existe__




_response_

```js
{
  "estado": false,
  "datos": "empresa con es id no existe",
  "codigoEstado": 200
}
```
	
	


___



## Obtener una empresa

__GET__ __/api/web/empresas/:empresasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| empresasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Zapata S.A.",
    "actividadComercial": "Integrado sensible al contexto sistema abierto",
    "razonSocial": "La casa",
    "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "establecimientos": [
      {
        "id": 1,
        "nombres": "matriz",
        "direccion": "22050 Felipe Rampa",
        "ruc": "0923651688001",
        "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
        "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
        "empresasId": 1
      },
      {
        "id": 2,
        "nombres": "Lira - Barajas",
        "direccion": "0119 Laboy Mercado",
        "ruc": "2023651688001",
        "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
        "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
        "empresasId": 1
      }
    ]
  },
  "codigoEstado": 200
}
```


___



## Obtener una empresa con datos para front

__GET__ __/api/web/administrador/empresas__


#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombre": "Zapata S.A.",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "tieneNovedades": true
    },
    {
      "id": 2,
      "nombre": "Quintanilla, Roldán and Mena",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Descentralizado sensible al contexto acceso",
      "tieneNovedades": false
    },
    {
      "id": 3,
      "nombre": "Zapata S.A.",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "tieneNovedades": false
    }
  ],
  "codigoEstado": 200
}
```


___



