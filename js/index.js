var pizza =[{name: "Meat",
              id: "Meat-data",
              sizes:[{name:"small",price:300},{name:"medium",price:600},{name:"large",price:1000}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozzarella",price:100},{name:"onions",price:50}]},
              
              {name: "Hawaiian",
              id: "Hawaiian-data",
              sizes:[{name:"small",price:400},{name:"medium",price:600},{name:"large",price:1200}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozzarella",price:100},{name:"onions",price:50}]},
              
              {name: "Buffalo",
              id: "Buffalo-data",
              sizes:[{name:"small",price:500},{name:"medium",price:800},{name:"large",price:1500}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozzarella",price:100},{name:"onions",price:50}]},
              
              {name: "Margherita",
              id: "Margherita-data",
              sizes:[{name:"small",price:600},{name:"medium",price:800},{name:"large",price:1700}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozzarella",price:100},{name:"onions",price:50}]},
              
              {name: "Pepperoni",
              id: "Pepperoni-data",
              sizes:[{name:"small",price:400},{name:"medium",price:1000},{name:"large",price:1500}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozzarella",price:100},{name:"onions",price:50}]},
              
              {name: "Supreme",
              id: "Supreme-data",
              sizes:[{name:"small",price:500},{name:"medium",price:800},{name:"large",price:1500}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozzarella",price:100},{name:"onions",price:50}]},
              
              {name: "Works",
              id: "Works-data",
              sizes:[{name:"small",price:600},{name:"medium",price:900},{name:"large",price:1500}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozzarella",price:100},{name:"onions",price:50}]},

              {name: "Vegetable",
              id: "Vegetable-data",
              sizes:[{name:"small",price:400},{name:"medium",price:600},{name:"large",price:1100}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozarrella",price:100},{name:"onions",price:50}]},

              {name: "BBQ",
              id: "BBQ-data",
              sizes:[{name:"small",price:500},{name:"medium",price:700},{name:"large",price:1400}],
              crusts:[{name:"crispy",price:60},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"cheese",price:90},{name:"Mozzarella",price:100},{name:"onions",price:50}]},
            ];


function pizzas(name,size,crust,toppings,total){
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}



$(document).ready(function(){
    var total = 0;
    var sizeInput = 0;
    var crustInput=0
    var toppingInput = 0;
    var netTotal = 0;
    pizza.forEach(function(pizza){
        $("button").click(function(){
            if(this.id === pizza.id){
                $("#orderName").text(pizza.name);

                var pizzaSize = "";
                var pizzaCrust = "";
                var pizzaToppings = "";

                $("#orderDetails").click(function() {
                    pizza.sizes.forEach(function(size){
                        var isChecked = $("#"+size.name).is(':checked');
                        if(isChecked){
                            $("#"+size.name+"-"+"price").text(size.price);
                            sizeInput = size.price;
                            pizzaSize = size.name;
                        }
                        else{
                            $("#"+size.name+"-"+"price").text("")
                        }
                    });
                    pizza.crusts.forEach(function(crust){
                        var isChecked = $("#"+crust.name).is(':checked');
                        if(isChecked){
                            $("#"+crust.name+"-"+"price").text(crust.price);
                            crustInput = crust.price;
                            pizzaCrust = crust.name;
                        }
                        else{
                            $("#"+crust.name+"-"+"price").text("")
                        }
                    });
                    pizza.toppings.forEach(function(topping){
                        var isChecked = $("#"+topping.name).is(':checked');
                        if(isChecked){
                            $("#"+topping.name+"-"+"price").text(topping.price);
                            toppingInput = topping.price;
                            pizzaToppings = topping.name;
                        }
                        else{
                            $("#"+topping.name+"-"+"price").text("")
                        }
                    })

    

                    total = sizeInput + crustInput + toppingInput;
                   
                   
                    $("#totalCost").text( "Ksh."+ total); 
                });
                
                $("form#orderDetails").submit(function(event){
                    
                    event.preventDefault();

                    netTotal += total;

                    var pizzaSelected = new pizzas(pizza.name,pizzaSize,pizzaCrust,pizzaToppings,total);

                    $("#nameOrder").text( pizzaSelected.name); 
                    $("#priceOrder").text( "Ksh." + pizzaSelected.total); 
                    $("#notordered").hide();
                    $(".table").show();
                    $("#total-orders").append('<tr><td id="pizza-name">'+pizzaSelected.name +'</td><td id="pizza-size">' + pizzaSelected.size + '</td><td id="pizza-crust">'+pizzaSelected.crust + '</td><td id="pizza-topping">'+pizzaSelected.toppings+'</td><td id="pizza-price">'+pizzaSelected.total+'</td></tr>');
                    $("#pizzatotalprice").text("Total Amount: " + netTotal);

                    $(".checkout-btn").show()
                }); 
            }
        })
    });
    $("button#proceedbutton").click(function(){
        $(".checkout").show();
        $("form#checkoutform").submit(function(event){
            event.preventDefault();
            var nameInput = $("input#user").val();
            var phoneInput = $("input#contacts").val();
            var locationInput = $("input#location").val();
            
    
            if(nameInput !== "" && locationInput !== "" && phoneInput !== ""){
                alert("Hallo "+ nameInput+ ","+" Thank You. We have received your order and it will be delivered to " + locationInput + " within the shortest time.");
            }
            $("input#user").val("");
            $("input#location").val("");
            $("input#contacts").val("");
        });
    })
});
