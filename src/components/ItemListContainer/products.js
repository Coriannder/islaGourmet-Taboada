const Items = [
    {
        id: 1, 
        title: "Torta de mandarinas", 
        precio: 1800, 
        pictureUrl: "https://picsum.photos/id/1080/500/500",
        descripcion: "Bizcocho de mandarinas relleno de curd de naranja y mandarina, cubierto con frosting de queso, decorado con merenguitos caseros, mandarinas confitadas y almendras."
    },  
    {
        id: 3, 
        title: "Chocotorta bomba",  
        precio: 2200, 
        pictureUrl:"https://picsum.photos/id/1081/500/500",
        descripcion: "Bizcocho de chocolate super húmedo, relleno de frutos rojos con chantilly y crema de dulce de leche con pasta de maní y crocante de maní, cubierto con ganache de chocolate, decorado con crema, frutos rojos frescos y trufas de chocolate rellenas de frutos rojos."
    },
    {
        id: 4, 
        title: "Carrot cake", 
        precio: 1800,
        pictureUrl:"https://picsum.photos/id/900/500/500", 
        descripcion: "Pastel de zanahorias y almendras aromatizado con canela, vainilla, jengibre y nuez moscada, relleno y cubierto con frosting de queso, decorado con zanahoria cruda rallada y crocante de almendras."
    },
    {
        id: 5, 
        title: "Torta de frutilla y chocolate", 
        precio: 900,
        pictureUrl:"https://picsum.photos/id/25/500/500", 
        descripcion: "Masa sablée de chocolate, rellena de curd de naranja, cubierta con frutillas frescas, gajos de naranja a vivo y coco."
    },
    {
        id: 6, 
        title: "CheeseCake de arandanos",  
        precio: 1300,
        pictureUrl:"https://picsum.photos/id/2/500/500",
        descripcion: "Base de galletas de chocolate, con cheese cream de arándanos cubierta con compota de arándanos, almendras, gajos de naranja secos y quinotos.",
    },
    {
        id: 7,
        title: "Tarta de frutos rojos",  
        precio: 1300,
        pictureUrl:"https://picsum.photos/id/500/500/",
        descripcion: "Base de galletas de chocolate, con cheese cream de limón y cheese cream de frambuesa, cubierta de compota de frutos rojos y chocolate blanco."
    },
];

export const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Items);
    }, 2000);
});
