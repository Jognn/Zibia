function klasy() {
  class EnemyTank {
    constructor(name, health) {
      this.health = health;
      this.name = name;
    }

    damage(dmg) {
      if(this.health > 0) {
        this.health -= dmg;
        if (this.health === 0)
          this.dead();
      }
    }

    dead() {
      console.log(`${this.name} died`);
    }

  }

  let enemyCount = 10;
  let enemies = [];

  for (let i = 1; i <= enemyCount; i++) {
    enemies.push(new EnemyTank(`tank ${i}`, i));
  }

  for (let i = 1; i <= 10; i++) {
      enemies.forEach((element) => {
      element.damage(1);
    });
  }
}
