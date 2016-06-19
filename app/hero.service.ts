import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  static getHeroes() { return Promise.resolve(HEROES); }
}