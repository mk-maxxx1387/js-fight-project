// Create class Fighter
function Fighter(name, health = 100, power = 5) {
    this.name = name;
    this.health = health;
    this.power = power;
}

Fighter.prototype.setDamage = function(damage) {
    this.health = this.health - damage;
};

Fighter.prototype.hit = function(enemy, point) {
    let damage = this.power * point;
    enemy.setDamage(damage);
    console.log(`${this.name} hit ${enemy.name}. Damage: ${damage}`);
};

Fighter.prototype.knockout = function() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("time is up");
            resolve(`${this.name} is lose`);
        }, 1500);
    });
};
