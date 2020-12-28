class AssetDictionary{

    name;
    contents;

    constructor(name){
        this.name = name;
        this.contents = [];
    }

    Add(id){
        //remove any leading/trailing whitespace and convert to lowercase just for uniformity
        id = GDString.TrimToLower(id);

        //look for the asset in the dictionary
        let index = this.contents.findIndex(asset => asset.id === id);
        
        //if not there then load and push it into array, otherwise throw exception
        if(index == -1){
            let htmlElement = document.getElementById(id);
            if(htmlElement)
                this.contents.push(htmlElement);
            else
                throw "Asset with id[" + id + "] nas not been loaded. Check if asset loaded in HTML file!";

        }
        else
            throw "Asset with id[" + id + "] is already in the dictionary!";
    }

    AddArray(idArray){
        for(let id of idArray){
            this.Add(id);
        }
    }

    Find(id){
        //remove any leading/trailing whitespace and convert to lowercase just for uniformity
        id = GDString.TrimToLower(id);

        return this.contents.find(asset => asset.id === id);
    }

    Remove(id){
        //remove any leading/trailing whitespace and convert to lowercase just for uniformity
        id = GDString.TrimToLower(id);

        //look for the asset in the dictionary
        let index = this.contents.findIndex(asset => asset.id === id);
         
        //if there then splice the array and return true
        if(index != -1){
            this.contents.splice(index, 1);
            return true;
        }
        else
            return false;
    }

    Size(){
        return this.contents.length;
    }

    Clear(){
        this.contents.splice(0, this.contents.length);
    }

    ToString(){
        let str = "";

        for(let asset of this.contents){
            str = str + asset.id + ",";
        }
        
        //remove the leftover "," at the end
        str = str.substr(0, str.length-1);

        return str;
    }


}