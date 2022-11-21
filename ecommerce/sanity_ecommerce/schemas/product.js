export default {
  // Schema de Sanity
  name: "product",
  title: "product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Imagen",
      type: "array",
      of: [{ type: "image" }],
      operations: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
    },
    {
      name: "details",
      title: "Detalles",
      type: "string",
    },
  ],
};
