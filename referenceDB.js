use RSS;
db.categoriesAAO.insert({_id:"New_Delhi",ancestors:[], parent:null});

db.categoriesAAO.insert({_id:"Vibhaag_1",ancestors:["New_Delhi"],parent:"New_Delhi"});
db.categoriesAAO.insert({_id:"Vibhaag_2",ancestors:["New_Delhi"],parent:"New_Delhi"});
db.categoriesAAO.insert({_id:"Vibhaag_3",ancestors:["New_Delhi"],parent:"New_Delhi"});
db.categoriesAAO.insert({_id:"Vibhaag_4",ancestors:["New_Delhi"],parent:"New_Delhi"});


db.categoriesAAO.insert({_id:"Zila_5",ancestors:["New_Delhi","Vibhaag_1"],parent:"Vibhaag_1"});
db.categoriesAAO.insert({_id:"Zila_6",ancestors:["New_Delhi","Vibhaag_1"],parent:"Vibhaag_1"});

db.categoriesAAO.insert({_id:"Zila_11",ancestors:["New_Delhi","Vibhaag_2"],parent:"Vibhaag_2"});
db.categoriesAAO.insert({_id:"Zila_15",ancestors:["New_Delhi","Vibhaag_2"],parent:"Vibhaag_2"});
db.categoriesAAO.insert({_id:"Zila_16",ancestors:["New_Delhi","Vibhaag_2"],parent:"Vibhaag_2"});

db.categoriesAAO.insert({_id:"Zila_21",ancestors:["New_Delhi","Vibhaag_3"],parent:"Vibhaag_3"});
db.categoriesAAO.insert({_id:"Zila_22",ancestors:["New_Delhi","Vibhaag_3"],parent:"Vibhaag_3"});
db.categoriesAAO.insert({_id:"Zila_23",ancestors:["New_Delhi","Vibhaag_3"],parent:"Vibhaag_3"});
db.categoriesAAO.insert({_id:"Zila_24",ancestors:["New_Delhi","Vibhaag_3"],parent:"Vibhaag_3"});

db.categoriesAAO.insert({_id:"Zila_31",ancestors:["New_Delhi","Vibhaag_4"],parent:"Vibhaag_4"});
db.categoriesAAO.insert({_id:"Zila_32",ancestors:["New_Delhi","Vibhaag_4"],parent:"Vibhaag_4"});
db.categoriesAAO.insert({_id:"Zila_33",ancestors:["New_Delhi","Vibhaag_4"],parent:"Vibhaag_4"});

db.categoriesAAO.insert({_id:"Nagar_1",ancestors:["New_Delhi","Vibhaag_1","Zila_5"],parent:"Zila_5"});
db.categoriesAAO.insert({_id:"Nagar_2",ancestors:["New_Delhi","Vibhaag_1","Zila_5"],parent:"Zila_5"});

db.categoriesAAO.insert({_id:"Nagar_3",ancestors:["New_Delhi","Vibhaag_1","Zila_6"],parent:"Zila_6"});
db.categoriesAAO.insert({_id:"Nagar_5",ancestors:["New_Delhi","Vibhaag_1","Zila_6"],parent:"Zila_6"});

db.categoriesAAO.insert({_id:"Nagar_11",ancestors:["New_Delhi","Vibhaag_2","Zila_11"],parent:"Zila_11"});
db.categoriesAAO.insert({_id:"Nagar_12",ancestors:["New_Delhi","Vibhaag_2","Zila_11"],parent:"Zila_11"});

db.categoriesAAO.insert({_id:"Nagar_13",ancestors:["New_Delhi","Vibhaag_2","Zila_15"],parent:"Zila_15"});

db.categoriesAAO.insert({_id:"Nagar_14",ancestors:["New_Delhi","Vibhaag_2","Zila_16"],parent:"Zila_16"});

db.categoriesAAO.insert({_id:"Nagar_21",ancestors:["New_Delhi","Vibhaag_3","Zila_21"],parent:"Zila_21"});
db.categoriesAAO.insert({_id:"Nagar_22",ancestors:["New_Delhi","Vibhaag_3","Zila_21"],parent:"Zila_21"});

db.categoriesAAO.insert({_id:"Nagar_23",ancestors:["New_Delhi","Vibhaag_3","Zila_22"],parent:"Zila_22"});
db.categoriesAAO.insert({_id:"Nagar_24",ancestors:["New_Delhi","Vibhaag_3","Zila_23"],parent:"Zila_23"});

db.categoriesAAO.insert({_id:"Nagar_25",ancestors:["New_Delhi","Vibhaag_3","Zila_24"],parent:"Zila_24"});

db.categoriesAAO.insert({_id:"Nagar_31",ancestors:["New_Delhi","Vibhaag_4","Zila_31"],parent:"Zila_31"});

db.categoriesAAO.insert({_id:"Nagar_32",ancestors:["New_Delhi","Vibhaag_4","Zila_32"],parent:"Zila_32"});
db.categoriesAAO.insert({_id:"Nagar_33",ancestors:["New_Delhi","Vibhaag_4","Zila_32"],parent:"Zila_32"});

db.categoriesAAO.insert({_id:"Nagar_34",ancestors:["New_Delhi","Vibhaag_4","Zila_33"],parent:"Zila_33"});
db.categoriesAAO.insert({_id:"Nagar_35",ancestors:["New_Delhi","Vibhaag_4","Zila_33"],parent:"Zila_33"});

db.categoriesAAO.insert({_id:"Mandal_1",ancestors:["New_Delhi","Vibhaag_1","Zila_5","Nagar_1"],parent:"Nagar_1"});
db.categoriesAAO.insert({_id:"Mandal_2",ancestors:["New_Delhi","Vibhaag_1","Zila_5","Nagar_2"],parent:"Nagar_2"});
db.categoriesAAO.insert({_id:"Mandal_3",ancestors:["New_Delhi","Vibhaag_1","Zila_6","Nagar_3"],parent:"Nagar_3"});
db.categoriesAAO.insert({_id:"Mandal_4",ancestors:["New_Delhi","Vibhaag_1","Zila_6","Nagar_3"],parent:"Nagar_3"});
db.categoriesAAO.insert({_id:"Mandal_5",ancestors:["New_Delhi","Vibhaag_1","Zila_6","Nagar_5"],parent:"Nagar_5"});

db.categoriesAAO.insert({_id:"Mandal_111",ancestors:["New_Delhi","Vibhaag_2","Zila_11","Nagar_11"],parent:"Nagar_11"});
db.categoriesAAO.insert({_id:"Mandal_112",ancestors:["New_Delhi","Vibhaag_2","Zila_11","Nagar_12"],parent:"Nagar_12"});
db.categoriesAAO.insert({_id:"Mandal_113",ancestors:["New_Delhi","Vibhaag_2","Zila_15","Nagar_13"],parent:"Nagar_13"});
db.categoriesAAO.insert({_id:"Mandal_114",ancestors:["New_Delhi","Vibhaag_2","Zila_15","Nagar_13"],parent:"Nagar_13"});
db.categoriesAAO.insert({_id:"Mandal_115",ancestors:["New_Delhi","Vibhaag_2","Zila_16","Nagar_14"],parent:"Nagar_14"});

db.categoriesAAO.insert({_id:"Mandal_221",ancestors:["New_Delhi","Vibhaag_3","Zila_21","Nagar_21"],parent:"Nagar_21"});
db.categoriesAAO.insert({_id:"Mandal_222",ancestors:["New_Delhi","Vibhaag_3","Zila_21","Nagar_22"],parent:"Nagar_22"});
db.categoriesAAO.insert({_id:"Mandal_223",ancestors:["New_Delhi","Vibhaag_3","Zila_22","Nagar_23"],parent:"Nagar_23"});
db.categoriesAAO.insert({_id:"Mandal_224",ancestors:["New_Delhi","Vibhaag_3","Zila_23","Nagar_24"],parent:"Nagar_24"});
db.categoriesAAO.insert({_id:"Mandal_225",ancestors:["New_Delhi","Vibhaag_3","Zila_24","Nagar_25"],parent:"Nagar_25"});

db.categoriesAAO.insert({_id:"Mandal_331",ancestors:["New_Delhi","Vibhaag_4","Zila_31","Nagar_31"],parent:"Nagar_31"});
db.categoriesAAO.insert({_id:"Mandal_332",ancestors:["New_Delhi","Vibhaag_4","Zila_31","Nagar_32"],parent:"Nagar_32"});
db.categoriesAAO.insert({_id:"Mandal_333",ancestors:["New_Delhi","Vibhaag_4","Zila_31","Nagar_33"],parent:"Nagar_33"});
db.categoriesAAO.insert({_id:"Mandal_334",ancestors:["New_Delhi","Vibhaag_4","Zila_32","Nagar_34"],parent:"Nagar_34"});
db.categoriesAAO.insert({_id:"Mandal_335",ancestors:["New_Delhi","Vibhaag_4","Zila_33","Nagar_35"],parent:"Nagar_35"});

db.categoriesAAO.insert({_id:"Basti_1",ancestors:["New_Delhi","Vibhaag_1","Zila_5","Nagar_1","Mandal_1"],parent:"Mandal_1"});
db.categoriesAAO.insert({_id:"Basti_2",ancestors:["New_Delhi","Vibhaag_1","Zila_5","Nagar_2","Mandal_2"],parent:"Mandal_2"});
db.categoriesAAO.insert({_id:"Basti_3",ancestors:["New_Delhi","Vibhaag_1","Zila_5","Nagar_2","Mandal_2"],parent:"Mandal_2"});
db.categoriesAAO.insert({_id:"Basti_4",ancestors:["New_Delhi","Vibhaag_1","Zila_6","Nagar_3","Mandal_3"],parent:"Mandal_3"});
db.categoriesAAO.insert({_id:"Basti_5",ancestors:["New_Delhi","Vibhaag_1","Zila_6","Nagar_3","Mandal_4"],parent:"Mandal_4"});
db.categoriesAAO.insert({_id:"Basti_6",ancestors:["New_Delhi","Vibhaag_1","Zila_6","Nagar_5","Mandal_5"],parent:"Mandal_5"});

db.categoriesAAO.insert({_id:"Basti_1111",ancestors:["New_Delhi","Vibhaag_2","Zila_11","Nagar_11","Mandal_111"],parent:"Mandal_111"});
db.categoriesAAO.insert({_id:"Basti_1112",ancestors:["New_Delhi","Vibhaag_2","Zila_11","Nagar_12","Mandal_112"],parent:"Mandal_112"});
db.categoriesAAO.insert({_id:"Basti_1113",ancestors:["New_Delhi","Vibhaag_2","Zila_15","Nagar_13","Mandal_113"],parent:"Mandal_113"});
db.categoriesAAO.insert({_id:"Basti_1114",ancestors:["New_Delhi","Vibhaag_2","Zila_16","Nagar_14","Mandal_115"],parent:"Mandal_115"});
db.categoriesAAO.insert({_id:"Basti_1115",ancestors:["New_Delhi","Vibhaag_2","Zila_16","Nagar_14","Mandal_115"],parent:"Mandal_115"});
db.categoriesAAO.insert({_id:"Basti_1116",ancestors:["New_Delhi","Vibhaag_2","Zila_16","Nagar_14","Mandal_115"],parent:"Mandal_115"});

db.categoriesAAO.insert({_id:"Basti_3331",ancestors:["New_Delhi","Vibhaag_3","Zila_21","Nagar_21","Mandal_221"],parent:"Mandal_111"});
db.categoriesAAO.insert({_id:"Basti_3332",ancestors:["New_Delhi","Vibhaag_3","Zila_22","Nagar_23","Mandal_223"],parent:"Mandal_223"});
db.categoriesAAO.insert({_id:"Basti_3333",ancestors:["New_Delhi","Vibhaag_3","Zila_23","Nagar_24","Mandal_224"],parent:"Mandal_224"});
db.categoriesAAO.insert({_id:"Basti_3334",ancestors:["New_Delhi","Vibhaag_3","Zila_24","Nagar_25","Mandal_225"],parent:"Mandal_225"});
db.categoriesAAO.insert({_id:"Basti_3335",ancestors:["New_Delhi","Vibhaag_3","Zila_24","Nagar_25","Mandal_225"],parent:"Mandal_225"});

db.categoriesAAO.insert({_id:"Basti_4441",ancestors:["New_Delhi","Vibhaag_4","Zila_31","Nagar_31","Mandal_331"],parent:"Mandal_111"});
db.categoriesAAO.insert({_id:"Basti_4442",ancestors:["New_Delhi","Vibhaag_4","Zila_31","Nagar_33","Mandal_333"],parent:"Mandal_333"});
db.categoriesAAO.insert({_id:"Basti_4443",ancestors:["New_Delhi","Vibhaag_4","Zila_32","Nagar_34","Mandal_334"],parent:"Mandal_334"});
db.categoriesAAO.insert({_id:"Basti_4444",ancestors:["New_Delhi","Vibhaag_4","Zila_33","Nagar_35","Mandal_335"],parent:"Mandal_335"});
db.categoriesAAO.insert({_id:"Basti_4445",ancestors:["New_Delhi","Vibhaag_4","Zila_33","Nagar_35","Mandal_335"],parent:"Mandal_335"});


