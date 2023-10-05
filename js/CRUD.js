export class CRUD {
tableName = null;
data = null;

constructor(tableName = undefined){
    this.setTableName(tableName);
    this.setData();
    }

    setTableName(tableName) {
        this.tableNameValidate(tableName);
        this.tableName = tableName;
    }

    setData() {
        let dataRepocitory = this.get(this.tableName);  
        this.data = dataRepocitory === null ? [] : dataRepocitory;
    }
    
    tableNameValidate(tableName){
        if(tableName === undefined) throw new Error("Table name required");
    }

    save(){
        let dataToSave = JSON.stringify(this.data);
        sessionStorage.setItem(this.tableName, dataToSave);
    }

    get(key){
        let data = sessionStorage.getItem(key);
        return JSON.parse(data);
    }

    existsElementWithId(id) {
        return this.data[id] === undefined ? false : true;
    }

    checkThatElementExistWithId(id) {
        if (!this.existELmentWithId(id))
        throw new error("This element not exist");
    }

    create(data){
        this.data.push(data);
        this.save();
        return this.data.length;    
    }       

	read(id){
        this.checkThatElementExistWithId(id);
        return this.data[id];
    }

    readALL(){
        return this.data;
    }

	update(id, data){
        this.checkThatElementExistWithId(id);
        this.data[id] = data;
        this.save();
        return true;
    }

	delete(id){
        this.checkThatElementExistWithId(id);
        this.data.splice(id, 1);
        this.save();
        return true
    }
}