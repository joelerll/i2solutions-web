# Api Novedades

## Crear novedad

__POST__ __/api/web/novedades__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  descripcion  | string  |   minLength: 2   | 
|  prioridad  | string  |   'alta', 'media', 'baja'   | 
|  fotoUrl  | string  |   url   | 
|  fecha  | fecha  |   ---   | 
|  puestosId  | Number  |   ---   | 

#### Response:

```json
{
  "estado": true,
  "datos": {
    "fecha": "2011-10-01T05:00:00.000Z",
    "fotoUrl": "",
    "fueAtendida": false,
    "id": 1,
    "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
    "prioridad": "media",
    "puestosId": 1,
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar novedad

__PUT__ __/api/web/novedades/:novedadesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| novedadesId | Number |   ---   |
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  descripcion  | string  |   minLength: 2   | 
|  prioridad  | string  |   'alta', 'media', 'baja'   | 
|  fotoUrl  | string  |   url   | 
|  fecha  | fecha  |   ---   | 
|  puestosId  | Number  |   ---   | 

#### Request:

```json
{
  "descripcion": "aa",
  "prioridad": "media",
  "fecha": "2014-05-21T19:27:28.576Z",
  "fotoUrl": "https://imagen.png",
  "puestosId": 1
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


___



## Eliminar novedad

__DELETE__ __/api/web/novedades/:novedadesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| novedadesId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


___



## Obtener un novedad

__GET__ __/api/web/novedades/:novedadesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| novedadesId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
    "descripcionAtendida": null,
    "prioridad": "media",
    "fecha": "2011-10-01 05:00:00.000 +00:00",
    "fotoUrl": "https://imagen.png",
    "fueAtendida": "0",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "puestosId": 1,
    "inspeccionesId": null
  },
  "codigoEstado": 200
}
```


___



## Obtener novedades por establecimiento

__GET__ __/api/web/novedades/establecimientos/:establecimientosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| establecimientosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1,
        "areasId": 1,
        "areasActividad": "gerencia",
        "areasNombre": "Gerente General",
        "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
        "puestosNombre": "Oficina de gerente general"
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1,
        "areasId": 1,
        "areasActividad": "gerencia",
        "areasNombre": "Gerente General",
        "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
        "puestosNombre": "Oficina de gerente general"
      }
    ]
  },
  "codigoEstado": 200
}
```


___



## Obtener novedades por area

__GET__ __/api/web/novedades/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1,
        "puestosNombre": "Oficina de gerente general"
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1,
        "puestosNombre": "Oficina de gerente general"
      }
    ]
  },
  "codigoEstado": 200
}
```


___



## Obtener novedades por puesto

__GET__ __/api/web/novedades/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1
      }
    ]
  },
  "codigoEstado": 200
}
```


___



