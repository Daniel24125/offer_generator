const Excel = require('exceljs');
const template = require("./templates")
module.exports = {
    readExcelBuffer: async buffer =>{
        const tempalteCollection = []
        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(buffer);
        
        workbook.worksheets[0].eachRow({ includeEmpty: false },row=>{
            const [_, position, city, time, image] = row.values
            tempalteCollection.push(template.original(position, city, time, image))
        })
        return tempalteCollection
    }    
}