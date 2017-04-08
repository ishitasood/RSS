use RSS

var descendants=[]

var ancestors = db.categoriesAAO.find({ancestors:"Vibhaag_1"},{_id:1});
while(true === ancestors.hasNext()) {
       var elem = ancestors.next();
       descendants.push(elem._id);
   }
descendants.join(",")


