use RSS



print("inserting")
var ancestorpath = db.categoriesAAO.findOne({_id:'New_Delhi'}).ancestors;
ancestorpath.push('New_Delhi')
db.categoriesAAO.insert({_id:'Basti_7871', parent:'New_Delhi',ancestors:ancestorpath});


db.categoriesAAO.find({_id:'Basti_7871'})


print("updating/moving")

ancestorpath = db.categoriesAAO.findOne({_id:'Mandal_335'}).ancestors;
ancestorpath.push('Mandal_335')
db.categoriesAAO.update({_id:'Basti_7871'},{$set:{parent:'Mandal_335', ancestors:ancestorpath}});
//{ "_id" : "LG", "ancestors" : [ 	"Electronics", 	"Cell_Phones_and_Accessories", 	"Cell_Phones_and_Smartphones" ], "parent" : "Cell_Phones_and_Smartphones" }
db.categoriesAAO.find({_id:'Basti_7871'});


//removing node
db.categoriesAAO.remove({_id:'Basti_7771'});

//getting children
print ("getting children")
db.categoriesAAO.find({$query:{parent:'New_Delhi'}})