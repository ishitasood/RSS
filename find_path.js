use RSS



var path=[]
var item = db.categoriesAAO.findOne({_id:"Mandal_225"})
item
path=item.ancestors;
path.join(' / ');