import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  private isSomeoneDead(): boolean {
    const isPlayerAlive = this.player.lifePoints !== -1;
    const areMonstersAlive = this._monsters.some(
      (monster) => monster.lifePoints !== -1,
    );

    if (isPlayerAlive && areMonstersAlive) return false;

    return true;
  }

  public fight(): number {
    while (!this.isSomeoneDead()) {
      this._monsters.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
    }

    return super.fight();
  }
}
