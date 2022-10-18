import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;

    if (damage > 0) {
      const newLifePoints = this._lifePoints - damage;

      if (newLifePoints <= 0) {
        this._lifePoints = -1;
        return this._lifePoints;
      }

      this._lifePoints = newLifePoints;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
