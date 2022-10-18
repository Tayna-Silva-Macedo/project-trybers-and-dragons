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

  public fight(): number {
    let playerIsAlive = this._player.lifePoints !== -1;
    let monstersAreAlive = this._monsters.some(
      (monster) => monster.lifePoints !== -1,
    );

    while (playerIsAlive && monstersAreAlive) {
      this._monsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });

      playerIsAlive = this._player.lifePoints !== -1;
      monstersAreAlive = this._monsters.some(
        (monster) => monster.lifePoints !== -1,
      );
    }

    return super.fight();
  }
}
