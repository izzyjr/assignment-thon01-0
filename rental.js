var dealer = {
    cars: [], 
    
    displayCars: function ( ){              
        if (this.cars.length === 0) {
            console.log('your cars list is empty!')
        }
        else {
        console.log('My Cars:');
        for (var i = 0; i < this.cars.length; i++) {
            console.log (this.cars[i]);
        }
        }
    },
    addCars: function (category, money) {       
    this.cars.push({
        category: category,
        price: money,
        available: false
    });
    this.displayCars( );
    }
    numAvai: function ( ){
        for (var i = 0; i < this.cars.length; i++) {
            console.log (this.cars[i]);
        }
    }
};



dealer.addCars("sedan", 10)
