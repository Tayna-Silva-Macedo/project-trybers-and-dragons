import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  private isSomeoneDead(): boolean {
    const isPlayerAlive = this._player.lifePoints !== -1;
    const areMonstersAlive = this._monsters.some(
      (monster) => monster.lifePoints !== -1,
    );

    if (isPlayerAlive && areMonstersAlive) return false;

    return true;
  }

  public fight(): number {
    while (!this.isSomeoneDead()) {
      this._monsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });
    }

    return super.fight();
  }
}
