# Pablo-Cesan

# Sistema de Control de Tráfico Aéreo ✈️

Este proyecto es un backend en Node.js que simula una torre de control de vuelos. Recibe coordenadas de aeronaves y emite alertas si hay riesgo de colisión.

## Instalacion

1. Clonar el repositorio:
    git clone https://github.com/PabloDCesan/control-aereo.git
    cd control-aereo
2. Instalar dependencias:
    npm install
3. Iniciar server:
    npm start
El servidor va a estar escuchando en: http://localhost:8080

## Endpoints

POST /api/aeronaves
    Ingresa o actualiza la posición de una aeronave.
    Retorna éxito, o un mensaje de "PELIGRO DE COLISION" si hay riesgo.

GET /api/aeronaves
    Retorna la lista de todas las aeronaves activas y sus posiciones.

## Arquitectura
    router/: Rutas REST
    controlador/: Lógica HTTP
    servicio/: Validación y negocio
    model/DAO/: DAO en memoria
    factory/: Generador de instancias

## Persistencia

Los datos se almacenan en memoria del servidor

## Tecnologías
    Node.js
    Express
    ESModules (import/export)

## Pruebas en Postman
    1 Ingresar vuelo valido
    2 Enviar vuelo con ID invalido
    3 Enviar vuelo con coordenadas invalidas
    4 Ingresar un vuelo cercano a otro (colision)
    5 Actualizar vuelo existente ( se reenvió el ID AAA111 con nuevas coordenadas)
    6 Obtener lista de todas las aeronaves

    Fotos de las pruebas en sub carpeta POSTMAN