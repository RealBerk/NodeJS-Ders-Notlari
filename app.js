/* URL Method */
const url = require('url');
let adres = url.parse('https://www.btkakademi.gov.tr/',true);
console.log(adres.hostname);


/* FileSystem Method */
const fs = require('fs');

/* Klasör Okuma */
const file = fs.readdir('./',(hata, veri)=>{
    if(hata)
    {
        console.log('HATA OLUŞTU!');
    }else 
    {
        console.log(veri);
    }
})

/* Dosya Okuma */
const fileR = fs.readFile('./fs.json','utf8',(hata,veri)=>{
    if(hata)
    {
        console.log('hata var');
    }else 
    {
        console.log(veri);
    }
});

/* Dosya içeriğini silmeden ekleme */
fs.appendFile('./fs.txt','\ndeneme',(hata)=>{

})

/* Dosya Silme */
fs.unlink('fs.json', (hata) => {

});

/* Dosya Adı Değiştirme */
fs.rename('fs.txt','fs2.txt', (hata) => {
    
})