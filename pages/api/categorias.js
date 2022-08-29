import { PrismaClient } from "@prisma/client"


export default async function handler(req, res) {
  const prisma = new PrismaClient
  
  const categorias = await prisma.categoria.findMany({
    include: { //Utilizando eager loading para mostrar todos los datos en un endpoint
      productos: true,
    }
  })

  res.status(200).json(categorias)
}
