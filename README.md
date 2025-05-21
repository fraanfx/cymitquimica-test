# Cymit Frontend Test (React)

Gracias por participar en nuestro proceso de selección ✨

## 🧪 Objetivo

Crear una SPA en React que muestre productos con búsqueda y detalle. El diseño debe ser responsive y usable.

Para obtener los datos de los productos deberás consumir la API pública disponible en [https://dummyjson.com/products](https://dummyjson.com/products). Esta API proporciona un listado de productos con propiedades como nombre, precio, categoría, descripción e imagen. Deberás utilizar estos datos para construir tanto la pantalla de listado como la pantalla de detalle de producto.

## 🖼️ Funcionalidades implementadas

- ✅ Pantalla principal con lista de productos
- ✅ Búsqueda por nombre de producto
- ✅ Filtro por categoría
- ✅ Página de detalle para cada producto (`/product/:id`)
- ✅ Diseño responsive y accesible
- ✅ Manejo de carga, errores y estados vacíos

## 🧱 Stack técnico

- React (con Vite)
- React Router DOM
- Fetch API
- Node.js 22
- CSS BlockElementModifier
- API: [https://dummyjson.com/products](https://dummyjson.com/products)


## 🗂️ Estructura del proyecto
````
src/
├── components/ # Componentes reutilizables (ProductCard, Breadcrumb, etc.)
├── layouts/ # Template que se aplica a todas las vistas
├── pages/ # Vistas principales (HomePage, ProductPage)
├── utils/ # Hooks personalizados (useFetchAllProducts, useFetchIdProduct...)
├── utils/ # Helpers y utilidades varias
├── styles/ # Estilos globales
├── App.jsx # Rutas principales
└── main.jsx # Punto de entrada
````



## 🚀 Cómo ejecutar el proyecto

```bash
# Levantar el entorno con Docker
docker compose up -d

# Acceder al contenedor
docker exec -it app bash

# Dentro del contenedor
npm install
npm run dev
```
La aplicación estará disponible en: http://localhost:8010

## 🧠 Decisiones técnicas
- Separación de lógica por hooks - personalizados para mantener la vista limpia.

- React Router para la navegación entre listado y detalle, así como para el uso de rutas dinámicas con **useParams**.

- Manejo de estados de carga y error para mejorar la UX.

- Diseño responsive y minimalista para facilitar su uso en dispositivos móviles.

- Uso de efectos secundarios controlados con **useEffect** para evitar renders innecesarios.

- Uso de **useImperativeHandle** para exponer comportamiento desde componentes hijos al padre sin necesidad de una librería de estado global como Redux o Zustand. Esto permite encapsular lógica interna y mantener una arquitectura más simple.

- Uso de hoja de estilos global con convención BEM: Al tratarse de un proyecto pequeño, se optó por una solución simple sin introducir CSS Modules ni librerías como Tailwind. Esto permite mantener claridad y evitar sobreingeniería, sin comprometer la organización del código.

