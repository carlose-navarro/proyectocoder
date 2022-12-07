const products = [
    {
        id: '1',
        category: 'mujer',
        title: 'Calza',
        description:'Calza para Mujer',
        price: '10.000$',
        stock: '0',
        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/144/702/products/calza-fit-verde-21-82c4babf5644aa468615791001659761-1024-1024.jpg'
    },
    {
        id: '2',
        category: 'mujer',
        title: 'Remera',
        description:'Remera de Argentina - Mujer',
        price: '10.000$',
        stock: '10',
        pictureUrl: 'https://gauchofood.com/wp-content/uploads/2022/09/Camiseta-titular-Argentina-22-Mujer-1.webp'
    },
    {
        id: '3',
        category: 'mujer',
        title: 'Buzo',
        description:'Buzo para Mujer',
        price: '10.000$',
        stock: '10',
        pictureUrl: 'https://www.newbalance.com.ar/media/catalog/product/b/u/buzo-medio-cierre-new-balance-mujer-running-impact-half-zip-wt71213bes_nb_40_i.jpg'
    },
    {
        id: '4',
        category: 'mujer',
        title: 'Musculosa',
        description:'Musculosa para Mujer',
        price: '10.000$',
        stock: '10',
        pictureUrl: 'https://borabikes.com.ar/63774-large_default/remera-musculosa-deportiva-mujer-fox-flex-air-drytech-bora.jpg'
    },
    {
        id: '5',
        category: 'hombre',
        title: 'Calza',
        description:'Calza para hombre ',
        price: '10.000$',
        stock: '2',
        pictureUrl: 'https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/a/calza-hombre-new-balance-challenge-3-4-tight-mp73029bk.jpg'
    },
    {
        id: '6',
        category: 'hombre',
        title: 'Remera',
        description:'Remera de Argentina - Hombre',
        price: '10.000$',
        stock: '2',
        pictureUrl: 'https://sporting.vtexassets.com/arquivos/ids/558996/6HB9215-000-1.jpg?v=637929014321800000'
    },
    {
        id: '6',
        category: 'hombre',
        title: 'Buzo',
        description:'Buzo para Hombre',
        price: '10.000$',
        stock: '2',
        pictureUrl: 'https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/t/mt53030aoh_nb_40_i.jpg'
    }
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(products)
        },500)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(products.find(product => product.id === id))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(products.filter(product => product.category === categoryId))
        },500)
    })
}