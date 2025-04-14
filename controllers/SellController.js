const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    SellController:{
        create: async (req, res) => {
            try{
                const serial = req.body.serial;
                const product = await prisma.product.findFirst({
                    where: { serial: serial }
                });
                if(!product){
                    return res.status(400).json({ message: "Product not found" });
                }
                await prisma.sell.create({
                    data: {
                        productId: product.id,
                        price: req.body.price,
                        payDate: new Date()
                    }
                });
                res.json({message: "success"});
            }catch{
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }
}